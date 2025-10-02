# Project Brief: Smart Suggestion Input

## 🎯 Project Overview

**Project Name:** Smart Suggestion Input  
**Type:** UX Prototype Application  
**Date:** October 2 2025  
**Status:** Planning Phase  

## 📋 Project Description

Prototype a modern suggestion-first search input that uses a contenteditable div (not a traditional `<input>`) and shadcn/ui primitives. The component should progressively reveal inline and panel suggestions as the user types, inspired by Microsoft Copilot's web input model. A demo route in `app/smartSuggest` will showcase the component in realistic, finance-oriented scenarios.

### The Challenge

The current search pattern is a static input with no suggestion system and limited affordances for rich text. We need a flexible, assistive input that:
- Treats the input as a contenteditable region with tokens, inline hints, and formatting where helpful.
- Provides keystroke-driven suggestions (inline, dropdown, and expandable panel).
- Supports task-oriented triggers (e.g., entering "RMD" routes to an RMD-tailored results page).
- Uses realistic mock financial data to power suggestions and demo results.

### Objectives
- Deliver a contenteditable input with robust caret/selection management and keyboard accessibility.
- Provide contextual suggestions on keystroke, with clear ranking and grouping.
- Enable quick actions (chips/commands) and query disambiguation.
- Demonstrate end-to-end flow from header input → results page with state handoff.

## 🎨 Design Foundation
Reference design documents in `/docs` prefixed with `sa*` for input and suggestion panel specs.

### Color Palette & Visual Identity
- **Primary Palette:** Flexible color scheme approach (Palette 3 methodology)
- **Design Philosophy:** Modern, clean, and accessible. Color usage for highlight not base.

### Technical Foundation
Use the existing home page design used in `app/enhancedSS/panelV1` as a visual baseline.
- **Framework:** Next.js 15 with App Router
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui component library
- **Language:** TypeScript
- **Icons:** Lucide React
- **Deployment:** Vercel-ready

## 🧭 Scope

### In Scope
- Contenteditable input component with inline hinting and token support.
- Suggestion dropdown with keyboard navigation and mouse interactions.
- Expandable suggestion panel showing richer results (e.g., tickers, accounts, tasks).
- Header integration demo and a dedicated `app/smartSuggest` route.
- Mock data layer for tickers, tasks (e.g., RMD), and recent activity.

### Out of Scope (for this prototype)
- Production-grade security and analytics.
- Backend services; all data is mocked client-side.
- Full-text search; focus on curated, deterministic suggestions.

## 🧩 Interaction Details

- Contenteditable input supports:
  - Plain text entry with inline ghost text completion (Cmd/Tab to accept).
  - Command chips (e.g., `/quote`, `/task`) and entity tokens (e.g., AAPL).
  - Keyboard: Arrow keys to navigate suggestions, Enter to accept, Esc to dismiss.
- Suggestion types:
  - Entities: tickers, accounts, symbols
  - Tasks: RMD, transfer, performance, positions
  - Quick links: portfolio summary, recent views
- Panel behavior:
  - Opens on focus/type; expands when user pauses or navigates beyond N items.
  - Remains anchored to input; responsive across breakpoints.

## 🗂️ Data and Content
- Use existing data in `src/data` where applicable (e.g., `stockData.ts`, `portfolioData.ts`).
- Add lightweight suggestion seeds specific to this demo if needed.
- Ensure deterministic outputs for repeatable demos.

## ✅ Acceptance Criteria
- Typing "RMD" in the header input and pressing Enter routes to an RMD-focused page.
- Inline completion appears contextually and is accept/reject-able via keyboard.
- Dropdown suggestions render within 50ms of keystroke on typical hardware.
- Keyboard navigation works end-to-end (focus ring, ARIA, screen reader labels).
- Expandable panel shows richer groupings and preserves selection state on expand.
- State (query and selected entity) hands off correctly to the results page.

## 🗺️ Milestones
1. Input foundation: contenteditable, caret/selection, ARIA (Day 1–2)
2. Suggestion dropdown: filtering, ranking, keyboard (Day 2–3)
3. Expandable panel: layout, groups, responsiveness (Day 3–4)
4. Header integration + routing: RMD flow demo (Day 4)
5. Polish + QA script for demo (Day 5)

## 📏 Success Metrics
- Perceived responsiveness: interactions feel instant; no obvious jank.
- Discoverability: users immediately see helpful suggestions while typing.
- Task completion: stakeholders can complete RMD scenario start-to-finish without coaching.

## ⚠️ Risks & Mitigations
- Caret handling in contenteditable is brittle → isolate logic and add unit tests for selection utilities.
- Accessibility regressions → use ARIA combobox patterns and test with VoiceOver.
- Suggestion relevance feels off → start with curated rules; avoid overfitting.

## 📎 References
- shadcn/ui patterns for `Command`, `Popover`, `Combobox`.
- WAI-ARIA Authoring Practices for Combobox/Autocomplete.
- Microsoft Copilot web input behaviors (for inspiration only).