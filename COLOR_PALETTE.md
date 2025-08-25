# Color Palette and Typography Documentation

## Warm Bread-Inspired Color Palette

### Main Colors
- **Golden Crust** (`#9A7C4F`) — Primary color for buttons and links (WCAG AA compliant)
- **Dark Chocolate** (`#6B4423`) — Main color for titles and body text (WCAG AAA compliant)
- **Spiced Cinnamon** (`#D2691E`) — Accent color for hover states and highlights
- **Soft Flour** (`#FAF0E6`) — Main warm background
- **Creamy Crumb** (`#F5E6D3`) — Secondary background
- **Ripe Wheat** (`#DEB887`) — Used for highlighted/backgrounded sections

### Support Colors
- **Sesame Seed** (`#F4E4BC`) — Very light neutral
- **Dark Rye** (`#8B4513`) — Secondary text
- **Olive Oil** (`#9CAF88`) — Success/natural highlights

### Border Colors
- **Light Border** (`#E6D7C3`) — Light borders and dividers
- **Medium Border** (`#D4C5A9`) — Standard borders
- **Dark Border** (`#C4B59A`) — Emphasis borders

## Typography

### Font Families
- **Playfair Display** — Logo and brand elements (elegant serif with artisan feel)
- **Merriweather** — Headings (readable serif ideal for recipes)
- **Source Sans Pro** — Body text (clean sans-serif for legibility)
- **Dancing Script** — Decorative elements (script for special highlights)

### Font Sizes
- Extra Small: `0.75rem` (12px)
- Small: `0.875rem` (14px)
- Base: `1rem` (16px)
- Large: `1.125rem` (18px)
- Extra Large: `1.25rem` (20px)
- 2X Large: `1.5rem` (24px)
- 3X Large: `1.875rem` (30px)
- 4X Large: `2.25rem` (36px)

## Accessibility

### Color Contrast Ratios (WCAG Compliance)
- **Main text on background**: 7.54:1 ✅ AAA compliant
- **Primary links on background**: 3.48:1 ✅ AA Large text compliant
- **Accent color on background**: 3.23:1 ✅ AA Large text compliant

### Usage Guidelines
1. Use `--primary-color` for interactive elements (buttons, links)
2. Use `--text-primary` for main content text
3. Use `--accent-color` for hover states and highlights
4. Use `--bg-primary` for main page backgrounds
5. Use `--bg-secondary` for card backgrounds and navigation
6. Ensure sufficient contrast when creating custom color combinations

## Implementation

All colors are defined as CSS custom properties in `src/assets/css/variables.css` and automatically override Bootstrap's default color scheme for seamless integration.

### Bootstrap Integration
The color palette integrates with Bootstrap through CSS variable overrides:
- `--bs-primary` maps to Golden Crust
- `--bs-body-color` maps to Dark Chocolate
- `--bs-body-bg` maps to Soft Flour
- `--bs-link-color` maps to Golden Crust with proper contrast

### Responsive Design
All colors work consistently across desktop, tablet, and mobile breakpoints while maintaining accessibility standards.