# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vanilla JavaScript microfrontends example using Web Components, Shadow DOM, and native browser APIs. Zero dependencies - no build tools, no frameworks, no npm packages required.

## Development Commands

```bash
# Start development server (from shell directory)
cd shell
python -m http.server 8000
# Access at http://localhost:8000
```

Any static HTTP server works (nginx, `npx http-server`, etc.). No build step needed.

## Architecture

### Shell + Microfrontends Pattern

```
shell/
├── index.html      # Entry point with Import Map and MFE placeholders
├── app.js          # Router and event orchestration
└── mfes/           # Microfrontend custom elements
    ├── mfe-header.js     # Navigation component
    ├── mfe-products.js   # Product catalog
    └── mfe-cart.js       # Shopping cart state
```

### Key Concepts

- **Shell (app.js)**: Orchestrates routing and acts as event bus between MFEs
- **Custom Elements**: Each MFE is a self-registering `<mfe-*>` HTML element
- **Shadow DOM**: Each MFE encapsulates its own styles
- **Import Maps**: Module resolution defined in index.html (no bundler)

### Event-Based Communication Contract

| Event | Direction | Payload |
|-------|-----------|---------|
| `mfe:navigate` | Header → Shell | `{ to: string }` |
| `mfe:add-to-cart` | Products → Shell | `{ item: object }` |
| `mfe:cart:add` | Shell → Cart | `{ item: object }` |

Shell listens on `window` and relays events between MFEs that don't communicate directly.

### Routes

- `/`, `/products` - Products MFE display
- `/about` - Shell-rendered content (hybrid example)

## Adding New Microfrontends

1. Create `shell/mfes/mfe-{name}.js` with a custom element class
2. Use Shadow DOM: `this.attachShadow({ mode: 'open' })`
3. Register element: `customElements.define('mfe-{name}', MfeName)`
4. Add to Import Map in `index.html`
5. Import in `app.js` and add `<mfe-{name}>` to HTML

## Browser Requirements

ES2020+ (native ES modules, Import Maps, Custom Elements v1, Shadow DOM)
