# @searchmindai/sdk

SearchMind AI SDK - Una potente biblioteca de componentes React/TypeScript para integrar capacidades de búsqueda con IA, incluyendo procesamiento avanzado de resultados, filtrado y optimización de búsqueda.

![Version](https://img.shields.io/npm/v/@searchmindai/sdk?style=flat-square)
![License](https://img.shields.io/npm/l/@searchmindai/sdk?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square)

## ⚠️ Estado de Desarrollo

**IMPORTANTE: Esta NO es la versión final del SDK. Actualmente estamos en fase de PRUEBAS.**

Los componentes incluidos en esta versión **NO están listos para ser utilizados en producción**. Esta es una versión de desarrollo destinada únicamente para pruebas internas y feedback de desarrolladores.

### 📅 Cronograma de Lanzamiento

- **Fecha prevista para el lanzamiento BETA**: **13 de octubre de 2025 a las 15:00 (hora de Chile)**
- **Estado actual**: Fase de pruebas y desarrollo activo

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

---

Hecho con ❤️ y mucho ☕️ por el equipo [SearchMind AI](https://searchmind.ai)
