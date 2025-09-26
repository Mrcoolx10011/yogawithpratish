# Yoga & Meditation Website - AI Coding Instructions

## Project Architecture

This is a **single-page React application** for yoga and meditation services built with Vite, featuring a hybrid styling approach using both SCSS and Tailwind CSS. The app follows a component-driven architecture with centralized state management for shopping cart functionality.

### Key Architectural Patterns

- **Single-page app with React Router**: Home page renders all components in sequence (`Hero → Aboutme → Services → Gallery → Feedback → Demo → Ourteam → Contacts`), while individual routes serve specific pages
- **Dual styling system**: SCSS with custom mixins/variables for complex components + Tailwind for utilities
- **Centralized cart state**: `MyContextProvider` manages shopping cart across components
- **Service data architecture**: Tab-based services (Yoga/Meditation/Retreats) with nested pricing cards

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

### Services Component Architecture
The `Services.jsx` demonstrates the project's complex state pattern:
```jsx
// Tab-based service switching with cart integration
const [tab, setTab] = useState(0);
const { cart, setcart } = useMyContext();

// Nested data structure: serviceData[tab] → cardsData[tab][cardIndex]
```

### SCSS Organization
```scss
// _variables.scss: Brand colors and breakpoints
$secondary-background-color: #ece8e7;
$text-color: #333;

// _mixin.scss: Reusable component patterns
@mixin button-style { /* Standard golden button style */ }
@mixin section-padding-style { /* Consistent section spacing */ }
```

### Context Usage Pattern
```jsx
// Always destructure both cart and setcart
const { cart, setcart } = useMyContext();

// Cart conflict detection before adding items
const cardContainer = cart.map((ele) => ele.cardContainer);
if (cardContainer.includes(item.cardContainer)) {
  setShowModal(true); // Show conflict modal
}
```

## Integration Points

### External Services
- **EmailJS**: Contact form integration via `@emailjs/browser`
- **Firebase Auth**: Currently disabled in App.jsx (commented out `<AuthProvider>`)
- **React Bootstrap**: Modals and UI components
- **React Icons**: Consistent iconography with `react-icons/fa`

### Asset Management
- **Images**: Organized by feature in `src/assets/images/[feature]/`
- **Fonts**: Custom fonts in `assets/fonts/Roboto/` and `assets/fonts/MoonDance/`
- **Gallery**: Public images in `public/gallery/[1-9].jpg`

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