# Upgrade Strategy: Eleventy v3.0 & Bulma Migration

This document outlines the roadmap for upgrading the Research Simplified codebase from Eleventy v2 to v3 and transitioning the styling framework from W3.CSS to Bulma.

## Phase 1: Dependency & Core Upgrade (Eleventy v3.0) [COMPLETED]
Eleventy 3.1.2 installed, ESM enabled, and Bulma 1.0.4 added.
1.  **Update `package.json`:** [DONE]
2.  **Config Migration:** [DONE]
3.  **Install Bulma:** [DONE]

## Phase 2: Structural CSS Migration (Bulma Layout)
Bulma uses a Flexbox-based grid system which replaces the older W3.CSS layouts.
1.  **Base Layout (`base.html`):**
    *   Replace W3.CSS CDN link with Bulma.
    *   Replace `w3-main` and `w3-sidebar` with Bulma's `columns` and `column` structure.
    *   Migrate the mobile "hamburger" menu to Bulma’s `navbar-burger` pattern.
2.  **Navigation (`nav.html`):**
    *   Convert `w3-bar-block` and `w3-bar-item` to Bulma's `menu-list` or `navbar-item` components.

## Phase 3: Component & Content Refactoring
Update all partials to use Bulma's utility classes and components.
1.  **Accordions & Modals:**
    *   Refactor `index.js` to toggle Bulma's `is-active` or `is-hidden` classes instead of `w3-show`.
2.  **Cards & Tables:**
    *   `w3-card` → `card`.
    *   `w3-table` → `table is-fullwidth`.
    *   `w3-ul` → Bulma standard lists within `content` blocks.
3.  **Utility Classes:**
    *   `w3-text-red` → `has-text-danger`.
    *   `w3-padding-24` → Bulma `section` or spacing utilities (e.g., `py-5`).

## Phase 4: JavaScript Modernization
1.  **Generic Toggles:** Replace specific `w3_open/close` functions with a generic toggle function.
2.  **Tab Logic:** Ensure the "Matrix" and "Research Type" tabs use Bulma's `tabs` component logic.
3.  **ESM:** Ensure `index.js` remains compatible with the new build structure.

## Phase 5: Testing & Validation
1.  **Build Check:** Run `npx @11ty/eleventy` to ensure the ESM transition didn't break collections or data files.
2.  **Visual Audit:** Systematically check each chapter to ensure the markdown-rendered HTML looks correct under Bulma's default typography.
