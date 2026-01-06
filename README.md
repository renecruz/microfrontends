# Microfrontends

Repositorio con ejemplos y demostraciones de arquitectura de **Microfrontends** implementados en diversas tecnologías y patrones.

## 📋 Descripción

Los microfrontends son una arquitectura de aplicación donde un frontend se divide en pequeñas aplicaciones semi-independientes ("micro applications") que trabajan juntas. Este repositorio contiene ejemplos prácticos de cómo implementar esta arquitectura utilizando diferentes tecnologías y enfoques.

## 🛠️ Tecnologías Soportadas

- **React** - Componentes y patrones de microfrontends con React
- **Angular** - Módulos y arquitectura de microfrontends en Angular
- **Vue** - Composición y microfrontends con Vue.js
- **HTML + CSS + JavaScript Nativo** - Enfoque vanilla sin frameworks

## 📁 Estructura del Repositorio

```
microfrontends/
├── react/                 # Ejemplos de microfrontends con React
│   ├── mfe-app-1/        # Microfrontend 1
│   ├── mfe-app-2/        # Microfrontend 2
│   └── shell/            # Aplicación shell/contenedor
├── angular/              # Ejemplos de microfrontends con Angular
│   ├── mfe-app-1/        # Microfrontend 1
│   ├── mfe-app-2/        # Microfrontend 2
│   └── shell/            # Aplicación shell/contenedor
├── vue/                  # Ejemplos de microfrontends con Vue
│   ├── mfe-app-1/        # Microfrontend 1
│   ├── mfe-app-2/        # Microfrontend 2
│   └── shell/            # Aplicación shell/contenedor
├── vanilla/              # Ejemplos con HTML + CSS + JavaScript
│   ├── mfe-app-1/        # Microfrontend 1
│   ├── mfe-app-2/        # Microfrontend 2
│   └── shell/            # Aplicación shell/contenedor
└── README.md             # Este archivo
```

## 🚀 Inicio Rápido

### React
```bash
cd react/shell
npm install
npm start
```

### Angular
```bash
cd angular/shell
npm install
ng serve
```

### Vue
```bash
cd vue/shell
npm install
npm run serve
```

### Vanilla
```bash
cd vanilla/shell
python -m http.server 8000
# o con cualquier servidor estático local
```

## 📚 Conceptos Clave

- **Shell Application**: Contenedor principal que orquesta los microfrontends
- **Micro Application**: Aplicaciones independientes e isoladas que se cargan dinámicamente
- **Module Federation**: Patrón para compartir código entre aplicaciones
- **Lazy Loading**: Carga dinámica de microfrontends bajo demanda
- **Communication**: Patrones de comunicación entre microfrontends

## ✨ Patrones Implementados

- ✅ Module Federation (Webpack 5+)
- ✅ iFrame Isolation
- ✅ Web Components
- ✅ Shared Dependencies
- ✅ Event-based Communication
- ✅ Store/State Sharing

## 📖 Recursos Útiles

- [Module Federation](https://webpack.js.org/concepts/module-federation/)
- [Web Components](https://developer.mozilla.org/es/docs/Web/Web_Components)
- [Arquitectura de Microfrontends](https://micro-frontends.org/)

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-demo`)
3. Commit tus cambios (`git commit -am 'Add nueva demo'`)
4. Push a la rama (`git push origin feature/nueva-demo`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la licencia MIT.

## 👨‍💻 Autor

Rene Guadalupe Cruz Flores

---

**Última actualización**: Enero 2026
