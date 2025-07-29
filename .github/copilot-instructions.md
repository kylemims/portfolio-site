# Portfolio Site - AI Agent Instructions

## Architecture Overview

This is a **React + Vite portfolio site** for a creative developer specializing in graphic design and web development. The site features a modern, dark aesthetic with custom CSS animations and Swiper.js gallery functionality.

### Key Technologies
- **React 19.1** with React Router DOM for client-side routing
- **Vite** for development and building
- **Swiper.js** for image galleries and sliders
- **CSS Custom Properties** for design system consistency
- **Intersection Observer API** for scroll animations

## Design System & Styling

### CSS Architecture
- **`src/styles/root.css`** - Global CSS variables and reset (ALWAYS import this first)
- **Component-specific CSS** files co-located with components
- **CSS Custom Properties** defined in `:root` - use these exclusively for colors/typography:

```css
--primary-bg: #0f111a     /* Main background */
--accent-color: #eb6f92   /* Pink highlights */
--highlight-color: #f6c177 /* Gold text */
--text-color: #e0def4     /* Main text */
--card-bg: #2a2c39        /* Card backgrounds */
```

### Typography System
- **Headings**: `var(--font-heading)` (Bebas Neue) - always uppercase with `letter-spacing: 1px`
- **Body text**: `var(--font-body)` (Inter)
- **Google Fonts** loaded in `index.html`

## Component Patterns

### Page Structure
```
App.jsx (Router + Layout)
├── Header (Fixed navigation with backdrop-filter blur)
├── Spacer (120px height to offset fixed header)
├── Page Components (wrapped in <Wrapper>)
└── Footer
```

### The Wrapper Pattern
Every page uses `<Wrapper>` component which applies consistent max-width and padding via `--section-padding` CSS variable.

### Modal System
- **`ConfirmModal.jsx`** - Simple confirmation dialogs
- **`GalleryModal.jsx`** - Swiper-powered image galleries
- Both share styles from `ConfirmModal.css`
- Modal overlay pattern: `rgba(15, 17, 26, 0.85)` background with blur

## Swiper.js Integration

### Gallery Pattern (GraphicDesignGallery)
```jsx
// Data structure for gallery items
const designs = [
  {
    name: "ItemName",
    thumb: "/assets/graphic-design/item-thumbnail.webp", 
    full: "/assets/graphic-design/item-feature.webp"
  }
];

// Modal integration
<GalleryModal 
  images={[...]} 
  startIndex={clickedIndex}
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
/>
```

### Swiper Configuration
- Import modules: `Navigation, Pagination` from `swiper/modules`
- Always include CSS: `"swiper/css"`, `"swiper/css/navigation"`, `"swiper/css/pagination"`
- Enable `loop` and `initialSlide` for better UX

## Animation Patterns

### Intersection Observer for Scroll Animations
See `Projects.jsx` - cards start with `opacity: 0; transform: translateY(20px)` and animate to visible state when `.visible` class is added via Intersection Observer.

### Hover Effects
- `transform: scale(1.05)` for cards
- `box-shadow` with accent color glow
- Smooth transitions (0.2s-0.3s ease)

## Asset Organization

### Directory Structure
```
public/assets/
├── pizza-app-mockup.png, parkplan-mockup.png (main projects)
└── graphic-design/
    ├── *-thumbnail.webp (170x170px grid thumbnails)
    └── *-feature.webp (full-size gallery images)
```

### Image Patterns
- **Thumbnails**: 170x170px, used in gallery grids
- **Features**: High-res versions for modal/gallery view
- **WebP format** for optimization

## Development Commands

```bash
npm run dev      # Start dev server (port 5173)
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # ESLint check
```

## Router Structure

```
/ → AboutPage (Hero + Projects)
/contact → ContactPage (Form with ConfirmModal)
/websites-apps → WebsitesAppsPage
/graphic-design → GraphicDesignPage (GraphicDesignGallery + legacy cards)
```

### Navigation Pattern
- Use `NavLink` from react-router-dom for active states
- `end` prop on "/" route to avoid matching all paths

## Fixed Header Handling

**Critical**: Fixed header requires:
1. Header positioned `fixed` with `z-index: 1000`
2. Spacer div with height matching header (120px desktop, 100px mobile)
3. Main content gets `padding-top: 120px` via `.spacer` class

## Common Gotchas

- **CSS Variables**: Always use the predefined ones in `root.css`
- **Responsive**: Mobile-first approach with `768px` breakpoint
- **Modal z-index**: Use `2000` to ensure modals appear above fixed header
- **Swiper styling**: Target `.swiper-button-*` and `.swiper-pagination-*` classes for customization
- **Image paths**: All assets use `/assets/` prefix (public folder)

## Project-Specific Notes

This is a **creative portfolio** emphasizing visual design - prioritize:
- Smooth animations and transitions
- Consistent use of brand colors (pink/gold palette)
- Mobile-responsive gallery grids
- Accessible modal interactions (click overlay to close, ESC key support)
