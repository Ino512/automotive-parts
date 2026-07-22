import type { CanonicalPart, PartCategory, Vehicle } from "@/lib/types";

export const vehicles: Vehicle[] = [
  { id: "civic-2019-ex-15t", year: 2019, make: "Honda", model: "Civic", trim: "EX", engine: "1.5L Turbo" },
  { id: "corolla-2021-le-18", year: 2021, make: "Toyota", model: "Corolla", trim: "LE", engine: "1.8L" },
  { id: "rav4-2022-le-25", year: 2022, make: "Toyota", model: "RAV4", trim: "LE", engine: "2.5L" },
  { id: "crv-2020-ex-15t", year: 2020, make: "Honda", model: "CR-V", trim: "EX", engine: "1.5L Turbo" },
  { id: "f150-2021-xlt-35", year: 2021, make: "Ford", model: "F-150", trim: "XLT", engine: "3.5L EcoBoost" }
];

export const categories: PartCategory[] = [
  { id: "brake-pads", name: { en: "Brake pads", fr: "Plaquettes de frein" } },
  { id: "brake-rotors", name: { en: "Brake rotors", fr: "Disques de frein" } },
  { id: "oil-filters", name: { en: "Oil filters", fr: "Filtres à huile" } },
  { id: "air-filters", name: { en: "Engine air filters", fr: "Filtres à air moteur" } },
  { id: "wheel-bearings", name: { en: "Wheel bearings", fr: "Roulements de roue" } }
];

export const parts: CanonicalPart[] = [
  {
    id: "bosch-bc1654",
    categoryId: "brake-pads",
    vehicleIds: ["civic-2019-ex-15t"],
    brand: "Bosch",
    manufacturerPartNumber: "BC1654",
    title: { en: "QuietCast Ceramic Brake Pad Set", fr: "Ensemble de plaquettes en céramique QuietCast" },
    position: { en: "Front axle", fr: "Essieu avant" },
    fitmentConfidence: "verified",
    offers: [
      { id: "offer-1", retailer: "Canadian Auto Parts", partId: "bosch-bc1654", priceCad: 79.99, shippingCad: 0, estimatedTaxCad: 10.40, deliveryDays: "2–4", returnDays: 30, inStock: true, productUrl: "#" },
      { id: "offer-2", retailer: "Marketplace Auto", partId: "bosch-bc1654", priceCad: 70.50, shippingCad: 12.99, estimatedTaxCad: 10.85, deliveryDays: "3–6", returnDays: 30, inStock: true, productUrl: "#" },
      { id: "offer-3", retailer: "Parts Direct", partId: "bosch-bc1654", priceCad: 75.25, shippingCad: 8.00, estimatedTaxCad: 10.82, deliveryDays: "5–8", returnDays: 45, inStock: true, productUrl: "#" }
    ]
  },
  {
    id: "akebono-act1654",
    categoryId: "brake-pads",
    vehicleIds: ["civic-2019-ex-15t"],
    brand: "Akebono",
    manufacturerPartNumber: "ACT1654",
    title: { en: "ProACT Ultra-Premium Ceramic Brake Pads", fr: "Plaquettes de frein en céramique ProACT Ultra-Premium" },
    position: { en: "Front axle", fr: "Essieu avant" },
    fitmentConfidence: "supplier_confirmed",
    offers: [
      { id: "offer-4", retailer: "Canadian Auto Parts", partId: "akebono-act1654", priceCad: 94.99, shippingCad: 0, estimatedTaxCad: 12.35, deliveryDays: "2–4", returnDays: 30, inStock: true, productUrl: "#" },
      { id: "offer-5", retailer: "Parts Direct", partId: "akebono-act1654", priceCad: 84.75, shippingCad: 9.99, estimatedTaxCad: 12.32, deliveryDays: "4–7", returnDays: 45, inStock: true, productUrl: "#" }
    ]
  },
  {
    id: "wagner-qc1654",
    categoryId: "brake-pads",
    vehicleIds: ["civic-2019-ex-15t"],
    brand: "Wagner",
    manufacturerPartNumber: "QC1654",
    title: { en: "ThermoQuiet Ceramic Brake Pads", fr: "Plaquettes de frein en céramique ThermoQuiet" },
    position: { en: "Front axle", fr: "Essieu avant" },
    fitmentConfidence: "retailer_claimed",
    offers: [
      { id: "offer-6", retailer: "Marketplace Auto", partId: "wagner-qc1654", priceCad: 61.95, shippingCad: 14.49, estimatedTaxCad: 9.94, deliveryDays: "3–7", returnDays: 30, inStock: true, productUrl: "#" },
      { id: "offer-7", retailer: "Parts Direct", partId: "wagner-qc1654", priceCad: 72.00, shippingCad: 7.50, estimatedTaxCad: 10.34, deliveryDays: "5–8", returnDays: 45, inStock: false, productUrl: "#" }
    ]
  }
];
