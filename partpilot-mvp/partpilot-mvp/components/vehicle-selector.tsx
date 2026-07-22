"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { categories, vehicles } from "@/lib/data";
import type { Language } from "@/lib/types";

type Props = { language: Language };

const copy = {
  en: {
    title: "Find the right part at the lowest delivered price",
    subtitle: "Choose your vehicle and compare compatible parts from multiple retailers.",
    vehicle: "Vehicle",
    category: "Part category",
    search: "Compare prices",
    fitment: "Fitment-first search",
    cad: "Prices in CAD",
    transparent: "Transparent shipping"
  },
  fr: {
    title: "Trouvez la bonne pièce au meilleur prix livré",
    subtitle: "Choisissez votre véhicule et comparez les pièces compatibles de plusieurs détaillants.",
    vehicle: "Véhicule",
    category: "Catégorie de pièce",
    search: "Comparer les prix",
    fitment: "Recherche axée sur la compatibilité",
    cad: "Prix en CAD",
    transparent: "Livraison transparente"
  }
};

export function VehicleSelector({ language }: Props) {
  const router = useRouter();
  const [vehicleId, setVehicleId] = useState(vehicles[0].id);
  const [categoryId, setCategoryId] = useState(categories[0].id);
  const text = copy[language];

  const selectedVehicle = useMemo(
    () => vehicles.find((vehicle) => vehicle.id === vehicleId) ?? vehicles[0],
    [vehicleId],
  );

  function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const params = new URLSearchParams({ vehicle: vehicleId, category: categoryId, lang: language });
    router.push(`/search?${params.toString()}`);
  }

  return (
    <section className="hero">
      <div className="heroContent">
        <div className="eyebrow">PARTPILOT · CANADA</div>
        <h1>{text.title}</h1>
        <p className="heroSubtitle">{text.subtitle}</p>

        <form className="searchPanel" onSubmit={submit}>
          <label>
            <span>{text.vehicle}</span>
            <select value={vehicleId} onChange={(event) => setVehicleId(event.target.value)}>
              {vehicles.map((vehicle) => (
                <option key={vehicle.id} value={vehicle.id}>
                  {vehicle.year} {vehicle.make} {vehicle.model} {vehicle.trim} · {vehicle.engine}
                </option>
              ))}
            </select>
          </label>

          <label>
            <span>{text.category}</span>
            <select value={categoryId} onChange={(event) => setCategoryId(event.target.value)}>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>{category.name[language]}</option>
              ))}
            </select>
          </label>

          <button className="primaryButton" type="submit">{text.search} <span aria-hidden>→</span></button>
        </form>

        <div className="selectedSummary">
          <span className="statusDot" />
          {selectedVehicle.year} {selectedVehicle.make} {selectedVehicle.model} · {selectedVehicle.engine}
        </div>

        <div className="benefits">
          <div><strong>✓</strong>{text.fitment}</div>
          <div><strong>✓</strong>{text.cad}</div>
          <div><strong>✓</strong>{text.transparent}</div>
        </div>
      </div>

      <div className="heroVisual" aria-hidden="true">
        <div className="visualGlow" />
        <div className="comparisonMock">
          <div className="mockHeader"><span>Front brake pads</span><span className="verified">✓ Verified fit</span></div>
          <div className="mockProduct">
            <div className="partIcon">BP</div>
            <div><strong>Bosch QuietCast</strong><small>BC1654 · Front axle</small></div>
          </div>
          <div className="mockOffer best"><span>Canadian Auto Parts</span><strong>$90.39</strong></div>
          <div className="mockOffer"><span>Marketplace Auto</span><strong>$94.34</strong></div>
          <div className="mockOffer"><span>Parts Direct</span><strong>$94.07</strong></div>
          <div className="mockFooter">Estimated delivered price · CAD</div>
        </div>
      </div>
    </section>
  );
}
