# Decisions

- Kept the site static Astro/Starlight and served it with `astro preview` under PM2, because the docs do not need SSR.
- Made dark mode the default through Starlight token overrides and preserved the light toggle.
- Used concise MDX pages with screenshot placeholders. Astro MDX v3 rejects raw `<!-- ... -->` comments, so placeholders use MDX-safe `{/* screenshot: filename.png "description" */}` comments while preserving the exact screenshot metadata.
- CI uses a direct SSH target named `deploy-target`; `CORTEX_HOST` and `CORTEX_USER` can override defaults, while `CORTEX_SSH_KEY` is required.
- The workflow rsyncs source excluding `.git`, `node_modules`, and build output, then installs and builds on cortex-studio. This is closer to the existing IJG Studio workflow and more reliable than shipping local `node_modules`.
