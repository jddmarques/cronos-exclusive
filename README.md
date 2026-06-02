# Cronos Exclusivo — Catálogo Digital

Catálogo digital de relojoaria de luxo. Next.js 14 + TypeScript + TailwindCSS.
Conversão via WhatsApp. Sem checkout.

---

## Como rodar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

Build de produção:

```bash
npm run build
npm run start
```

---

## Como adicionar ou editar produtos

Edite o arquivo `lib/products.ts`.

Cada produto segue a interface `Product`:

```ts
{
  id: '9',                          // ID único
  slug: 'marca-modelo-referencia',  // URL da página de produto
  brand: 'Marca',
  model: 'Nome do modelo',
  reference: 'REF000',
  year: 2024,
  condition: 'Como novo',           // 'Como novo' | 'Excelente' | 'Bom' | 'Novo (lacrado)'
  fullSet: true,                    // true = acompanha caixa e documentos
  price: 50000,                     // null = "Sob consulta"
  images: ['https://...', '...'],   // 4–6 fotos, proporção 4:5
  description: 'Descrição editorial em 2–3 frases.',
  specs: {
    caixa: 'Aço inoxidável',
    diametro: '40mm',
    espessura: '10mm',
    movimento: 'Automático',
    calibre: 'Cal. XXXX',
    reservaDeMarcha: '48 horas',
    resistenciaAgua: '100m',
    pulseira: 'Couro preto',
  },
  featured: false,                  // true = aparece nos destaques da home
}
```

Para o produto aparecer nos destaques da home, defina `featured: true` (máx. 4 produtos).

---

## Como trocar as imagens placeholder

As imagens atuais são do Unsplash (placeholder). Para substituir:

1. Fotografe o relógio em proporção **4:5** (ex: 800×1000px)
2. Exporte em **WebP**, < 200KB por imagem
3. Coloque as fotos em `/public/products/{slug}/` (crie a pasta)
4. No `lib/products.ts`, substitua as URLs do Unsplash pelos caminhos locais:
   ```ts
   images: [
     '/products/rolex-submariner-126610ln/01.webp',
     '/products/rolex-submariner-126610ln/02.webp',
   ]
   ```

---

## Como configurar WhatsApp e Instagram

Edite `lib/contact.ts`:

```ts
export const contact = {
  whatsapp: '+55 85 99999-9999',     // Exibição na UI
  whatsappRaw: '5585999999999',       // Número puro para link wa.me (sem espaços, + ou -)
  instagram: '@cronosexclusive',
  instagramUrl: 'https://instagram.com/cronosexclusive',
  city: 'Fortaleza, CE',
  address: 'Fortaleza, Ceará — Brasil',
}
```

A mensagem pré-preenchida do WhatsApp é gerada em `lib/whatsapp.ts` — edite se quiser personalizar o texto.

---

## Como configurar a URL do site (OG, sitemap)

Em `app/layout.tsx`, atualize:
```ts
metadataBase: new URL('https://cronosexclusive.com.br'),
```

---

## Deploy na Vercel

1. Crie um projeto na [Vercel](https://vercel.com)
2. Conecte este repositório
3. A Vercel detecta Next.js automaticamente — zero configuração adicional

---

## Próximos passos — integrar CMS (Sanity recomendado)

1. `npm install @sanity/client next-sanity`
2. Crie um schema `watch` no Sanity Studio com os mesmos campos de `Product`
3. Substitua o array em `lib/products.ts` por uma query GROQ:
   ```ts
   // lib/products.ts
   import { client } from '@/sanity/client'
   export const products = await client.fetch(`*[_type == "watch"] | order(_createdAt desc)`)
   ```
4. Use `generateStaticParams` + `revalidate` para ISR (Incremental Static Regeneration)
5. Imagens: migre para `@sanity/image-url` com `next/image` loader customizado

---

## Checklist — Fase 2 (pendente)

- [ ] Página `/catalogo` com filtros funcionais (Marca, Faixa de preço, Condição, Full set)
- [ ] Filtros persistidos em URL params (`?marca=rolex&condicao=como-novo`)
- [ ] Drawer de filtros no mobile
- [ ] Skeleton durante filtragem
- [ ] Schema.org completo em todas as PDPs
- [ ] `sitemap.xml` dinâmico
- [ ] `robots.txt`
- [ ] Open Graph por página com imagem real
- [ ] Twitter Card
- [ ] Refinamentos de animação (Framer Motion nos reveals)
- [ ] Internacionalização i18n-ready (estrutura, sem implementar EN agora)
- [ ] Teste de performance Lighthouse ≥ 95

---

## Estrutura de arquivos

```
/app
  /(site)
    layout.tsx          → Navbar + Footer wrapper
    page.tsx            → Home
    /catalogo/page.tsx  → Catálogo (grid, sem filtros por enquanto)
    /produto/[slug]/page.tsx → PDP (página de produto)
  layout.tsx            → Root layout (fonts, metadata global)
  template.tsx          → Page transition (fade)
  globals.css

/components
  /layout   → Navbar, Footer, Container
  /home     → Hero, FaixaMarcas, Destaques, SobreBloco
  /catalogo → ProductCard
  /produto  → Galeria, InfoPainel, EspecificacoesTabela, Relacionados
  /ui       → Button, Badge

/hooks
  useScrollReveal.ts

/lib
  products.ts   → Dados mockados + tipos + helpers
  brands.ts     → Lista de marcas para FaixaMarcas
  contact.ts    → WhatsApp, Instagram, endereço
  whatsapp.ts   → Gerador de link com mensagem pré-preenchida

/public
  /brands   → SVGs monocromáticos das marcas
  /og-images → Imagens Open Graph (adicionar manualmente)
```
