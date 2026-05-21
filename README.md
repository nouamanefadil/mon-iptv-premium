# Mon IPTV Premium

React/Vite website for `moniptvpremium.fr`.

## Local Development

```bash
npm install
npm run dev
```

## Build For Hostinger / Custom Domain

```bash
npm run build
```

Upload the **contents of `dist/`** to Hostinger `public_html/`.

Do not upload the project root `index.html`, `src/`, `package.json`, or `node_modules/`.
The live website must use `dist/index.html`, which loads compiled files from `dist/assets/`.

## GitHub Pages

The GitHub Actions workflow deploys to:

```txt
https://nouamanefadil.github.io/mon-iptv-premium/
```

It uses a different base path for GitHub Pages only.
