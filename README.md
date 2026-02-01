# Lifetime Issues

> **A "Digital Zen" blog theme for developers who need some peace.**  
> *Debugging code, systems, and the lifetime of ideas.*

A minimalist, high-performance tech blog theme built with **Astro** and **Deno**. Designed for readability and speed.

## 🛠 Stack

- **Framework**: [Astro](https://astro.build) (Static Site Generation)
- **Runtime**: [Deno](https://deno.com)
- **Deployment**: Nginx (Static hosting)
- **Styling**: Vanilla CSS with a focus on typography (Charter & System UI)

## ⚡️ Performance

This theme is optimized for speed and accessibility, achieving perfect LightHouse scores.

| Category | Score |
|----------|-------|
| 🟢 Performance | **100** |
| 🟢 Accessibility | **100** |
| 🟢 Best Practices | **100** |
| 🟢 SEO | **100** |

## 🎥 Showcase

![Theme Demo](./public/assets/demo/theme-showcase.gif)

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

## 🌍 Deployment & Nginx Setup

We use **Nginx** because it is an event-driven, asynchronous web server that is incredibly efficient at serving static files. For a static site like this, Nginx uses very little memory and can handle thousands of concurrent connections effortlessly compared to traditional process-based servers.

### 1. Build & Transfer
Run the build command and copy the `./dist` folder to your server (e.g., `/var/www/tech-blog`).

### 2. Configure Nginx

On Debian/Ubuntu systems, Nginx uses a split configuration focus:
- `/etc/nginx/sites-available/`: Stores all your server block definition files (like `tech-blog`).
- `/etc/nginx/sites-enabled/`: Stores symlinks to the files in `sites-available` that you want to be active.

**Step-by-Step Guide:**

1.  **Create the configuration file**:
    We name it `tech-blog` for clarity, but the name can be anything.
    ```bash
    sudo nano /etc/nginx/sites-available/tech-blog
    ```

2.  **Paste your configuration**:
    Use the provided [nginx.conf](./nginx.conf) as a template. Update `root` to point to `/var/www/tech-blog`.

3.  **Enable the site**:
    Create a symbolic link from `sites-available` to `sites-enabled`.
    ```bash
    sudo ln -s /etc/nginx/sites-available/tech-blog /etc/nginx/sites-enabled/
    ```

4.  **Test and Reload**:
    ```bash
    sudo nginx -t   # Check for syntax errors
    sudo systemctl reload nginx
    ```

## 🔒 Security: Setting up HTTPS with Certbot

To enable HTTPS and get that "Green Padlock," we use Certbot from Let's Encrypt. It automatically handles the SSL certificate issuance and renewal.

1. **Install Certbot and the Nginx Plugin**

   Run these commands on your Debian VM:

   ```bash
   sudo apt update
   sudo apt install certbot python3-certbot-nginx -y
   ```

2. **Obtain and Install the Certificate**

   Certbot is smart enough to read your `/etc/nginx/sites-available/tech-blog` file, find your `server_name`, and configure the SSL for you.

   ```bash
   # Replace 'yourdomain.com' with your actual domain or free subdomain
   sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
   ```

   During setup: It will ask for your email (for renewal alerts) and ask if you want to redirect all HTTP traffic to HTTPS. Choose "Yes" (Redirect).

3. **Verify Automatic Renewal**

   Let's Encrypt certificates expire every 90 days, but Certbot sets up a "timer" to renew them automatically. You can test this process with a "dry run":

   ```bash
   sudo certbot renew --dry-run
   ```
