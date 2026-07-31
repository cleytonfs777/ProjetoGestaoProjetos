# Portal Corporativo de Processos — CBMMG

Protótipo estático (HTML/CSS/JS puro). Não requer Node.js nem backend:
todos os dados estão embutidos no `app.js` e o roteamento é feito no
navegador via query string (`?view=catalog`, `?view=dashboard`, etc.).

## Estrutura

    portal/
    ├── public/            ← pasta publicada
    │   ├── index.html     ← portal (protegido: exige login)
    │   ├── styles.css     ← CSS do portal
    │   ├── app.js         ← lógica do portal (catálogo, wizard, etc.)
    │   ├── login.html     ← tela de login (mesmo padrão visual)
    │   ├── login.css      ← CSS da tela de login
    │   ├── login.js       ← controle do formulário de login
    │   ├── auth.js        ← sessão/credenciais (compartilhado)
    │   ├── session-ui.js  ← ajusta o topbar quando logado
    │   ├── brasao.png     ← logo (antes embutida em base64)
    │   ├── _headers       ← cache (Cloudflare Pages)
    │   └── _redirects     ← fallback SPA (Cloudflare Pages)
    ├── .gitignore
    └── README.md

## Testar localmente

    cd public
    python3 -m http.server 8080
    # abra http://localhost:8080

(ou qualquer servidor estático; abrir o index.html direto com file://
também funciona porque não há fetch/XHR.)

## Login do protótipo

Abra `login.html`. Credenciais de exemplo:

    usuário: admin
    senha:   admin123

Ao entrar, o portal (`index.html`) mostra os dados do usuário no canto
superior direito e um botão **Sair**. O `index.html` é protegido: sem
sessão ativa, redireciona para o login.

- "Manter-me conectado" usa `localStorage` (persiste); desmarcado usa
  `sessionStorage` (some ao fechar a aba).
- **É apenas protótipo:** as credenciais estão no `auth.js` (client-side)
  e não oferecem segurança real. Em produção, autenticação e emissão de
  sessão devem ficar no servidor (ex.: SSO institucional).

## Deploy — Cloudflare Pages (recomendado, gratuito)

Melhor opção gratuita para site 100% estático: banda ilimitada, CDN
global, HTTPS automático.

### Opção A — via painel (mais simples)
1. Crie conta em https://dash.cloudflare.com  → Workers & Pages → Create → Pages
2. "Upload assets" (ou conecte um repositório Git)
3. Envie o conteúdo da pasta `public/`
4. Build command: (vazio) · Output directory: `/` (ou `public` se subir o repo inteiro)
5. Deploy. Recebe uma URL `*.pages.dev`; domínio próprio é opcional.

### Opção B — via CLI (Wrangler)
    npm install -g wrangler
    wrangler login
    wrangler pages deploy public --project-name portal-processos-cbmmg

## Alternativas gratuitas equivalentes
- **GitHub Pages**: suba `public/` num repo, ative Pages apontando para a pasta.
- **Netlify**: arraste a pasta `public/` em app.netlify.com/drop.

Todas servem estático igualmente bem; a segmentação em arquivos aqui
vale para qualquer uma delas.

## Observação
Nenhum tier gratuito tem SLA. Para uso institucional em produção,
considere um VPS (Hetzner/Contabo) servindo os mesmos arquivos com Nginx.
