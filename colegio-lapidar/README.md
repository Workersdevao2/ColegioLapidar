# Colégio Lapidar — Website

Site institucional do **Colégio Lapidar** (Angola).  
Stack: HTML / CSS / JS puro. Pronto para **Cloudflare Pages** + GitHub.

## Estrutura

```
colegio-lapidar/
├── index.html
├── css/style.css
├── js/main.js
├── assets/images/
│   ├── campus.jpg
│   ├── logo.svg
│   └── ...
└── README.md
```

## Funcionalidades

- Design luxury, mobile-first, linhas finas (1–1.5px)
- Hamburger animado (X)
- Português (padrão) + toggle Inglês
- Tabela de preços 2026/2027
- Secção de uniformes (encomenda via WhatsApp)
- Formulário de contacto → abre WhatsApp com mensagem pré-preenchida
- Links Instagram & Facebook

## Contactos

- WhatsApp: +244 950 456 485  
- Telefone: 942 187 723  
- E-mail: colegiolapidar@gmail.com  
- Instagram: [lapidar.ao](https://www.instagram.com/lapidar.ao/)  
- Facebook: [lapidar.ao](https://www.facebook.com/lapidar.ao)

## Deploy — Cloudflare Pages

1. Crie um repositório no GitHub e faça push desta pasta.
2. No Cloudflare Dashboard → Pages → Create project → Connect to Git.
3. Framework preset: **None** (static).
4. Build command: *(deixe vazio)*  
   Output directory: `/` (ou a raiz do repo).
5. Deploy. Domínio gratuito `*.pages.dev` ou ligue o seu domínio.

## Deploy local (teste)

Abra `index.html` num browser ou use um servidor estático:

```bash
npx serve .
# ou
python3 -m http.server 8080
```

## Personalização

- Cores e tipografia: `css/style.css` (`:root`)
- Textos PT/EN: objecto `translations` em `js/main.js`
- Número WhatsApp: `js/main.js` (função do formulário e botões de produtos)

---

© 2026 Colégio Lapidar — Educar para Transformar
