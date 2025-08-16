project-root/
│
├── app/                               # Next.js App Router (pages, layouts, API routes)
│   ├── (public)/                      # Public-facing routes (home, shop, service pages, etc.)
│   │   ├── layout.tsx                  # Main layout (navbar, footer, etc.)
│   │   ├── page.tsx                    # Home page
│   │   ├── services/                   # Car services section
│   │   │   ├── page.tsx
│   │   │   ├── [serviceId]/page.tsx
│   │   ├── parts/                      # Car parts shop section
│   │   │   ├── page.tsx
│   │   │   ├── [partId]/page.tsx
│   │   └── contact/page.tsx
│   │
│   ├── (auth)/                         # Authentication-related routes
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │
│   ├── (dashboard)/                    # Admin/Staff Dashboard
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── orders/page.tsx
│   │   ├── products/page.tsx
│   │   ├── services/page.tsx
│   │
│   ├── api/                            # API routes (server actions)
│   │   ├── products/
│   │   │   └── route.ts
│   │   ├── services/
│   │   │   └── route.ts
│   │   ├── orders/
│   │   │   └── route.ts
│   │   └── auth/
│   │       └── route.ts
│   │
│   └── globals.css                     # Global styles
│
├── components/                         # Reusable UI components
│   ├── common/                         # Buttons, inputs, modals, loaders
│   ├── layout/                         # Navbar, Footer, Sidebar
│   ├── shop/                           # Product cards, category filters
│   ├── service/                        # Service cards, booking form
│
├── hooks/                              # Custom React hooks
│   ├── useCart.ts
│   ├── useAuth.ts
│
├── lib/                                # Utility functions & helpers
│   ├── axiosInstance.ts                # Pre-configured Axios
│   ├── formatCurrency.ts
│   ├── validators.ts
│
├── store/                              # State management (Zustand / Redux)
│   ├── cartStore.ts
│   ├── userStore.ts
│
├── types/                              # TypeScript types
│   ├── product.ts
│   ├── service.ts
│   ├── user.ts
│   ├── order.ts
│
├── public/                             # Static assets (images, icons, etc.)
│   ├── images/
│   ├── logos/
│
├── styles/                             # CSS Modules / Tailwind Config
│   ├── variables.css
│   ├── animations.css
│
├── .env                                # Environment variables
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
