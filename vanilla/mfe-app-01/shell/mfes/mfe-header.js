class MfeHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        header { display:flex; align-items:center; gap:12px; padding:12px 16px; border-bottom:1px solid #e5e5e5; }
        .brand { font-weight: 700; }
        nav { display:flex; gap:10px; }
        a { color: inherit; text-decoration: none; padding: 6px 10px; border-radius: 8px; }
        a:hover { background: #f3f3f3; }
        .spacer { flex: 1; }
        .badge { font-size: 12px; color: #444; background: #f3f3f3; padding: 4px 8px; border-radius: 999px; }
      </style>

      <header>
        <div class="brand">Shop (MFE)</div>

        <nav>
          <a href="/" data-to="/products">Productos</a>
          <a href="/about" data-to="/about">Acerca</a>
        </nav>

        <div class="spacer"></div>
        <div class="badge">Header desplegable independiente</div>
      </header>
    `;

    this.shadowRoot.querySelectorAll("a[data-to]").forEach((a) => {
      a.addEventListener("click", (ev) => {
        ev.preventDefault();
        const to = a.getAttribute("data-to");
        window.dispatchEvent(new CustomEvent("mfe:navigate", { detail: { to } }));
      });
    });
  }
}

customElements.define("mfe-header", MfeHeader);