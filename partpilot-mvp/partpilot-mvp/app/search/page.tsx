import { SearchResultsClient } from "@/components/search-results-client";
import type { Language } from "@/lib/types";

type SearchPageProps = {
  searchParams: Promise<{ vehicle?: string; category?: string; lang?: string }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const language: Language = params.lang === "fr" ? "fr" : "en";
  return <SearchResultsClient vehicleId={params.vehicle ?? "civic-2019-ex-15t"} categoryId={params.category ?? "brake-pads"} initialLanguage={language} />;
}
