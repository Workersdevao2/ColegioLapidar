# Colégio Lapidar — Website

Site institucional do **Colégio Lapidar** (Angola).  
Stack: **HTML / CSS / JS** puro. Pronto para **Cloudflare Pages** + GitHub.

**Slogan:** Educar para Transformar / Educar hoje, transformar o amanhã!

---

## Estrutura de ficheiros

```
colegio-lapidar/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   └── images/
│       ├── logo.png              ← Logótipo oficial (favicon + header + footer)
│       ├── logo.svg              ← Versão SVG antiga (opcional)
│       ├── campus.jpg            ← Foto do campus (hero / sobre)
│       ├── matriculas-banner.jpg ← Banner oficial matrículas 2026/2027
│       ├── matriculas.jpg        ← Flyer antigo (backup)
│       └── heroi.jpg             ← Material institucional
└── README.md
```

---

## Secções do site

| Secção | Conteúdo |
|--------|----------|
| **Hero** | Campus + CTAs matrícula / preços |
| **Sobre** | Missão, valores, estatísticas |
| **Níveis** | Iniciação → 9.ª Classe |
| **Preços** | Taxas, propinas, extracurriculares, multas, emolumentos |
| **Regulamento** | 10 regras de pagamento (descontos, prazos, métodos, suspensão) |
| **Uniformes** | Loja escolar — encomenda via WhatsApp |
| **Matrículas** | Documentos + banner oficial + destaques |
| **Contacto** | Morada, telefone, e-mail, formulário → WhatsApp |

---

## Funcionalidades

- Design **luxury**, mobile-first, linhas finas (1–1.5px)
- Hamburger animado (transformação em X)
- Barra de anúncio fixa (matrículas abertas)
- **Português** (padrão) + toggle **Inglês**
- Logótipo oficial em favicon, header e footer
- Tabela de preços completa 2026/2027 (taxas, propinas, multas, emolumentos)
- Extracurriculares: Ballet, Xadrez, Karaté + inscrição 3.000 Kz
- Secção Regulamento com condições de pagamento
- Uniformes com botões de encomenda WhatsApp
- Banner oficial de matrículas + 7 destaques
- Formulário de contacto → WhatsApp com mensagem pré-preenchida
- Botão flutuante WhatsApp
- Links Instagram & Facebook

---

## Contactos

| Canal | Detalhe |
|-------|---------|
| **Morada** | Benfica, Rua 32 — Junto à Ponte do Mercado do Kifica |
| **WhatsApp** | +244 950 456 485 |
| **Telefone** | 942 187 723 |
| **E-mail** | colegiolapidar@gmail.com |
| **Instagram** | [lapidar.ao](https://www.instagram.com/lapidar.ao/) |
| **Facebook** | [lapidar.ao](https://www.facebook.com/lapidar.ao) |

---

## Preços 2026/2027 (resumo)

**Taxas (únicas)**  
Matrícula 15.000 · Confirmação 10.000 · Apoio pedagógico 5.000 Kz

**Propinas mensais**  
Iniciação–3.ª: 15.300 · 4.ª–6.ª: 17.500 · 7.ª–9.ª: 19.500 Kz

**Extracurriculares (mensal)**  
Ballet 15.000 · Xadrez 10.000 · Karaté 10.000 · Inscrição 3.000 Kz

Ver tabelas completas de multas e emolumentos no site.

---

## Deploy — Cloudflare Pages

1. Crie um repositório no GitHub e faça push desta pasta.
2. Cloudflare Dashboard → **Pages** → Create project → Connect to Git.
3. Framework preset: **None** (static).
4. Build command: *(vazio)*  
   Output directory: `/` (raiz do repo).
5. Deploy. Use o domínio `*.pages.dev` ou ligue o seu domínio.

## Teste local

```bash
cd colegio-lapidar
npx serve .
# ou
python3 -m http.server 8080
```

---

## Personalização

| O quê | Onde |
|-------|------|
| Cores e tipografia | `css/style.css` (`:root`) |
| Textos PT / EN | `js/main.js` → objecto `translations` |
| Número WhatsApp | `js/main.js` (formulário + botões de produtos) |
| Logótipo | `assets/images/logo.png` |
| Imagens | `assets/images/` |

---

## Changelog (actualizações importantes)

- **Logótipo oficial** (`logo.png`) em favicon, header e footer
- Secção **Regulamento** (condições de pagamento, descontos, multas, métodos)
- Tabelas de **multas por atraso** e **emolumentos**
- Banner oficial de matrículas + destaques do colégio
- **Morada** Benfica, Rua 32 no contacto e footer
- Barra de anúncio + botão flutuante WhatsApp
- Toggle PT / EN completo

---

© 2026 Colégio Lapidar — Educar para Transformar
