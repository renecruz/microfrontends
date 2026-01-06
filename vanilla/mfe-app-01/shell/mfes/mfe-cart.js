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
        ? `<div class="muted">Carrito vacío</div>`
        : `
          <ul>
            ${this.items
              .map((i) => `<li><span>${i.name}</span><span>$${i.price}</span></li>`)
              .join("")}
          </ul>
        `;

    this.shadowRoot.innerHTML = `
      <style>
        .muted { color:#666; font-size: 14px; }
        ul { list-style:none; padding:0; margin:0; display:grid; gap:8px; }
        li { display:flex; justify-content:space-between; border-bottom:1px dashed #eee; padding-bottom:6px; }
        .total { margin-top: 10px; font-weight: 700; display:flex; justify-content:space-between; }
      </style>

      ${rows}
      <div class="total"><span>Total</span><span>$${total}</span></div>
    `;
  }
}

customElements.define("mfe-cart", MfeCart);