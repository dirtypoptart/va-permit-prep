# Public deployment checklist

The app has no build step. Copy this directory to `/var/www/permit-studyguide` and serve it with Caddy.

## Before launch

1. Choose a domain and a monitored contact email for question reports.
2. Add an absolute canonical link to `index.html`:

   ```html
   <link rel="canonical" href="https://YOUR-DOMAIN/">
   <meta property="og:url" content="https://YOUR-DOMAIN/">
   <meta property="og:image" content="https://YOUR-DOMAIN/social-preview.png">
   ```

   The repository already includes a 1200×630 PNG social preview. Re-run `node scripts/generate-png-assets.mjs` after editing its SVG source.

3. Put a monitored feedback address in `<body data-feedback-email="you@example.com">` and add it to the footer. The in-quiz report button will then open a pre-filled email instead of only copying the report. Do not publish an address nobody checks; that is a suggestion box painted onto a wall.
4. Create `sitemap.xml` with the final absolute homepage URL, then add `Sitemap: https://YOUR-DOMAIN/sitemap.xml` to `robots.txt`.
5. Replace `YOUR-DOMAIN` in commands below. Verify that DNS A/AAAA records point to the VPS.

## Alpine Linux and Caddy

```sh
apk update
apk upgrade
apk add caddy rsync
rc-update add caddy default
mkdir -p /var/www/permit-studyguide
```

Copy the project from your development machine:

```sh
rsync -av --delete permit-studyguide/ root@YOUR-SERVER-IP:/var/www/permit-studyguide/
```

On the server:

```sh
chown -R caddy:caddy /var/www/permit-studyguide
cp /var/www/permit-studyguide/Caddyfile.example /etc/caddy/Caddyfile
export SITE_DOMAIN=YOUR-DOMAIN
caddy validate --config /etc/caddy/Caddyfile
rc-service caddy restart
```

For persistent service startup, define `SITE_DOMAIN` in the environment used by the Caddy OpenRC service or replace `{$SITE_DOMAIN}` with the literal domain in `/etc/caddy/Caddyfile`.

## Required checks

- Visit `https://YOUR-DOMAIN` and confirm the certificate is valid.
- Complete a quick round and a full simulation in Firefox and Chromium.
- Miss a sign and confirm the full simulation ends before general knowledge.
- Test at 320, 360, 768, and 1280 CSS pixels.
- Complete the app using only the keyboard.
- Run an accessibility scan and inspect its findings manually.
- Check response headers with `curl -I https://YOUR-DOMAIN`.
- Confirm the official-manual link and the visible review date.
- Schedule a content audit for December 2026 before Virginia's January 1, 2027 rule changes.

## Updates

Upload changed files with the same `rsync` command. Ordinary static-file changes do not require a Caddy restart. Use Git or another off-server copy as the source of truth; the VPS is deployment machinery, not a sacred reliquary.
