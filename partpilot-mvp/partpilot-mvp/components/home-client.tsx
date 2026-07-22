"use client";

import { useState } from "react";
import { LanguageToggle } from "@/components/language-toggle";
import { VehicleSelector } from "@/components/vehicle-selector";
import type { Language } from "@/lib/types";

export function HomeClient() {
  const [language, setLanguage] = useState<Language>("en");
  return (
    <main>
      <header className="siteHeader">
        <a className="brand" href="/" aria-label="PartPilot home">
          <span className="brandMark">P</span>
          <span>PartPilot</span>
        </a>
        <nav>
          <a href="#how">{language === "en" ? "How it works" : "Fonctionnement"}</a>
          <a href="#categories">{language === "en" ? "Categories" : "Catégories"}</a>
          <LanguageToggle language={language} onChange={setLanguage} />
        </nav>
      </header>
      <VehicleSelector language={language} />
      <section className="section" id="how">
        <div className="sectionHeading">
          <span className="eyebrow">{language === "en" ? "SIMPLE BY DESIGN" : "CONÇU POUR ÊTRE SIMPLE"}</span>
          <h2>{language === "en" ? "From vehicle to best offer in three steps" : "Du véhicule à la meilleure offre en trois étapes"}</h2>
        </div>
        <div className="steps">
          <article><span>01</span><h3>{language === "en" ? "Choose your vehicle" : "Choisissez votre véhicule"}</h3><p>{language === "en" ? "Select the exact year, trim and engine." : "Sélectionnez l’année, la version et le moteur exacts."}</p></article>
          <article><span>02</span><h3>{language === "en" ? "Compare compatible parts" : "Comparez les pièces compatibles"}</h3><p>{language === "en" ? "Review normalized products, fitment and delivery." : "Consultez les produits normalisés, la compatibilité et la livraison."}</p></article>
          <article><span>03</span><h3>{language === "en" ? "Buy from the retailer" : "Achetez chez le détaillant"}</h3><p>{language === "en" ? "Open the selected offer and complete checkout." : "Ouvrez l’offre choisie et terminez l’achat."}</p></article>
        </div>
      </section>
    </main>
  );
}
