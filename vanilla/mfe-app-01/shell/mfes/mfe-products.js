class MfeProducts extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.products = [
      { id: "p1", name: "Teclado", price: 25 },
      { id: "p2", name: "Mouse", price: 15 },
      { id: "p3", name: "Monitor", price: 180 }
    ];
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const items = this.products
      .map(
        (p) => `
        <li>
          <div>
            <div class="name">${p.name}</div>
            <div class="price">$${p.price}</div>
          </div>
          <button data-id="${p.id}">Agregar</button>
        </li>
      `
      )
      .join("");

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .info {
          color: #64748b;
          font-size: 13px;
          margin-bottom: 16px;
          padding: 10px 14px;
          background: #eff6ff;
          border-radius: 8px;
          border-left: 3px solid #2563eb;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 12px;
        }
        li {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 16px;
          border-radius: 12px;
          transition: all 0.2s ease;
        }
        li:hover {
          border-color: #bfdbfe;
          background: #fff;
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.08);
        }
        .name {
          font-weight: 600;
          color: #1e293b;
          font-size: 15px;
        }
        .price {
          color: #2563eb;
          font-size: 14px;
          font-weight: 600;
          margin-top: 4px;
        }
        button {
          border: none;
          background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%);
          color: #fff;
          padding: 10px 18px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          font-size: 13px;
          transition: all 0.2s ease;
          box-shadow: 0 2px 4px rgba(37, 99, 235, 0.2);
        }
        button:hover {
          background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 100%);
          box-shadow: 0 4px 8px rgba(37, 99, 235, 0.3);
          transform: translateY(-1px);
        }
        button:active {
          transform: translateY(0);
        }
      </style>

      <div class="info">Este listado lo renderiza el microfrontend Products.</div>
      <ul>${items}</ul>
    `;

    this.shadowRoot.querySelectorAll("button[data-id]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const item = this.products.find((p) => p.id === id);
        window.dispatchEvent(
          new CustomEvent("mfe:add-to-cart", { detail: { item } })
        );
      });
    });
  }
}

customElements.define("mfe-products", MfeProducts);