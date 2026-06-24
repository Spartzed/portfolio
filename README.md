# Marcus Rodrigues - Full Stack Developer Portfolio

Portfolio profissional desenvolvido com Next.js 15, TypeScript, Tailwind CSS e shadcn/ui, com suporte a internacionalização (Português/Inglês).

## 🚀 Tecnologias

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização utility-first
- **shadcn/ui** - Componentes UI pré-estilizados
- **next-intl** - Internacionalização
- **Framer Motion** - Animações
- **lucide-react** - Ícones

## 📦 Estrutura do Projeto

```
portfolio/
├── src/
│   ├── app/
│   │   ├── [locale]/       # Rotas com internacionalização
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/
│   │   ├── sections/       # Seções do portfolio
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Contact.tsx
│   │   ├── ui/            # Componentes shadcn/ui
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── LanguageToggle.tsx
│   ├── i18n/
│   │   └── routing.ts
│   ├── lib/
│   │   ├── data.ts        # Dados do currículo
│   │   └── utils.ts
│   ├── messages/
│   │   ├── pt.json        # Traduções PT-BR
│   │   └── en.json        # Traduções EN
│   ├── i18n.ts
│   └── middleware.ts
└── public/
```

## 🛠️ Instalação

```bash
# Clone o repositório
git clone <seu-repositorio>

# Entre no diretório
cd portfolio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🌐 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Cria build de produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa ESLint
```

## 📝 Personalização

### Atualizar Dados do Currículo

Edite o arquivo `src/lib/data.ts` para atualizar suas informações:

```typescript
export const personalInfo = {
  name: 'Seu Nome',
  title: 'Full Stack Developer',
  email: 'seu@email.com',
  location: 'Sua Localização',
  // ...
};
```

### Atualizar Traduções

- **Português**: `src/messages/pt.json`
- **Inglês**: `src/messages/en.json`

### Personalizar Cores

Edite o arquivo `src/app/globals.css` para ajustar as cores do tema dark tech.

## 🚀 Deploy na Vercel

### Método 1: Integração Git (Recomendado)

1. **Push para GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy na Vercel**:
   - Acesse [vercel.com](https://vercel.com)
   - Clique em "Add New Project"
   - Importe seu repositório do GitHub
   - A Vercel detectará automaticamente o Next.js
   - Clique em "Deploy"

### Método 2: Vercel CLI

```bash
# Instale a Vercel CLI
npm i -g vercel

# Faça login
vercel login

# Deploy
vercel
```

### Variáveis de Ambiente

Não há variáveis de ambiente obrigatórias para este projeto.

### Domínio Personalizado

1. No dashboard da Vercel, acesse "Settings" > "Domains"
2. Adicione seu domínio
3. Configure os DNS conforme instruções

## 🎨 Recursos

- ✅ **Design Dark Tech** - Tema escuro com acentos em roxo/neon
- ✅ **Internacionalização** - Suporte PT/EN com toggle
- ✅ **Responsivo** - Mobile-first, funciona em todos os dispositivos
- ✅ **Animações** - Framer Motion para interações suaves
- ✅ **SEO Otimizado** - Meta tags e sitemap
- ✅ **Acessível** - ARIA labels e navegação por teclado
- ✅ **Performance** - Build otimizado para Vercel

## 📄 Licença

Este projeto está sob a licença MIT.

## 👤 Autor

**Marcus Rodrigues**
- GitHub: [@marcusviniciusr](https://github.com/marcusviniciusr)
- LinkedIn: [marcusviniciusr](https://linkedin.com/in/marcusviniciusr)
