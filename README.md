# KPI Next.js Starter (Supabase + RLS)

Minimalistische starter die aansluit op het Supabase-schema/RLS uit je canvas.

## Snel starten
1. `pnpm i` of `npm i`
2. `.env` aanmaken op basis van `.env.example`
3. Supabase: draai SQL uit canvas (types, tabellen, views, seeds, RLS)
4. `npm run dev` → open `http://localhost:3000`

## Belangrijke paden
- `src/lib/supabase.ts` – server-side Supabase client (met cookies)
- `src/app/app/dept/[id]/page.tsx` – KPI-status + invulformulier
- `src/app/actions/kpi.ts` – server action insert naar `kpi_values`
- `src/components/StatCard.tsx` – statuskaart
- `src/components/KpiValueForm.tsx` – eenvoudige waarde-invoer

## Opmerkingen
- Auth: login via magic link (zie `/login`). Je kunt Supabase MFA aanzetten.
- Beveiliging: echte toegangscontrole via **RLS** in de database.
- Styling: Tailwind, simpele card-class.
- Grafiek kun je toevoegen met `recharts`.
