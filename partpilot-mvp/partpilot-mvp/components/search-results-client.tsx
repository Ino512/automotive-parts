"use client";

import { useMemo, useState } from "react";
import { categories, parts, vehicles } from "@/lib/data";
import { calculateEstimatedTotal } from "@/lib/normalize";
import type { Language } from "@/lib/types";

const copy = {
  en: { back: "Change search", results: "compatible products", sort: "Sort by", lowest: "Lowest delivered price", delivery: "Fastest delivery", verified: "Verified fit", supplier: "Supplier-confirmed", retailer: "Retailer-claimed", from: "from", delivered: "estimated delivered", item: "Part", shipping: "Shipping", tax: "Estimated tax", total: "Estimated total", view: "View at retailer", out: "Out of stock", noResults: "No sample results are available for this vehicle and category yet." },
  fr: { back: "Modifier la recherche", results: "produits compatibles", sort: "Trier par", lowest: "Prix livré le plus bas", delivery: "Livraison la plus rapide", verified: "Compatibilité vérifiée", supplier: "Confirmé par le fournisseur", retailer: "Déclaré par le détaillant", from: "à partir de", delivered: "livré estimé", item: "Pièce", shipping: "Livraison", tax: "Taxe estimée", total: "Total estimé", view: "Voir chez le détaillant", out: "Rupture de stock", noResults: "Aucun résultat de démonstration n’est encore disponible pour ce véhicule et cette catégorie." }
};

type Props = { vehicleId: string; categoryId: string; initialLanguage: Language };

export function SearchResultsClient({ vehicleId, categoryId, initialLanguage }: Props) {
  const [language, setLanguage] = useState<Language>(initialLanguage);
  const [sort, setSort] = useState<"price" | "delivery">("price");
  const text = copy[language];
  const vehicle = vehicles.find((item) => item.id === vehicleId) ?? vehicles[0];
  const category = categories.find((item) => item.id === categoryId) ?? categories[0];

  const compatibleParts = useMemo(() => {
    const matches = parts.filter((part) => part.vehicleIds.includes(vehicle.id) && part.categoryId === category.id);
    return [...matches].sort((a, b) => {
      if (sort === "delivery") {
        const aDays = Math.min(...a.offers.filter((offer) => offer.inStock).map((offer) => Number.parseInt(offer.deliveryDays)));
        const bDays = Math.min(...b.offers.filter((offer) => offer.inStock).map((offer) => Number.parseInt(offer.deliveryDays)));
        return aDays - bDays;
      }
      const aPrice = Math.min(...a.offers.filter((offer) => offer.inStock).map((offer) => calculateEstimatedTotal(offer.priceCad, offer.shippingCad, offer.estimatedTaxCad)));
      const bPrice = Math.min(...b.offers.filter((offer) => offer.inStock).map((offer) => calculateEstimatedTotal(offer.priceCad, offer.shippingCad, offer.estimatedTaxCad)));
      return aPrice - bPrice;
    });
  }, [vehicle.id, category.id, sort]);

  function confidenceLabel(confidence: string) {
    if (confidence === "verified") return text.verified;
    if (confidence === "supplier_confirmed") return text.supplier;
    return text.retailer;
  }

  return (
    <main className="resultsPage">
      <header className="siteHeader resultsHeader">
        <a className="brand" href="/"><span className="brandMark">P</span><span>PartPilot</span></a>
        <div className="languageToggle">
          <button className={language === "en" ? "active" : ""} onClick={() => setLanguage("en")}>EN</button>
          <button className={language === "fr" ? "active" : ""} onClick={() => setLanguage("fr")}>FR</button>
        </div>
      </header>

      <section className="resultsHero">
        <a href="/" className="backLink">← {text.back}</a>
        <div className="resultsTopline">
          <div>
            <span className="eyebrow">{vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim} · {vehicle.engine}</span>
            <h1>{category.name[language]}</h1>
            <p>{compatibleParts.length} {text.results}</p>
          </div>
          <label className="sortControl"><span>{text.sort}</span><select value={sort} onChange={(event) => setSort(event.target.value as "price" | "delivery")}><option value="price">{text.lowest}</option><option value="delivery">{text.delivery}</option></select></label>
        </div>
      </section>

      <section className="resultsGrid">
        {compatibleParts.length === 0 ? <div className="emptyState">{text.noResults}</div> : compatibleParts.map((part) => {
          const sortedOffers = [...part.offers].sort((a, b) => calculateEstimatedTotal(a.priceCad, a.shippingCad, a.estimatedTaxCad) - calculateEstimatedTotal(b.priceCad, b.shippingCad, b.estimatedTaxCad));
          const lowest = sortedOffers.find((offer) => offer.inStock);
          return (
            <article className="productCard" key={part.id}>
              <div className="productIntro">
                <div className="partIcon large">{part.brand.slice(0, 2).toUpperCase()}</div>
                <div>
                  <div className={`fitmentBadge ${part.fitmentConfidence}`}>✓ {confidenceLabel(part.fitmentConfidence)}</div>
                  <h2>{part.brand} {part.title[language]}</h2>
                  <p>{part.manufacturerPartNumber} · {part.position[language]}</p>
                </div>
                {lowest && <div className="startingPrice"><span>{text.from}</span><strong>${calculateEstimatedTotal(lowest.priceCad, lowest.shippingCad, lowest.estimatedTaxCad).toFixed(2)}</strong><small>{text.delivered}</small></div>}
              </div>
              <div className="offersTable">
                {sortedOffers.map((offer, index) => {
                  const total = calculateEstimatedTotal(offer.priceCad, offer.shippingCad, offer.estimatedTaxCad);
                  return (
                    <div className={`offerRow ${index === 0 && offer.inStock ? "bestOffer" : ""} ${!offer.inStock ? "disabled" : ""}`} key={offer.id}>
                      <div className="retailerName"><strong>{offer.retailer}</strong><small>{offer.deliveryDays} days · {offer.returnDays}-day returns</small></div>
                      <div className="priceBreakdown"><span>{text.item} ${offer.priceCad.toFixed(2)}</span><span>{text.shipping} ${offer.shippingCad.toFixed(2)}</span><span>{text.tax} ${offer.estimatedTaxCad.toFixed(2)}</span></div>
                      <div className="offerTotal"><small>{text.total}</small><strong>${total.toFixed(2)}</strong></div>
                      {offer.inStock ? <a className="offerButton" href={offer.productUrl}>{text.view}</a> : <span className="outOfStock">{text.out}</span>}
                    </div>
                  );
                })}
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
