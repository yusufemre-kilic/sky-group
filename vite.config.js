import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

// Dynamically discover all root HTML pages for Rollup build
const htmlFiles = fs.readdirSync(__dirname).filter(
  file => file.endsWith('.html') && !file.endsWith('.bak') && !file.includes('_orig')
);
const rollupInputs = {};
htmlFiles.forEach(file => {
  const key = file.replace('.html', '');
  rollupInputs[key] = path.resolve(__dirname, file);
});

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173
  },
  plugins: [
    {
      name: 'route-and-api-middleware',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url) {
            const cleanUrl = req.url.split('?')[0];
            const routes = ['referanslar', 'urunlerimiz', 'cozumlerimiz', 'hizmetlerimiz', 'kurumsal'];
            for (const r of routes) {
              if (cleanUrl === `/${r}` || cleanUrl === `/${r}/`) {
                const query = req.url.includes('?') ? req.url.substring(req.url.indexOf('?')) : '';
                req.url = `/${r}.html` + query;
                break;
              }
            }
          }
          if (req.url && req.url.startsWith('/api/pricing')) {
            const jsonPath = path.resolve(__dirname, 'public/api/pricing.json');
            if (fs.existsSync(jsonPath)) {
              res.setHeader('Content-Type', 'application/json');
              res.end(fs.readFileSync(jsonPath));
              return;
            }
          }
          next();
        });
      }
    }
  ],
  build: {
    rollupOptions: {
      input: rollupInputs
    }
  }
});
