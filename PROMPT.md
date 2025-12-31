# Luxury Fashion House Commerce App — Master Build Prompt (Copy/Paste)

Replace the bracketed placeholders (e.g., `[BRAND_NAME]`) and paste everything below into your AI assistant to generate a complete, production-grade spec + implementation plan.

---

## COPY/PASTE PROMPT

You are a principal product designer + staff mobile engineer + solutions architect. Create an end-to-end, *implementation-ready* blueprint for a **luxury fashion house** commerce app with "mirror-level" detailing and polish comparable to top-tier European luxury brands.

### 0) Project Inputs (fill these in)
- Brand name: **[BRAND_NAME]**
- Tagline / brand values (3–5): **[TAGLINE_AND_VALUES]**
- Target market(s): **[COUNTRY/REGIONS]**
- Target audience: **[AUDIENCE]** (e.g., HNWIs, premium aspirational, ages, etc.)
- Platforms: **iOS + Android**
- Preferred stack (choose one): **Flutter / React Native / Native (Swift+Kotlin)**
- Backend preference: **Node.js / Django / Laravel / .NET**
- Database preference: **Postgres / MySQL**
- Payments (select): **Stripe / Razorpay / PayPal / Apple Pay / Google Pay**
- Shipping/logistics (select): **Shiprocket / Delhivery / DHL / FedEx**
- Languages: **[LANGS]** (e.g., English + Hindi)
- Currency: **[CURRENCY]**

### 1) Output Requirements (strict)
Deliver the blueprint in the following sections **with high granularity**:
1. **Executive Summary** (what we are building and why)
2. **User Personas + Primary Journeys**
3. **Information Architecture** (tabs, navigation map) + key screens list
4. **Design System** (tokens, typography, spacing, elevation, motion)
5. **UI Specs per Screen** (layout, components, microcopy, empty states, errors)
6. **Functional Requirements** (P0/P1/P2)
7. **Data Model** (ERD description) + tables/collections with fields
8. **API Specification** (REST or GraphQL) with endpoints, payloads, auth rules
9. **App Architecture** (modules, folder structure, state management)
10. **Admin/Backoffice** (product + inventory + orders + CRM + content)
11. **Security/Compliance** (PCI, GDPR/India DPA, OWASP, secrets handling)
12. **Performance** (budgets, caching, image pipeline, offline mode)
13. **Analytics & Experimentation** (events naming, funnels)
14. **Testing Strategy** (unit/integration/e2e, device matrix)
15. **Release Plan** (phased rollout, feature flags)
16. **Risks & Mitigations**
17. **Concrete Development Plan** (milestones, tickets, estimates)

### 2) Brand & Visual Direction (must match luxury)
Design for **quiet luxury** with tactile depth:
- Minimalist sophistication, exact spacing, strong typographic hierarchy
- Cinematic product photography, dramatic lighting, generous negative space
- Subtle, weighty animations (never playful)

#### Color Palette (luxury)
Use this palette and define tokens:
- Deep Emerald: `#0A2F1F` (primary, navigation, key CTAs)
- Champagne Gold: `#D4AF37` (premium accents, badges)
- Ivory: `#FFFEF7` (background base)
- Charcoal: `#2C2C2C` (primary text)
- Warm Grey: `#8B8B8B` (secondary text)

#### Typography
- Display: refined serif (brand moments, 32–48pt)
- Body: neutral sans (14–16pt)
- Accent: fine serif (12–14pt) for price/specs

#### Spacing & Layout Rules
- 8px increments, 24px base grid
- Corners: 8px radius (cards), 12px radius (modals)
- Border: 1–1.5px subtle strokes
- Shadows: soft, premium (e.g., `0 8px 24px rgba(0,0,0,0.08)`)

#### Motion
- 250–320ms, ease-out; 450ms for hero transitions
- Haptics on: add-to-cart, wishlist, payment success

### 3) Must-Have Consumer Features (P0)
Build a full luxury commerce experience:

**Onboarding & Account**
- Guest browsing + optional guest checkout
- Auth: email/phone OTP + optional password, social login (Apple/Google)
- Profile: addresses, payment methods, sizing profile, preferences
- Membership tiers: Bronze/Silver/Gold/Platinum with perks

