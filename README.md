# Digital Zen Blog

A minimalist, high-performance tech blog theme built with **Astro** and **Deno**. Designed for readability and speed.

## 🛠 Stack

- **Framework**: [Astro](https://astro.build) (Static Site Generation)
- **Runtime**: [Deno](https://deno.com)
- **Deployment**: Nginx (Static hosting)
- **Styling**: Vanilla CSS with a focus on typography (Charter & System UI)

## 🚀 Development

Start the local development server:

```bash
deno task dev
# or
npm run dev
```

Server runs at `http://localhost:4321`.

## 📦 Building for Production

Generate the static assets:

```bash
deno task build
```

The output will be in the `./dist` folder.

## 🌍 Deployment

1.  **Build**: Run the build command above.
2.  **Deploy**: Copy the contents of `./dist` to your server's web root (e.g., `/var/www/tech-blog`).
3.  **Serve**: Ensure Nginx is configured to serve the static files (see `nginx.conf` for reference).
