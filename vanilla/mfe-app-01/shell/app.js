// Carga (define) los custom elements desde microfrontends remotos
await import("mfe-header");
await import("mfe-products");
await import("mfe-cart");

// Router mínimo para demo
const routeEl = document.getElementById("route");
const outlet = document.getElementById("outlet");

function setRoute(path) {
  history.pushState({}, "", path);
  render();
}

function render() {
  const path = location.pathname || "/";
  routeEl.textContent = path;

  outlet.innerHTML = "";

  if (path === "/" || path === "/products") {
    // Microfrontend: Products
    const el = document.createElement("mfe-products");
    outlet.appendChild(el);
    return;
  }

  if (path === "/about") {
    const div = document.createElement("div");
    div.innerHTML = `
      <p class="muted">
        Esta vista está renderizada por el shell (para mostrar composición híbrida).
      </p>
      <p>
        El header y el carrito siguen siendo microfrontends independientes.
      </p>
    `;
    outlet.appendChild(div);
    return;
  }

  outlet.textContent = "404 - Not found";
}

window.addEventListener("popstate", render);

// Contrato de comunicación: eventos emitidos por MFEs
window.addEventListener("mfe:navigate", (e) => {
  const to = e.detail?.to;
  if (typeof to === "string") setRoute(to);
});

window.addEventListener("mfe:add-to-cart", (e) => {
  // En un escenario real, este “bus” debería estar definido como contrato estable
  // (eventos, payloads, versionado).
  const item = e.detail?.item;
  window.dispatchEvent(new CustomEvent("mfe:cart:add", { detail: { item } }));
});

render();