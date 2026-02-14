# PDF-Driven Design System
> Temperature 0: Visual rules derived strictly from the PDF source.

## 1. Typography Hierarchy
- **Display (H1)**: `font-family: Cormorant Garamond;`
  - Usage: Page Titles, "Designed by Emerald" logotype.
  - Size: 4rem - 6rem (Desktop). elegant, standard tracking.
- **Heading (H2)**: `font-family: Cormorant Garamond;`
  - Usage: Section headers (Vision, Mission, Projects).
  - Size: 2.5rem - 3.5rem.
- **Body (P)**: `font-family: Inter;`
  - Usage: Descriptions, specs.
  - Size: 1rem - 1.125rem. Readable, clean.
- **Accent**: `font-family: Inter; text-transform: uppercase; letter-spacing: 0.1em;`
  - Usage: Eyebrows, labels (e.g. "RESIDENTIAL", "DUBAI").

## 2. Color Palette
- **Primary Background**: `bg-neutral-950` (Black/Dark Grey) or `bg-emerald-950` (Deepest Green).
- **Secondary Background**: `bg-white` or `bg-cream-50` (Paper/Stationery tone).
- **Text Primary**: `text-neutral-900` (on light) / `text-white` (on dark).
- **Text Secondary**: `text-neutral-500` (Subtle).
- **Brand Accent**: Emerald Green `#1B4332`.

## 3. Layout & Spacing
- **Hero Sections**: Always 100vh or min 90vh. Image dominant.
- **Margins**: Generous. `gap-24` or `gap-32` between sections.
- **Grid**: 12-column distinct. Text often occupies 4-5 columns, Image 6-7 columns.
- **"Visual Silence"**: Use whitespace to frame high-quality renders.

## 4. Component Rules
- **Buttons**: Minimalist. Bordered or simple text links with arrow. No heavy shadows.
- **Images**: Sharp corners (no rounded-3xl unless PDF explicitly shows it - PDF usually precise/sharp for arch viz). **Correction: Remove `rounded-3xl` from current template.**
- **Navigation**: Minimal. Top aligned or side.
