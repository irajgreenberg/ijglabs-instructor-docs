# IJG Studio Instructor Docs

Astro Starlight documentation for instructors using IJG Studio.

Goal: a teacher who has just signed up can publish a course and import a cohort in under 15 minutes.

## Local development

```bash
nvm use
npm ci
npm run dev
```

## Build and preview

```bash
npm run build
npm run preview
# http://127.0.0.1:3219
```

## Deployment

Production is a PM2 process named `instructor-docs` on `cortex-studio`, bound to `127.0.0.1:3219` from `~/apps/ijglabs-instructor-docs`.

The GitHub Actions workflow in `.github/workflows/deploy.yml` verifies the build on push to `main`. When deploy variables are enabled, it rsyncs the project to cortex-studio, runs `npm ci && npm run build`, reloads or starts PM2, saves the PM2 process list, and checks `http://localhost:3219/`.

Required repository secrets/variables for deploy:

- `ENABLE_CORTEX_DEPLOY=true`: enables the deploy job after SSH secrets are installed.
- `CORTEX_SSH_KEY`: private SSH key with access to cortex-studio.
- `CORTEX_HOST`: optional, defaults to `gogo.ijglabs.ai`.
- `CORTEX_USER`: optional, defaults to `ira`.
- `CF_ACCESS_CLIENT_ID` and `CF_ACCESS_CLIENT_SECRET`: optional Cloudflare Access service-token headers, matching the IJG Studio deploy workflow pattern.

## Content rules

- Educator-facing only.
- Keep pages short, concrete, and click-oriented.
- Leave screenshot placeholders as HTML comments in the exact requested format.
