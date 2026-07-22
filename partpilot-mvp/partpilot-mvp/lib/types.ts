export type Language = "en" | "fr";

export type Vehicle = {
  id: string;
  year: number;
  make: string;
  model: string;
  trim: string;
  engine: string;
};

export type PartCategory = {
  id: string;
  name: Record<Language, string>;
};

export type Offer = {
  id: string;
  retailer: string;
  partId: string;
  priceCad: number;
  shippingCad: number;
  estimatedTaxCad: number;
  deliveryDays: string;
  returnDays: number;
  inStock: boolean;
  productUrl: string;
};

export type CanonicalPart = {
  id: string;
  categoryId: string;
  vehicleIds: string[];
  brand: string;
  manufacturerPartNumber: string;
  title: Record<Language, string>;
  position: Record<Language, string>;
  fitmentConfidence: "verified" | "supplier_confirmed" | "retailer_claimed";
  offers: Offer[];
};
