# @searchmindai/sdk

![Version](https://img.shields.io/npm/v/@searchmindai/sdk?style=flat-square)
![License](https://img.shields.io/npm/l/@searchmindai/sdk?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square)

SearchMind AI SDK - Una potente biblioteca de componentes React/TypeScript para integrar capacidades de búsqueda con IA, incluyendo procesamiento avanzado de resultados, filtrado y optimización de búsqueda.

## 🚀 Características

- ⚡ **Optimizado para Rendimiento** - Construido con Preact para un bundle size mínimo
- 🎨 **Componentes Estilizados** - CSS Modules para estilos aislados y personalizables
- 🔧 **TypeScript First** - Tipado completo para una mejor experiencia de desarrollo
- 📦 **Tree Shakeable** - Importa solo los componentes que necesitas
- ⚛️ **Compatible con React** - Funciona con React 16.8+, 17.x y 18.x
- 🎯 **Modular** - Arquitectura basada en componentes para máxima flexibilidad

## 📦 Instalación

```bash
# npm
npm install @searchmindai/sdk

# yarn
yarn add @searchmindai/sdk

# pnpm
pnpm add @searchmindai/sdk
```

## 🎯 Uso Básico

### Importación

```typescript
import { Button } from '@searchmindai/sdk';
import '@searchmindai/sdk/style.css';
```

### Componente Button

```tsx
import React from 'react';
import { Button } from '@searchmindai/sdk';

function App() {
  const handleClick = () => {
    console.log('¡Botón clickeado!');
  };

  return (
    <div>
      {/* Botón primario */}
      <Button onClick={handleClick}>
        Buscar
      </Button>

      {/* Botón secundario */}
      <Button variant="secondary" onClick={handleClick}>
        Cancelar
      </Button>
    </div>
  );
}
```

## 📚 Referencia de API

### Button

Un componente de botón versátil con variantes de estilo.

#### Props

| Prop | Tipo | Por defecto | Descripción |
|------|------|-------------|-------------|
| `children` | `JSX.Element \| string` | - | Contenido del botón |
| `onClick` | `() => void` | - | Función llamada al hacer clic en el botón |
| `variant` | `"primary" \| "secondary"` | `"primary"` | Variante visual del botón |

#### Ejemplo

```tsx
// Botón primario (por defecto)
<Button onClick={() => alert('¡Clickeado!')}>
  Botón Primario
</Button>

// Botón secundario
<Button variant="secondary" onClick={() => console.log('Secundario')}>
  Botón Secundario
</Button>
```

## 🎨 Personalización de Estilos

El SDK utiliza CSS Modules para aislamiento de estilos. Puedes personalizar los estilos sobrescribiendo las clases CSS:

```css
/* Personalizando el botón primario */
.btn--primary {
  background-color: #your-color !important;
  border-radius: 8px !important;
}

/* Personalizando el botón secundario */
.btn--secondary {
  background-color: #your-secondary-color !important;
}
```

## 🛠️ Desarrollo

### Prerrequisitos

- Node.js 16+
- npm, yarn o pnpm

### Configuración Local

```bash
# Clona el repositorio
git clone https://github.com/searchmindai/searchmind.sdk.git
cd searchmind.sdk

# Instala las dependencias
npm install

# Ejecuta en modo de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la biblioteca para producción
- `npm run preview` - Visualiza el build de producción

### Estructura del Proyecto

```text
searchmind.sdk/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Button/         # Componente Button
│   │   │   ├── Button.tsx
│   │   │   └── Button.module.css
│   │   └── index.ts        # Exports de los componentes
│   ├── styles/             # Estilos globales
│   │   └── main.css
│   ├── types/              # Definiciones de tipos
│   │   ├── global.d.ts
│   │   └── files.d.ts
│   ├── index.ts            # Entry point principal
│   └── main.tsx            # Demo/desarrollo
├── dist/                   # Build de producción
├── public/                 # Archivos estáticos
└── package.json
```

## 🔧 Configuración

### TypeScript

El proyecto está configurado con TypeScript strict mode e incluye:

- Soporte para JSX/TSX
- Path mapping para React → Preact
- Definiciones de tipos globales
- Build optimizado para bibliotecas

### Vite

Configuración optimizada para construcción de bibliotecas:

- Build dual (ESM + CommonJS)
- Generación automática de tipos
- Tree shaking
- CSS code splitting deshabilitado para simplicidad

## 📋 Compatibilidad

### Versiones de React

- ✅ React 16.8+
- ✅ React 17.x
- ✅ React 18.x

### Navegadores

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Node.js

- ✅ Node.js 16+
- ✅ Node.js 18+
- ✅ Node.js 20+

## 🤝 Contribuyendo

¡Las contribuciones son bienvenidas! Por favor, lee la [guía de contribución](CONTRIBUTING.md) antes de enviar PRs.

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Haz push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está licenciado bajo la [MIT License](LICENSE).

## 🔗 Enlaces Útiles

- [Documentación](https://docs.searchmind.ai)
- [Paquete NPM](https://www.npmjs.com/package/@searchmindai/sdk)
- [Repositorio GitHub](https://github.com/searchmindai/searchmind.sdk)
- [Issues](https://github.com/searchmindai/searchmind.sdk/issues)

## 📞 Soporte

- 📧 Email: [support@searchmind.ai](mailto:support@searchmind.ai)
- 💬 Discord: [SearchMind Community](https://discord.gg/searchmind)
- 🐛 Issues: [GitHub Issues](https://github.com/searchmindai/searchmind.sdk/issues)

---

Hecho con ❤️ por el equipo [SearchMind AI](https://searchmind.ai)
