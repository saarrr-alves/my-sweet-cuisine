<img src="./src/app/images/Sweet%20Cuisine%20Banner.png" alt="Banner Sweet Cuisine" width="100%" />

# 🍰 Sweet Cuisine

[![Next.js](https://img.shields.io/badge/Next.js-16-7C5326?style=for-the-badge&labelColor=7C5326&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-7C5326?style=for-the-badge&labelColor=7C5326&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-7C5326?style=for-the-badge&labelColor=7C5326&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GitHub Actions](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-7C5326?style=for-the-badge&labelColor=7C5326&logo=github-actions&logoColor=white)](https://github.com/features/actions)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-7C5326?style=for-the-badge&labelColor=7C5326&logo=vercel&logoColor=white)](https://my-sweet-cuisine.vercel.app/)

Plataforma web de receitas e artigos culinários desenvolvida com **Next.js (App Router)** e **TypeScript**, focada em performance, SEO otimizado, rotas dinâmicas e fluxo de entrega contínua automatizada.

🔗 **Acesse a aplicação online:** [my-sweet-cuisine.vercel.app](https://my-sweet-cuisine.vercel.app/)

## 📸 Prévia da Aplicação

<img src="./src/app/images/sweet cuisine prev1.png" alt="Tela Inicial - Sweet Cuisine" width="100%" />

<p align="center">
  <img src="./src/app/images/sweet cuisine prev2.png" alt="Listagem de Receitas - Sweet Cuisine" width="49%" />
  <img src="./src/app/images/sweet cuisine prev3.png" alt="Página de Detalhes do Artigo - Sweet Cuisine" width="49%" />
</p>

## ✨ Funcionalidades

* **Catálogo de Receitas:** Exibição de receitas em cards organizados com imagem otimizada (`next/image`), título, resumo e autoria.
* **Rotas Dinâmicas por Artigo:** Páginas individuais geradas dinamicamente via slug (`/artigos/[slug]`) com detalhes completos de cada receita.
* **SEO & Metadados Dinâmicos:** Configuração de títulos, descrições e metadados específicos por página para melhor indexação.
* **Interface Responsiva e Modular:** Estilização isolada por componente com **CSS Modules**, garantindo leveza e fácil manutenção.
* **Pipeline de CI/CD Automatizado:** Integração contínua e deploy automático na Vercel configurados via **GitHub Actions**.

## 🛠️ Tecnologias Utilizadas

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
* **Biblioteca UI:** [React 19](https://react.dev/)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Estilização:** CSS Modules
* **CI/CD & Hospedagem:** [GitHub Actions](https://github.com/features/actions) & [Vercel](https://vercel.com/)

## 🔄 CI/CD e Deploy Automatizado

O projeto conta com um fluxo de **Integração Contínua e Entrega Contínua (CI/CD)** configurado em `.github/workflows` utilizando **GitHub Actions** integrado à **Vercel**:

* **Verificação Automatizada (CI):** A cada `push` ou `pull request` na branch principal, o pipeline executa a instalação das dependências, verificação de tipagem/lint e o build da aplicação para garantir que não haja quebras em produção.
* **Deploy Contínuo (CD):** Após a validação com sucesso no workflow, a nova versão é implantada automaticamente no ambiente de produção da **Vercel**.

## 📁 Estrutura do Projeto

```text
Sweet-Cuisine/
├── .github/
│   └── workflows/         # Pipelines de CI/CD com GitHub Actions
├── public/                # Arquivos estáticos e favicon
├── src/
│   ├── app/
│   │   ├── artigos/
│   │   │   └── [slug]/    # Rota dinâmica para leitura de cada receita
│   │   ├── images/        # Banner e capturas de tela da documentação
│   │   ├── globals.css    # Estilos globais da aplicação
│   │   ├── layout.tsx     # Layout principal e metadados base
│   │   └── page.tsx       # Página inicial com vitrine de receitas
│   ├── components/        # Componentes reutilizáveis (Header, Footer, Cards)
│   ├── data/              # Base de dados estruturada das receitas
│   └── types/             # Tipagens TypeScript do projeto
├── next.config.ts         # Configurações do Next.js (domínios de imagens, etc.)
├── package.json           # Dependências e scripts
└── tsconfig.json          # Configurações do TypeScript
```

## 🚀 Como Executar Localmente
1. Clone o repositório:
```
git clone [https://github.com/saarrr-alves/Sweet-Cuisine.git](https://github.com/saarrr-alves/Sweet-Cuisine.git)
cd Sweet-Cuisine
```

2. Instale as dependências:
```
Bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```
Bash
npm run dev
```

4. Acesse no navegador: **Abra http://localhost:3000 para visualizar a aplicação.**

## 👩‍💻 Autoria
Desenvolvido por **Sara Alves** (@saarrr-alves).
