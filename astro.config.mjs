// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://instructor.ijglabs.ai',
  integrations: [mdx()],
  trailingSlash: 'never',
});
