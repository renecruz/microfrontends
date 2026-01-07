class MfeHeader extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        header {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 24px;
          background: linear-gradient(135deg, #1e40af 0%, #2563eb 50%, #3b82f6 100%);
          box-shadow: 0 4px 6px -1px rgba(37, 99, 235, 0.2), 0 2px 4px -1px rgba(37, 99, 235, 0.1);
        }
        .brand {
          font-weight: 700;
          font-size: 20px;
          color: #fff;
          letter-spacing: -0.5px;
        }
        .brand span {
          opacity: 0.7;
          font-weight: 400;
          font-size: 14px;
          margin-left: 8px;
        }
        nav {
          display: flex;
          gap: 4px;
        }
        a {
          color: rgba(255,255,255,0.9);
          text-decoration: none;
          padding: 8px 16px;
          border-radius: 8px;
          font-weight: 500;
          font-size: 14px;
          transition: all 0.2s ease;
        }
        a:hover {
          background: rgba(255,255,255,0.15);
          color: #fff;
        }
        .spacer { flex: 1; }
        .badge {
          font-size: 11px;
          color: #1e40af;
          background: rgba(255,255,255,0.95);
          padding: 6px 12px;
          border-radius: 999px;
          font-weight: 600;
          letter-spacing: 0.3px;
          text-transform: uppercase;
        }
      </style>

      <header>
        <div class="brand">Shop<span>MFE</span></div>

        <nav>
          <a href="/" data-to="/products">Productos</a>
          <a href="/about" data-to="/about">Acerca</a>
        </nav>

        <div class="spacer"></div>
        <div class="badge">Header independiente</div>
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