Plan: HTML to React Component Conversion — Vault App
TL;DR: Convert your 700+ line HTML credential manager into 6–7 modular React components, each responsible for one UI section. Use props to pass mock data (like the 8 credentials), convert inline Tailwind classes to JSX, and organize files for maintainability. No state or interactivity yet—pure component structure.

Steps

Phase 1: Component Decomposition (Plan your architecture)

1. Identify UI sections in your HTML:

Header (greeting + metadata)
BookmarkForm (5 input fields)
SearchBar (search + sort)
CredentialCard (single card template)
CredentialGrid (container for 8 cards)
Footer (links)
VaultApp (root wrapper)

2. Create file structure:
   src/
   ├── components/Header.jsx
   ├── components/BookmarkForm.jsx
   ├── components/SearchBar.jsx
   ├── components/CredentialCard.jsx
   ├── components/CredentialGrid.jsx
   ├── components/Footer.jsx
   ├── App.jsx
   ├── index.css (Tailwind)
   └── main.jsx

3. Define mock data — Create an array of credential objects:

const credentials = [
{ name: "Facebook", category: "Social", website: "facebook.com", bgColor: "blue", ... },
// ... 7 more cards
];

Phase 2: Convert Components (HTML → JSX) 4. Header — Convert greeting section:
Move <div> structure to JSX
Extract "Good Morning, World!" and "Monday, Nov 10" as props
Keep all Tailwind classes as className

5. BookmarkForm — Convert form with 5 fields:
   Create reusable <FormField> sub-component for label + input + help text
   Map the 5 inputs (URL, color picker, category, username, password) using the sub-component
   Keep "Clear" and "Add Bookmark" buttons

6. SearchBar — Convert search section:
   Input with magnifying glass SVG
   "Sort by" button with dropdown icon
   Preserve hover effects and styling

7. CredentialCard — Make the single card reusable:
   Accept props: name, category, website, username, password, bgColor
   Dynamically render badge color and text color based on props
   Example: <CredentialCard name="Facebook" bgColor="blue" ... />

8. CredentialGrid — Render multiple cards:
   Accept props: credentials (array)
   Loop with .map() and render <CredentialCard> for each
   Keep grid layout: grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3

9. Footer — Simple conversion:
