---
layout: ../../layouts/BaseLayout.astro
title: Configuring Systems
pubDate: 2023-10-05
---

## Server Configuration

When deploying our static blog, we might use a simple `Caddyfile`. The syntax is remarkably clean compared to Nginx.

```caddyfile
:8080 {
    root * ./dist
    file_server
    encode gzip zstd
}
```

### Terminal Commands

To build the project, we use our custom Deno task:

```bash
deno task build
deno task compile
```

This generates a standalone binary that is **blazing fast** and easy to deploy.
