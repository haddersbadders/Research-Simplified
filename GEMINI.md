# Project Status: Research Simplified Bulma Migration

This `GEMINI.md` file summarizes the work completed and outlines remaining tasks for the project's migration to Bulma, as of the last session.

## Completed Tasks:

### 1. Eleventy & Bulma Core Upgrade
-   Eleventy v3.0 core upgrade completed.
-   Bulma installed and integrated into `package.json`.
-   `base.html`: W3.CSS CDN link removed, Bulma CSS linked. `w3-main` and `w3-sidebar` replaced with Bulma's `columns` and `column` structure. Mobile "hamburger" menu migrated to Bulma's `navbar-burger` pattern.
-   `nav.html`: Converted from `w3-bar-block`/`w3-bar-item` to Bulma's `menu-list`/`navbar-item` components.

### 2. Component & Content Refactoring
-   **JavaScript Modernization (`src/js/index.js`):**
    -   Removed obsolete `w3_open()` and `w3_close()` functions.
    -   `accordion()` function updated to toggle Bulma's `is-active` class.
    -   `openMatrix()`, `openQualRes()`, `openQuantRes()` functions updated to toggle Bulma's `is-hidden` class for content visibility and `is-active` for tab states.
    -   `updateDescription()` function updated to use Bulma's `has-text-danger`, `has-text-info`, `has-text-success` classes.
    -   `openMethod()` function updated to use `is-active` for active tab states.
-   **HTML Class Migrations:**
    -   `w3-card` replaced with `card`.
    -   `w3-table` and `w3-table-all` replaced with `table is-fullwidth`. `w3-striped` replaced with `is-striped`.
    -   `w3-ul` replaced with standard `<ul>` or `menu-list`.
    -   `w3-text-red` replaced with `has-text-danger`.
    -   `w3-padding`, `w3-padding-16`, `w3-padding-32` replaced with Bulma spacing utilities (e.g., `p-4`, `py-6`).
    -   `w3-round` replaced with `is-rounded`.
    -   `w3-panel w3-teal` and `w3-panel w3-blue-gray` replaced with `notification is-info is-light`. `w3-panel w3-leftbar w3-teal` replaced with `notification is-info has-text-black` with inline left border style.
    -   `w3-dark-grey` replaced with `has-background-grey-dark`.
    -   `w3-container` replaced with `container`.
    -   `w3-cell-row` replaced with `columns is-multiline`.
    -   `w3-cell w3-mobile` replaced with `column is-half-desktop is-full-mobile`.
    -   `w3-black` header in `critical-review-cards.html` replaced with `has-background-info`.
    -   `w3-bar` navigation in `research-methods-infographic.html`, `qual-research-types-accordion.html`, `quant-res-types-accordion.html` converted to Bulma `tabs` component structure.
    -   `w3-row-padding`, `w3-col` replaced with Bulma's `columns` and `column` classes.
    -   `w3-center` replaced with `is-centered` or `has-text-centered`.
    -   `w3-xxlarge` replaced with `is-size-2`.

### 3. General Styling Tweaks
-   Body text color changed to black by adding `has-text-black` to `<body>` in `base.html`.
-   Paragraph spacing added by including `p { margin-bottom: 1em; }` in `custom.css`.
-   Conflicting `font-family` `<style>` block removed from `base.html` to allow Bulma's typography to apply.
-   Explicit `h1` - `h6`, `strong` black text rule added to `custom.css` (`color: #000 !important;`).
-   Main content wrapped in `<div class="content">` in `base.html` for Bulma typography application.

## Remaining Tasks (Custom.css & Google Fonts Cleanup):

The goal is to move towards using pure Bulma without additional custom styling where possible.

### 1. Remove Google Fonts
-   Remove the `<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">` from `base.html`.
-   Remove `body, h1, h2, h3, h4, h5, h6 { font-family: "Raleway", sans-serif }` from the inline style in `base.html` (if still present, though it should have been removed).

### 2. Review and Migrate `src/css/custom.css` Rules

-   **`.pagefind-ui__drawer, .pagefind-ui__results-area`**: These styles were removed from `custom.css`. Verify if they need Bulma utility classes for background or other styling directly in the HTML if default behavior is not sufficient.
-   **`ul.no-pad`**: Find instances of `ul.no-pad` in HTML files and replace with appropriate Bulma spacing utility classes (e.g., `ml-0` if padding is the only concern, or other list styling).
-   **Interactive Method Component Styles**:
    -   `.method-icon`, `.component`, `.component:hover`, `.component.active`: These custom styles for the interactive method components still exist in `custom.css`. They need to be re-implemented using Bulma utility classes or removed if Bulma provides similar functionality for these components.
-   **GCP Principles Styles**:
    -   `.principles-grid`, `.principle-card`, `.principle-icon`, `.principle-content`, `.principle-title`, `.principle-description`: These custom styles for the GCP Principles grid still exist in `custom.css`. They need to be re-implemented using Bulma's grid system (columns), cards, and utility classes directly in the HTML.
-   **`p { margin-bottom: 1em; }`**: Re-evaluate if this is still necessary after all other content styling is Bulma-fied. Bulma's `.content` class often provides default paragraph spacing. If it does, this rule can be removed.
-   **`h1, h2, h3, h4, h5, h6, strong { color: #000 !important; }`**: Re-evaluate if this is still necessary after all other styling is Bulma-fied and the `content` wrapper is in place. Bulma's default text color is often black in light contexts. If it is, this rule can be removed.

### 3. Remove `src/css/custom.css`
-   Once all rules have been migrated or deemed unnecessary, remove the `custom.css` file and its link from `base.html`.

## Next Steps for User:

-   Perform a comprehensive visual audit of the entire site to ensure all elements render correctly and according to Bulma's intended design.
-   Provide further instructions on which remaining tasks to tackle first.