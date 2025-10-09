# Yoga & Meditation Website - AI Coding Instructions

## Project Architecture

This is a **single-page React application** for yoga and meditation services built with Vite, featuring a hybrid styling approach using both SCSS and Tailwind CSS. The app follows a component-driven architecture with centralized state management for shopping cart functionality.

### Key Architectural Patterns

- **Single-page app with React Router**: Home page renders all components in sequence (`Hero → TeachingsSection → ClassFlowSection → WellnessSection → YouTubeSection → Gallery → Feedback → Contacts`), while individual routes serve specific pages
- **Dual styling system**: SCSS with custom mixins/variables for complex components + Tailwind for utilities  
- **Centralized cart state**: `MyContextProvider` manages shopping cart across components with conflict detection
- **Service data architecture**: Evolution from tab-based services to modern `PricingSection` component with static pricing plans
- **Component composition**: Services now use `FloatingParticles` + `PricingSection` pattern for enhanced UX

## Development Workflow

```bash
# Essential commands
npm run dev          # Starts dev server on localhost:3000
npm run build        # Production build
npm run lint         # ESLint checking
```

### Critical Setup Requirements

1. **Font loading**: SCSS mixins reference custom fonts in `src/assets/fonts/`. Font paths MUST be correct or components will fail silently
2. **Firebase config**: Requires `.env` file with `VITE_*` prefixed variables. Missing config causes white screen
3. **Path aliases**: Vite configured with `@assets`, `@services`, `@components` aliases - use consistently

## Component Patterns

### Modern Pricing Architecture
The app has evolved from tab-based services to a cleaner architecture:
```jsx
// Current: Services.jsx → PricingSection component with static data
<FloatingParticles /> + <PricingSection />

// Legacy: database/services/data.js contains tab-based cardsData structure
// Use for reference but prefer modern static pricing plans in PricingSection
```

### Cart Integration Pattern
```jsx
// Always destructure both cart and setcart
const { cart, setcart } = useMyContext();

// Cart conflict detection before adding items
const cardContainer = cart.map((ele) => ele.cardContainer);
if (cardContainer.includes(item.cardContainer)) {
  setShowModal(true); // Show conflict modal
}
```

### SCSS Organization & Critical Font Loading
```scss
// _variables.scss: Brand colors and breakpoints
$secondary-background-color: #ece8e7;
$text-color: #333;

// _mixin.scss: Font mixins with absolute paths - CRITICAL for app functionality
@mixin heading-1 {
  @font-face {
    font-family: "Roboto-Black";
    src: url("../assets/fonts/Roboto/Roboto-Black.ttf") format("truetype");
  }
}
```

## Integration Points

### External Services & Dependencies
- **EmailJS**: Contact form integration via `@emailjs/browser`
- **Firebase Auth**: Currently disabled in App.jsx (commented out `<AuthProvider>`)
- **React Bootstrap**: Modals for cart conflicts and user feedback
- **Radix UI**: Modern components (`@radix-ui/react-*`) for UI primitives
- **Framer Motion + GSAP**: Animation libraries for enhanced UX
- **Three.js**: 3D effects integration capability

### Asset Management & Path Aliases
- **Vite aliases**: `@assets`, `@services`, `@components` configured in vite.config.js
- **Images**: Organized by feature in `src/assets/images/[feature]/`
- **Fonts**: Custom Roboto + MoonDance fonts in `assets/fonts/`
- **Gallery**: Static images in `public/gallery/[1-9].jpg`

## Common Pitfalls

1. **Font loading failures**: Check `_mixin.scss` font paths match actual file locations
2. **Firebase crashes**: Ensure `.env` exists with proper `VITE_*` variables or comment out `AuthProvider`
3. **Cart state conflicts**: Use provided conflict detection pattern before adding items
4. **SCSS compilation**: Import order matters - variables → mixins → components
5. **Route structure**: Home route renders multiple components; individual routes are separate pages

## File Structure Logic

```
src/
├── components/     # Reusable UI components
├── pages/         # Route-specific pages (Login, Signup, User)
├── context/       # Global state management
├── database/      # Static data (services, pricing)
├── provider/      # Authentication providers
├── store/         # Firebase configuration
└── styles/        # SCSS variables, mixins, component styles
```

When modifying this codebase:
- Follow the tab-based service pattern for new service categories
- Maintain the golden color theme (#b48821, #bb962d, #ba8508)
- Use the established modal pattern for user feedback
- Respect the single-page scrolling UX while keeping route separation clean