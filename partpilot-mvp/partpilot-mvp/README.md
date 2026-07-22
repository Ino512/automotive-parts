# PartPilot MVP

A Canada-first automotive-parts comparison prototype built with Next.js, TypeScript and sample data.

## Included

- English/French interface
- Exact vehicle selector
- Part-category selector
- Compatible canonical products
- Retailer offers sorted by estimated delivered price
- Price, shipping and estimated tax breakdown
- Fitment confidence labels
- Responsive desktop/mobile UI
- Part-number and brand normalization helpers
- Data types ready to replace with Supabase records

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

The sample comparison currently contains live UI data for:

- 2019 Honda Civic EX 1.5L Turbo
- Front brake pads

Other vehicle/category selections intentionally show an empty state until the database is expanded.

## Recommended next implementation phase

1. Create a Supabase project.
2. Add tables for vehicles, parts, fitments, retailers, offers and clickouts.
3. Replace `lib/data.ts` with server-side Supabase queries.
4. Add a retailer adapter under `lib/retailers/`.
5. Add a clickout API route before redirecting to retailer links.
6. Add admin pages for match and fitment review.

## Push into the GitHub repository

After extracting this project:

```bash
git init
git remote add origin https://github.com/Ino512/automotive-parts.git
git add .
git commit -m "Build initial PartPilot comparator MVP"
git branch -M main
git push -u origin main
```

If the remote repository already contains files, clone it first and copy these files into the clone rather than initializing a new repository.
