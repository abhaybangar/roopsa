# Roopasa Ayurveda --- Homepage Design Specification

## 1. Objective

Rebuild the Roopasa Ayurveda homepage as a full-width, premium Ayurvedic
skincare and wellness ecommerce experience.

The current implementation is visually unacceptable because the whole
website is constrained to a narrow centered column while large empty
margins remain on both sides. The hero, product cards, category banners,
story section, and footer all appear shrunken.

**Fix the underlying layout and sizing system, not just individual font
sizes.** The desktop site must use the available viewport width. Content
can use intentional max-width containers, but the hero and wide
promotional banners must span the viewport. Product grids should be
wide, balanced, and readable.

## 2. Required stack

-   Next.js App Router
-   JavaScript only (no TypeScript)
-   Tailwind CSS
-   Motion for React / Framer Motion for animation
-   Lucide React for icons, if needed

Inspect the existing project before changing it. Preserve working
configuration and scripts. Do not replace the project with a static
mockup.

## 3. Supplied assets --- use the actual files

I will place the final approved assets in the project's `public/`
folder, including:

-   Roopasa Ayurveda logo
-   Main hero banner
-   Additional hero-slide banners
-   Offer / festive promotional banner(s)
-   Skincare category banner
-   Natural Waters / Rose Water banner
-   Ayurvedic Foods / Saffron Honey banner
-   Original product photographs
-   Brand / lifestyle images

**Before coding, inspect the contents of `public/` and create an asset
map. Use the actual filenames and paths you find.** Do not guess
filenames, rename assets unnecessarily, or use broken paths.

Use the supplied banners and photos as the primary visual assets. Do not
substitute unrelated stock imagery or generate different product
packaging. Preserve the real product bottle, jar, label, logo,
proportions, and identity.

If a supplied hero banner already includes its own headline, logo, text,
CTA, or benefit icons, choose one approach: 1. Display the complete
banner as the hero image without duplicating its embedded text; or 2.
Rebuild the layout in HTML only if the supplied file is a clean
image/background that supports separate text.

Never overlay duplicate text or logos on a banner that already contains
them.

## 4. Global layout rules --- fix the shrink problem first

### Desktop

-   Remove accidental global `max-width`, narrow fixed width, `scale()`,
    or transform that shrinks the entire site.
-   Do not wrap the whole application in a small centered container.
-   Use `width: 100%` / `w-full` for page-level sections.
-   Use responsive inner containers such as
    `w-full max-w-[1440px] mx-auto px-6 lg:px-10 2xl:px-14` only for
    normal text and product content.
-   For wide monitors, allow sections and hero banners to expand while
    keeping text readable.
-   Main page sections must occupy the viewport width, not a small
    column in the middle.
-   Do not use fixed desktop widths that cause the page to render at a
    small size.
-   Avoid setting the entire homepage to `max-width: 800px`,
    `width: 60%`, `zoom`, or `transform: scale(...)`.
-   Use a consistent spacing system and align section edges
    intentionally.

### Hero and campaign banners

-   Main hero image must be wide and relatively short: target
    approximately **2.8:1 to 3.5:1** desktop aspect ratio, depending on
    the actual banner.
-   Hero should span edge-to-edge or nearly edge-to-edge.
-   Use `width: 100%`, `object-fit: cover`, and intentional
    `object-position`.
-   Do not force the hero into a tall card or portrait-shaped container.
-   Do not crop out important product packaging or embedded text. Adjust
    `object-position` and aspect ratio after inspecting the supplied
    asset.
-   Offer / festive banners belong in the hero slideshow as additional
    slides, not as a separate large offer section lower on the page.

### Mobile

-   Use responsive padding and grids.
-   Stack elements where needed.
-   Never cause horizontal overflow.
-   Do not shrink desktop layouts to fit mobile; redesign the
    composition responsively.

## 5. Visual direction

Create a premium, calm, botanical, editorial identity: - Warm ivory:
`#FAF4EA` - Cream: `#F2E5D5` - Deep botanical green: `#153D2A` - Forest
green: `#102D20` - Muted gold: `#B58A48` - Soft rose: `#E9B5B7` -
Charcoal: `#24231F`

