# 🌟 Organizador Financeiro - Frontend

<div align="center">

![Angular](https://img.shields.io/badge/Angular-19+-red?style=flat-square&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![SCSS](https://img.shields.io/badge/SCSS-Styling-pink?style=flat-square&logo=sass)
![Firebase](https://img.shields.io/badge/Firebase-Hosting-orange?style=flat-square&logo=firebase)
![PWA](https://img.shields.io/badge/PWA-Ready-purple?style=flat-square)

**Interface moderna e responsiva para gerenciamento financeiro pessoal**

*Dashboard • Transações • Categorias • Relatórios*

</div>

---

## 📑 Índice

- [🚀 Início Rápido](#-início-rápido)
- [⚙️ Tecnologias](#️-tecnologias)
- [💻 Desenvolvimento](#-desenvolvimento)
- [🏗️ Build e Deploy](#️-build-e-deploy)
- [🧪 Testes](#-testes)
- [📱 Funcionalidades](#-funcionalidades)
- [📁 Estrutura do Projeto](#-estrutura-do-projeto)
- [🎨 Design System](#-design-system)
- [🔧 Configuração](#-configuração)
- [📚 Recursos](#-recursos)

---

## 🚀 Início Rápido

> **Pré-requisitos**: Node.js 18+, Angular CLI 19+, npm/yarn

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/organizador-financeiro.git
cd organizador-financeiro/frontend

# 2. Instale as dependências
npm install

# 3. Configure o ambiente
cp src/environments/environment.example.ts src/environments/environment.ts

# 4. Inicie o servidor de desenvolvimento
ng serve

# 5. Acesse a aplicação
# http://localhost:4200
```

### 🎯 **Comandos Essenciais**

| Comando | Descrição |
|---------|-----------|
| `ng serve` | Servidor de desenvolvimento |
| `ng build` | Build de produção |
| `ng test` | Executar testes unitários |
| `ng lint` | Verificar qualidade do código |
| `ng generate component nome` | Gerar novo componente |

---

## ⚙️ Tecnologias

### 🎨 **Frontend Stack**

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| **Angular** | `19.2.3+` | Framework principal |
| **TypeScript** | `5.x+` | Linguagem de programação |
| **SCSS** | `Latest` | Pré-processador CSS |
| **RxJS** | `7.x+` | Programação reativa |
| **Angular Material** | `19.x+` | Componentes UI |

### 🔧 **Ferramentas de Desenvolvimento**

- **Angular CLI** - Scaffolding e build
- **ESLint** - Linting de código
- **Prettier** - Formatação de código
- **Karma + Jasmine** - Testes unitários
- **Protractor** - Testes E2E

### 🚀 **Deploy e Hospedagem**

- **Firebase Hosting** - Hospedagem estática
- **GitHub Actions** - CI/CD pipeline
- **PWA** - Progressive Web App

---

## 💻 Desenvolvimento

### 🔥 **Servidor de Desenvolvimento**

```bash
# Iniciar servidor local
ng serve

# Servidor com porta específica
ng serve --port 4200

# Servidor com reload automático
ng serve --live-reload

# Servidor para rede local
ng serve --host 0.0.0.0
```

> 🌐 **Acesso**: `http://localhost:4200`  
> 🔄 **Hot Reload**: Ativado automaticamente

### 🛠️ **Geração de Código (Scaffolding)**

```bash
# Componentes
ng generate component shared/components/meu-componente
ng g c shared/components/meu-componente --standalone

# Serviços
ng generate service core/services/meu-servico
ng g s core/services/meu-servico

# Guards
ng generate guard core/guards/auth
ng g guard core/guards/auth --implements CanActivate

# Pipes
ng generate pipe shared/pipes/meu-pipe
ng g p shared/pipes/meu-pipe

# Módulos
ng generate module feature/meu-modulo --routing
ng g m feature/meu-modulo --routing

# Diretivas
ng generate directive shared/directives/minha-diretiva
ng g d shared/directives/minha-diretiva
```

### 📝 **Comandos Úteis**

```bash
# Ver versão do Angular CLI
ng version

# Ajuda com comandos
ng help
ng generate --help

# Atualizar dependências
ng update

# Verificar se há atualizações
ng update --dry-run

# Adicionar bibliotecas
ng add @angular/material
ng add @angular/pwa
```

---

## 🏗️ Build e Deploy

### 📦 **Build de Produção**

```bash
# Build otimizado para produção
ng build

# Build com configuração específica
ng build --configuration production

# Build com análise de bundle
ng build --stats-json
npx webpack-bundle-analyzer dist/*/stats.json
```

### 🚀 **Deploy**

#### Firebase Hosting

```bash
# Instalar Firebase CLI
npm install -g firebase-tools

# Login no Firebase
firebase login

# Inicializar projeto
firebase init hosting

# Deploy
firebase deploy
```

#### GitHub Pages

```bash
# Instalar gh-pages
npm install --save-dev angular-cli-ghpages

# Deploy para GitHub Pages
ng build --base-href "/repositorio/"
npx angular-cli-ghpages --dir=dist/organizador-financeiro
```

### 📊 **Análise de Performance**

```bash
# Lighthouse CI
npm install -g @lhci/cli
lhci autorun

# Bundle analyzer
npm install --save-dev webpack-bundle-analyzer
ng build --stats-json
npx webpack-bundle-analyzer dist/*/stats.json
```

---

## 🧪 Testes

### 🔬 **Testes Unitários**

```bash
# Executar todos os testes
ng test

# Executar testes em modo watch
ng test --watch

# Executar testes uma vez (CI)
ng test --watch=false --browsers=ChromeHeadless

# Executar testes com coverage
ng test --code-coverage

# Ver relatório de coverage
open coverage/lcov-report/index.html
```

### 🎭 **Testes End-to-End**

```bash
# Instalar Cypress
npm install --save-dev cypress

# Executar testes E2E
ng e2e

# Abrir Cypress GUI
npx cypress open

# Executar testes E2E em headless
npx cypress run
```

### 📊 **Relatórios de Teste**

```bash
# Gerar relatório detalhado
ng test --code-coverage --watch=false

# Configurar threshold de coverage no angular.json
"codeCoverageExclude": [
  "src/test.ts",
  "src/**/*.spec.ts"
]
```

---

## 📱 Funcionalidades

### 🎯 **Funcionalidades Principais**

- ✅ **Dashboard Interativo** - Visão geral das finanças
- ✅ **Gestão de Transações** - CRUD completo de receitas/despesas
- ✅ **Categorização** - Organização por categorias personalizáveis
- ✅ **Relatórios Visuais** - Gráficos e análises
- ✅ **Autenticação** - Login seguro com Google OAuth2
- ✅ **Responsividade** - Funciona em mobile, tablet e desktop

### 🔐 **Autenticação e Segurança**

- 🔒 **Google OAuth2** - Login social seguro
- 🔑 **JWT Tokens** - Autenticação via tokens
- 🛡️ **Route Guards** - Proteção de rotas
- 🔄 **Auto Refresh** - Renovação automática de tokens
- 👤 **Perfil de Usuário** - Gestão de dados pessoais

### 📊 **Dashboard e Relatórios**

- 💰 **Saldo Atual** - Visualização em tempo real
- 📈 **Gráficos Interativos** - Charts responsivos
- 🕐 **Transações Recentes** - Histórico das últimas movimentações
- 📋 **Filtros Avançados** - Por data, categoria, valor
- 📤 **Exportação** - Dados em CSV/PDF

### 🎨 **Interface e UX**

- 📱 **Mobile First** - Design responsivo
- ⚡ **Performance** - Lazy loading e otimizações
- 🎭 **Animações** - Transições suaves
- ♿ **Acessibilidade** - WCAG 2.1 compliant

---

## 📁 Estrutura do Projeto

```
frontend/
├── 📂 src/
│   ├── 📂 app/
│   │   ├── 📂 core/                    # Funcionalidades essenciais
│   │   │   ├── 📂 guards/              # Route guards
│   │   │   ├── 📂 interceptors/        # HTTP interceptors
│   │   │   ├── 📂 interfaces/          # Interfaces TypeScript
│   │   │   ├── 📂 services/            # Serviços da aplicação
│   │   │   └── 🔧 core.module.ts       # Módulo principal
│   │   ├── 📂 shared/                  # Componentes compartilhados
│   │   │   ├── 📂 components/          # Componentes reutilizáveis
│   │   │   ├── 📂 pipes/               # Pipes customizados
│   │   │   ├── 📂 directives/          # Diretivas customizadas
│   │   │   └── 🔧 shared.module.ts     # Módulo compartilhado
│   │   ├── 📂 pages/                   # Páginas da aplicação
│   │   │   ├── 🏠 dashboard/           # Dashboard principal
│   │   │   ├── 🔐 auth/                # Autenticação
│   │   │   ├── 💳 transactions/        # Gestão de transações
│   │   │   └── 👤 profile/             # Perfil do usuário
│   │   ├── 🎨 app.component.*          # Componente raiz
│   │   ├── ⚙️ app.config.ts            # Configurações da app
│   │   └── 🛣️ app.routes.ts            # Definição de rotas
│   ├── 📂 assets/                      # Recursos estáticos
│   │   ├── 🖼️ img/                     # Imagens
│   │   ├── 🎵 sounds/                  # Áudios
│   │   └── 📄 data/                    # Dados estáticos
│   ├── 📂 environments/                # Configurações de ambiente
│   │   ├── 🔧 environment.ts           # Desenvolvimento
│   │   └── 🚀 environment.prod.ts      # Produção
│   ├── 🎨 styles.scss                  # Estilos globais
│   ├── 📄 index.html                   # HTML principal
│   └── 🚀 main.ts                      # Bootstrap da aplicação
├── 📊 angular.json                     # Configuração do Angular
├── 📦 package.json                     # Dependências
├── 🔧 tsconfig.json                    # Configuração TypeScript
├── 🧪 karma.conf.js                    # Configuração de testes
└── 📚 README.md                        # Esta documentação
```

### 🗂️ **Convenções de Nomenclatura**

```typescript
// Componentes
MyComponentComponent           // PascalCase + Component
my-component.component.ts      // kebab-case + .component

// Serviços
MyService                      // PascalCase + Service
my-service.service.ts          // kebab-case + .service

// Interfaces
MyInterface                    // PascalCase + Interface
my.interface.ts                // kebab-case + .interface

// Pipes
MyPipe                         // PascalCase + Pipe
my-pipe.pipe.ts                // kebab-case + .pipe

// Guards
MyGuard                        // PascalCase + Guard
my.guard.ts                    // kebab-case + .guard
```

---

## 🎨 Design System

### 🎯 **Princípios de Design**

- **Simplicidade** - Interface limpa e intuitiva
- **Consistência** - Padrões visuais unificados
- **Acessibilidade** - Usável por todos
- **Performance** - Carregamento rápido
- **Responsividade** - Funciona em qualquer dispositivo

### 🌈 **Paleta de Cores**

```scss
// Cores Primárias
$primary-blue: #2563eb;
$primary-green: #059669;
$primary-red: #dc2626;

// Cores Secundárias
$secondary-gray: #6b7280;
$secondary-light: #f3f4f6;
$secondary-dark: #1f2937;

// Estados
$success: #10b981;
$warning: #f59e0b;
$error: #ef4444;
$info: #3b82f6;
```

### 📱 **Breakpoints Responsivos**

```scss
// Mobile First
$mobile: 320px;
$tablet: 768px;
$desktop: 1024px;
$large: 1440px;

// Mixins
@mixin mobile { @media (min-width: $mobile) { @content; } }
@mixin tablet { @media (min-width: $tablet) { @content; } }
@mixin desktop { @media (min-width: $desktop) { @content; } }
```

### 🔤 **Tipografia**

```scss
// Fontes
$font-primary: 'Inter', sans-serif;''
$font-secondary: 'Roboto', sans-serif;

// Tamanhos
$text-xs: 0.75rem;    // 12px
$text-sm: 0.875rem;   // 14px
$text-base: 1rem;     // 16px
$text-lg: 1.125rem;   // 18px
$text-xl: 1.25rem;    // 20px
```

---

## 🔧 Configuração

### 🌍 **Ambientes de Desenvolvimento**

```typescript
// src/environments/environment.ts
export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  googleClientId: 'seu-google-client-id.apps.googleusercontent.com',
  firebaseConfig: {
    apiKey: 'sua-api-key',
    authDomain: 'seu-projeto.firebaseapp.com',
    projectId: 'seu-projeto-id'
  }
};
```

```typescript
// src/environments/environment.prod.ts
export const environment = {
  production: true,
  apiUrl: 'https://sua-api.herokuapp.com/api',
  googleClientId: 'seu-google-client-id-prod.apps.googleusercontent.com',
  firebaseConfig: {
    // Configuração de produção
  }
};
```

### ⚙️ **Configuração do Angular**

```json
// angular.json - Principais configurações
{
  "build": {
    "options": {
      "outputPath": "dist/organizador-financeiro",
      "index": "src/index.html",
      "main": "src/main.ts",
      "polyfills": "src/polyfills.ts",
      "tsConfig": "tsconfig.app.json",
      "assets": ["src/favicon.ico", "src/assets"],
      "styles": ["src/styles.scss"],
      "scripts": []
    }
  }
}
```

### 🔧 **Scripts Personalizados**

```json
// package.json
{
  "scripts": {
    "start": "ng serve",
    "build": "ng build",
    "build:prod": "ng build --configuration production",
    "test": "ng test",
    "test:ci": "ng test --watch=false --browsers=ChromeHeadless",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "analyze": "ng build --stats-json && npx webpack-bundle-analyzer dist/*/stats.json"
  }
}
```

---

## 📚 Recursos

### 📖 **Documentação Oficial**

- [Angular Documentation](https://angular.dev/) - Documentação oficial
- [Angular CLI Reference](https://angular.dev/tools/cli) - Referência da CLI
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Guia TypeScript
- [RxJS Documentation](https://rxjs.dev/) - Documentação RxJS

### 🎓 **Tutoriais e Cursos**

- [Tour of Heroes](https://angular.dev/tutorial) - Tutorial oficial
- [Angular University](https://angular-university.io/) - Cursos avançados
- [Fireship Angular](https://fireship.io/courses/angular/) - Curso prático

### 🛠️ **Ferramentas Úteis**

- [Angular DevTools](https://angular.dev/tools/devtools) - Extension do Chrome
- [Augury](https://augury.rangle.io/) - Debugger para Angular
- [Compodoc](https://compodoc.app/) - Documentação automática
- [Angular Schematics](https://angular.dev/tools/cli/schematics) - Geradores customizados

### 📦 **Bibliotecas Recomendadas**

```bash
# UI Components
ng add @angular/material
ng add primeng
ng add ng-bootstrap

# State Management
npm install @ngrx/store @ngrx/effects
npm install akita

# Utilities
npm install lodash-es
npm install date-fns
npm install chart.js ng2-charts

# Testing
npm install --save-dev @testing-library/angular
npm install --save-dev spectator
```

### 🚀 **Performance Tips**

- ✅ Use **OnPush** change detection strategy
- ✅ Implemente **lazy loading** para módulos
- ✅ Use **trackBy** functions em *ngFor
- ✅ Otimize **bundle size** com tree shaking
- ✅ Configure **service workers** para PWA
- ✅ Use **preload strategies** para rotas

---

<div align="center">

### 🎉 **Projeto Frontend criado com ❤️**

![Angular Version](https://img.shields.io/badge/Angular-19+-red?style=social&logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=social&logo=typescript)

**🛠️ Em constante evolução** • **🚀 Sempre atualizando**

---

*⭐ Interface moderna para o seu gerenciador financeiro!*

</div>
