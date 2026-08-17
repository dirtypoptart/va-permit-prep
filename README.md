# VA Permit Prep

A dependency-free Virginia learner's permit study app built for Virginia Beach learners.

## Run it

Open `index.html` directly, or serve the folder locally:

```bash
python3 -m http.server 8000 --directory permit-studyguide
```

Then visit `http://localhost:8000`.

## Content note

The app is an unofficial supplement based on the Virginia DMV Driver's Manual and DMV learner-permit pages last reviewed August 16, 2026. Rules change; the app links learners back to the official manual for verification.

For an internet-facing Alpine/Caddy deployment, see `DEPLOYMENT.md` and `Caddyfile.example`.

Raster assets are generated from their code-native SVG sources with `node scripts/generate-png-assets.mjs`; the generator requires `rsvg-convert`.
