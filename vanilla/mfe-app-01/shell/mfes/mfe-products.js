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
            <div class="muted">$${p.price}</div>
          </div>
          <button data-id="${p.id}">Agregar</button>
        </li>
      `
      )
      .join("");

    this.shadowRoot.innerHTML = `
      <style>
        .muted { color:#666; font-size: 14px; }
        ul { list-style:none; padding:0; margin:0; display:grid; gap:10px; }
        li { display:flex; align-items:center; justify-content:space-between; border:1px solid #eee; padding:10px; border-radius:10px; }
        .name { font-weight: 600; }
        button { border:1px solid #ddd; background:white; padding:8px 10px; border-radius:10px; cursor:pointer; }
        button:hover { background:#f7f7f7; }
      </style>

      <div class="muted">Este listado lo renderiza el microfrontend Products.</div>
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