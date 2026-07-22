export function normalizePartNumber(value: string): string {
  return value.trim().toUpperCase().replace(/[^A-Z0-9]/g, "");
}

export function normalizeBrand(value: string): string {
  return value
    .trim()
    .toUpperCase()
    .replace(/\b(AUTOMOTIVE|AUTO PARTS|INC|LTD|LLC)\b/g, "")
    .replace(/[^A-Z0-9]/g, "");
}

export function createProductKey(brand: string, manufacturerPartNumber: string): string {
  return `${normalizeBrand(brand)}:${normalizePartNumber(manufacturerPartNumber)}`;
}

export function calculateEstimatedTotal(
  priceCad: number,
  shippingCad: number,
  estimatedTaxCad: number,
): number {
  return Number((priceCad + shippingCad + estimatedTaxCad).toFixed(2));
}
