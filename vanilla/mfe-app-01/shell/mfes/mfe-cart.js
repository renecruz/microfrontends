class MfeCart extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.items = [];
    this.onAdd = (e) => {
      const item = e.detail?.item;
      if (!item) return;
      this.items = [...this.items, item];
      this.render();
    };
  }

  connectedCallback() {
    window.addEventListener("mfe:cart:add", this.onAdd);
    this.render();
  }

  disconnectedCallback() {
    window.removeEventListener("mfe:cart:add", this.onAdd);
  }

  render() {
    const total = this.items.reduce((sum, i) => sum + i.price, 0);

    const rows =
      this.items.length === 0
        ? `<div class="empty">Carrito vacío</div>`
        : `
          <ul>
            ${this.items
              .map((i) => `<li><span class="item-name">${i.name}</span><span class="item-price">$${i.price}</span></li>`)
              .join("")}
          </ul>
        `;

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .empty {
          color: #64748b;
          font-size: 14px;
          text-align: center;
          padding: 24px 16px;
          background: #f8fafc;
          border-radius: 8px;
          border: 1px dashed #e2e8f0;
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 10px;
        }
        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 12px;
          background: #f8fafc;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }
        .item-name {
          color: #1e293b;
          font-weight: 500;
          font-size: 14px;
        }
        .item-price {
          color: #2563eb;
          font-weight: 600;
          font-size: 14px;
        }
        .total {
          margin-top: 16px;
          padding: 14px 16px;
          font-weight: 700;
          display: flex;
          justify-content: space-between;
          background: linear-gradient(135deg, #1e40af 0%, #2563eb 100%);
          color: #fff;
          border-radius: 10px;
          font-size: 15px;
        }
      </style>

      ${rows}
      <div class="total"><span>Total</span><span>$${total}</span></div>
    `;
  }
}

customElements.define("mfe-cart", MfeCart);