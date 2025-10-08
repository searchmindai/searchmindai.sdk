# @searchmindai/sdk

![Version](https://img.shields.io/npm/v/@searchmindai/sdk?style=flat-square)
![License](https://img.shields.io/npm/l/@searchmindai/sdk?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square)

SearchMind AI SDK - Uma biblioteca poderosa de componentes React/TypeScript para integrar capacidades de busca com IA, incluindo processamento avançado de resultados, filtragem e otimização de busca.

## 🚀 Características

- ⚡ **Otimizado para Performance** - Construído com Preact para bundle size mínimo
- 🎨 **Componentes Estilizados** - CSS Modules para estilos isolados e personalizáveis
- 🔧 **TypeScript First** - Tipagem completa para melhor experiência de desenvolvimento
- 📦 **Tree Shakeable** - Importe apenas os componentes que você precisa
- ⚛️ **React Compatible** - Funciona com React 16.8+, 17.x e 18.x
- 🎯 **Modular** - Arquitetura baseada em componentes para máxima flexibilidade

## 📦 Instalação

```bash
# npm
npm install @searchmindai/sdk

# yarn
yarn add @searchmindai/sdk

# pnpm
pnpm add @searchmindai/sdk
```

## 🎯 Uso Básico

### Importação

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
    console.log('Botão clicado!');
  };

  return (
    <div>
      {/* Botão primário */}
      <Button onClick={handleClick}>
        Buscar
      </Button>

      {/* Botão secundário */}
      <Button variant="secondary" onClick={handleClick}>
        Cancelar
      </Button>
    </div>
  );
}
```

## 📚 API Reference

### Button

Um componente de botão versátil com variantes de estilo.

#### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|---------|-----------|
| `children` | `JSX.Element \| string` | - | Conteúdo do botão |
| `onClick` | `() => void` | - | Função chamada ao clicar no botão |
| `variant` | `"primary" \| "secondary"` | `"primary"` | Variante visual do botão |

#### Exemplo

```tsx
// Botão primário (padrão)
<Button onClick={() => alert('Clicado!')}>
  Botão Primário
</Button>

// Botão secundário
<Button variant="secondary" onClick={() => console.log('Secundário')}>
  Botão Secundário
</Button>
```

## 🎨 Customização de Estilos

O SDK utiliza CSS Modules para isolamento de estilos. Você pode personalizar os estilos sobrescrevendo as classes CSS:

```css
/* Personalizando o botão primário */
.btn--primary {
  background-color: #your-color !important;
  border-radius: 8px !important;
}

/* Personalizando o botão secundário */
.btn--secondary {
  background-color: #your-secondary-color !important;
}
```

## 🛠️ Desenvolvimento

### Pré-requisitos

- Node.js 16+
- npm, yarn ou pnpm

### Setup Local

```bash
# Clone o repositório
git clone https://github.com/searchmindai/searchmind.sdk.git
cd searchmind.sdk

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Constrói a biblioteca para produção
- `npm run preview` - Visualiza o build de produção

### Estrutura do Projeto

```text
searchmind.sdk/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Button/         # Componente Button
│   │   │   ├── Button.tsx
│   │   │   └── Button.module.css
│   │   └── index.ts        # Exports dos componentes
│   ├── styles/             # Estilos globais
│   │   └── main.css
│   ├── types/              # Definições de tipos
│   │   ├── global.d.ts
│   │   └── files.d.ts
│   ├── index.ts            # Entry point principal
│   └── main.tsx            # Demo/desenvolvimento
├── dist/                   # Build de produção
├── public/                 # Arquivos estáticos
└── package.json
```

## 🔧 Configuração

### TypeScript

O projeto está configurado com TypeScript strict mode e inclui:

- Suporte para JSX/TSX
- Path mapping para React → Preact
- Definições de tipos globais
- Build otimizado para bibliotecas

### Vite

Configuração otimizada para construção de bibliotecas:

- Build dual (ESM + CommonJS)
- Geração automática de tipos
- Tree shaking
- CSS code splitting desabilitado para simplicidade

## 📋 Compatibilidade

### React Versions

- ✅ React 16.8+
- ✅ React 17.x
- ✅ React 18.x

### Browsers

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Node.js

- ✅ Node.js 16+
- ✅ Node.js 18+
- ✅ Node.js 20+

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, leia o [guia de contribuição](CONTRIBUTING.md) antes de submeter PRs.

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## 🔗 Links Úteis

- [Documentação](https://docs.searchmind.ai)
- [NPM Package](https://www.npmjs.com/package/@searchmindai/sdk)
- [GitHub Repository](https://github.com/searchmindai/searchmind.sdk)
- [Issues](https://github.com/searchmindai/searchmind.sdk/issues)

## 📞 Suporte

- 📧 Email: [support@searchmind.ai](mailto:support@searchmind.ai)
- 💬 Discord: [SearchMind Community](https://discord.gg/searchmind)
- 🐛 Issues: [GitHub Issues](https://github.com/searchmindai/searchmind.sdk/issues)

---

Feito com ❤️ pela equipe [SearchMind AI](https://searchmind.ai)