Use an elegant high-contrast serif for display headlines and a clean
sans-serif for navigation, product information, body text, and buttons.
Use generous whitespace, but do not create huge empty vertical gaps.
Maintain strong visual hierarchy and a polished luxury beauty-store
feel.

Avoid generic template styling, tiny text, narrow centered content,
excessive rounded cards, random floating decorations, unnecessary
gradients, and inconsistent section widths.

## 6. Page order --- follow this exact sequence

### A. Announcement bar

A slim full-width forest-green strip at the top. Only show real,
approved shipping or offer claims. If values are not confirmed, keep
copy editable and clearly marked for review.

### B. Navigation

A full-width, premium header containing: - Actual Roopasa logo - Home -
Shop - Skincare - Natural Waters - Ayurvedic Foods - Our Story -
Search - Account (demo if not connected) - Wishlist - Cart with item
count

Keep the logo readable. Keep navigation horizontally balanced on
desktop. Use a functional mobile menu. Header can become sticky on
scroll with a subtle background and border.

### C. Hero slideshow --- short, wide, edge-to-edge

This is the first major visual section.

-   Build a responsive carousel with the supplied hero banners.
-   Use a wide aspect ratio and restrained height.
-   The hero must not look like a small image inside a narrow page.
-   Make each slide fill the hero frame.
-   Include previous / next arrows and unobtrusive pagination
    indicators.
-   Add automatic slide progression every 5--7 seconds.
-   Pause autoplay on hover and when the user interacts; respect
    reduced-motion preferences.
-   Include the approved main hero image and any supplied offer /
    festive banner as slides in this same carousel.
-   Use a soft crossfade or restrained horizontal transition.
-   Avoid aggressive zoom, parallax, or distracting motion.
-   Ensure controls are keyboard accessible and have descriptive labels.
-   Do not duplicate banner text if text is already baked into the
    image.

### D. Best Sellers --- immediately after hero

Start the product content directly below the hero. Do not put a large
category section or brand story between the hero and best sellers.

-   Full-width section background in warm ivory.
-   Inner content container with clear horizontal margins.
-   Heading: "Best Sellers" and a concise subtitle.
-   Show a responsive product grid: 4 columns on desktop, 2 on
    tablet/mobile as space allows.
-   Use actual product photographs from `public/`.
-   Cards should have consistent image proportions, readable titles,
    descriptions, price, and a clear Add to Cart button.
-   Use subtle borders/shadows and restrained hover states.
-   Keep cards visually substantial; do not squeeze four tiny cards into
    a narrow centered container.
-   Do not invent prices, review counts, ratings, discounts, or claims.
    Use configurable data and obvious placeholders for unknown values.

### E. "The Goodness Inside" --- ingredients

After Best Sellers, show natural ingredient highlights in a clean, wide
editorial row.

Potential ingredients only where supported by supplied product
information: - Aloe vera - Rose water - Saffron - Honey - Sea
buckthorn - Turmeric

Use real supplied images if available; otherwise use tasteful,
consistent imagery or minimal icons. Avoid unsupported efficacy claims.

### F. Explore Our Ayurvedic Range --- full product catalogue

Immediately after "The Goodness Inside", display the full product
catalogue.

Include: - Heading: "Explore Our Ayurvedic Range" - Search or sort
control if useful - Category filter chips, with a working selected
state: - All Products - Skincare - Natural Waters - Ayurvedic Foods -
Hair Care - Body Care - Gifting - Only show categories that make sense
for the supplied inventory. - Product grid with consistent card sizing
and image treatment. - Filtering must actually update displayed
products. - Provide a useful empty state if a category has no
products. - Use the real supplied product images. Never use the same
image for unrelated products. - Use a reusable `products.js` data file
for image path, name, category, description, price, and optional
fields. - Do not invent missing commercial details; make them
configurable.

### G. Brand story

After the catalogue, add a premium split layout using the supplied
lifestyle / brand photo and concise copy: "Rooted in Ayurveda. Made for
Today." Use supplied logo and brand assets. Do not fabricate company
history or unsupported claims.