**Home & Discovery**
- Hero editorial carousel (campaigns)
- Curated collections (Seasonal, Icons, Limited)
- Personalized feed based on browsing + wishlists
- Search with autosuggest, trending, recent

**Catalog**
- Categories + filters (size, color, material, price, availability, new-in)
- Sort (new, price, popularity)
- "Low stock" and "limited edition" signals

**Product Detail (mirror-level detail)**
- 2000x2000+ images, zoom up to 5×, progressive loading
- Optional 360° spin and 30–60s craftsmanship/runway video
- Full specs: materials, origin, care, fit notes, model measurements
- Size guide + size recommendation based on profile + returns history
- Add to wishlist, add to cart, buy now
- Delivery ETA and returns policy surfaced clearly
- Cross-sell: "Complete the look" + "You may also like"

**Cart & Checkout**
- Cart: editable quantities, saved for later
- Shipping: address book + delivery scheduling (white-glove)
- Payments: selected integrations + 3DS where applicable
- Promotions: gift cards, referral, VIP early-access codes
- Confirmation: order number, delivery timeline, invoice

**Orders**
- Order timeline (confirmed → packed → shipped → delivered)
- Real-time tracking via logistics integration
- Returns/exchanges workflow + labels

**Wishlist**
- Foldering/boards (e.g., "Evening", "Work")
- Price-drop + back-in-stock alerts

**Support**
- In-app chat + escalation to human agent
- FAQ and order help

### 4) Premium / Differentiators (P1)
- Virtual stylist consultation booking (in-app calendar + video call link)
- Digital wardrobe: purchased items, styling suggestions
- AR try-on (optional) for select categories
- Limited edition drops: countdown timers, waitlist, invite-only access
- Gift packaging personalization + monogram (made-to-order)

### 5) Admin/Backoffice (must allow products to be added and managed)
Define a secure admin portal with roles:
- Roles: Admin, Merchandiser, Support Agent, Warehouse Manager

**Product Management**
- Create/edit products (variants, sizes, images, videos, tags)
- Bulk import/export (CSV) + image URL mapping
- Collections builder (drag-and-drop merchandising)

**Inventory**
- Stock by warehouse (multi-location)
- Reservations and low-stock thresholds

**Orders & Returns**
- Order list, statuses, refunds, exchanges
- RMA generation and label creation

**CRM**
- Customer profiles, tier management, notes
- Segments and campaigns export

**Content**
- Editorial stories, designer notes, lookbooks

### 6) Concrete Data Model (include in your response)
Include tables/collections for:
- users, sessions/auth, addresses
- products, product_variants, product_images, product_videos
- collections, collection_items
- inventory_locations, inventory_levels, inventory_reservations
- carts, cart_items
- orders, order_items, payments, refunds
- shipments, shipment_events
- wishlists, wishlist_items
- membership_tiers, membership_history
- promotions/coupons, gift_cards
- support_tickets, chat_messages
- audit_logs (admin actions)

### 7) API Spec (include in your response)
Provide endpoint list with examples, including:
- Auth: signup/login/OTP verify, refresh token, logout
- Catalog: list/search products, filters, product detail
- Cart: create/update cart, apply coupon
- Checkout: create payment intent, confirm payment
- Orders: create, list, detail, cancel, return
- Wishlist: CRUD
- Admin: product CRUD, inventory adjustments, order status updates

### 8) Non-Functional Requirements (must)
- Launch time < 2s, product page < 1s (cached)
- 60fps animations on flagship devices
- Offline: browse previously viewed products
- App size target: < 150MB
- Security: PCI-safe payment handling (use hosted fields/SDKs), encryption at rest/in transit
- Accessibility: WCAG 2.1 AA (focus states, contrast, dynamic type)

### 9) Deliverables (explicit)
In your final answer, include:
- Screen-by-screen spec checklist
- Component inventory (design system components)
- Navigation map diagram in text form
- Suggested repo structure
- Database schema (fields + indexes)
- Sample API requests/responses
- A prioritized backlog (epics → stories → tasks)
- A 6–10 week roadmap with milestones

### 10) Tone & Detail Level
Write like a senior team handing off to engineers and designers. Be extremely specific: spacing rules, component behavior, state transitions, errors, skeleton loaders, empty states, and edge cases.

---

## Optional: Brand Name Ideas (if needed)
If `[BRAND_NAME]` is not provided, generate 10 luxury-appropriate names and pick one.