### H. Customer reviews

Add a polished, responsive reviews section after the brand story.

-   Use real customer reviews only if provided.
-   If there are no verified reviews, use clearly labelled demo
    placeholders in development and do not present them as authentic
    testimonials.
-   Do not invent ratings or customer counts.
-   Keep typography readable and cards comfortably sized.

### I. Contact section / contact page

After reviews, add a clear contact CTA and a real contact page or route.

-   Contact form with name, email or phone, and message.
-   Client-side validation and clear success/error states.
-   If no backend is connected, say it is a demo form and do not claim a
    message was actually sent.
-   Show only verified contact information supplied by the client.
-   Include WhatsApp CTA only when the actual business number is
    available.
-   Make the section visually consistent with the rest of the site.

### J. Service benefits

Use a compact horizontal strip for verified benefits such as shipping,
secure payments, returns, and customer support. Do not promise services
that have not been confirmed.

### K. Footer

Full-width forest-green footer with: - Logo and short brand summary -
Shop links - About links - Help and policy links - Newsletter form -
Social links only if actual URLs are supplied - Copyright text with
configurable year

Footer must use the viewport width and must not be trapped inside the
narrow centered column seen in the current version.

## 7. Product photography treatment

Product imagery is central to this design.

-   Use the real product images supplied in `public/`.
-   Use a consistent image frame and suitable aspect ratio.
-   Keep labels readable and product proportions intact.
-   Improve perceived quality with careful cropping, clean backgrounds,
    subtle shadows, and restrained hover transitions.
-   Where appropriate, place products on warm cream, pale stone, or
    botanical backgrounds.
-   Never distort product photos using CSS transforms.
-   Never replace a real label, invent packaging, or put a different
    product into a card.
-   Do not use a generated image as the source of truth for exact
    packaging.

## 8. Motion and interaction

Use Motion / Framer Motion with restraint: - Soft hero-slide
transitions - Subtle scroll-triggered reveals - Gentle image zoom on
hover - Refined button feedback - Cart drawer transition - Quick-view
modal transition - Smooth filter changes

Avoid animating every text block, excessive parallax, bouncing elements,
scroll hijacking, or long animations that delay shopping. Respect
`prefers-reduced-motion`.

Functional demo interactions: - Add/remove cart items - Quantity
updates - Live cart count - Cart drawer - Quick view - Wishlist toggle -
Category filters - Search interface - Mobile navigation - Newsletter
validation - Contact form validation

If payment, inventory, account, or form backend is not connected, label
it as demo functionality and do not pretend a real transaction or
submission occurred.

## 9. Responsive requirements

Test at: - 1440px desktop - 1280px laptop - 768px tablet - 390px mobile

Check: - The page uses the available width on desktop. - The hero and
offer slides are wide and short. - Best-seller and catalogue cards are
readable and evenly sized. - No horizontal overflow. - No tiny text or
compressed controls. - No giant empty margins. - Mobile navigation
works. - Hero content and product packaging are not cropped
incorrectly. - All section edges and spacing are intentional.

## 10. Implementation checklist

Before declaring the task complete:

1.  Inspect the current code and `public/` assets.
2.  Identify and remove the CSS/layout rule that shrinks the entire
    site.
3.  Build the sections in the exact order described above.
4.  Reuse the actual supplied banners and product photographs.
5.  Confirm all image paths resolve.
6.  Ensure hero slides include the offer banner; do not add a duplicate
    large offer section below.
7.  Ensure Best Sellers comes immediately after the hero.
8.  Ensure "The Goodness Inside" comes before the full product catalogue
    and category filters.
9.  Ensure reviews and contact come after the catalogue/story sections.
10. Make the category filters and demo shopping interactions work.
11. Run the app and fix build/runtime errors.
12. Inspect the rendered desktop and mobile layouts before finishing.

**Acceptance criterion:** On a normal desktop browser, the site must
feel spacious, full-width, premium, and deliberately art-directed. The
current narrow, shrunken, tiny-centered-column appearance is explicitly
unacceptable. Do not call the task complete until that layout problem is
fixed.
