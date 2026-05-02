// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://ijglabs.ai',
  integrations: [
    starlight({
      title: 'IJG Studio · Instructor Guide',
      logo: { replacesTitle: true, src: './src/assets/logo.svg' },
      favicon: '/favicon.svg',
      defaultLocale: 'root',
      customCss: ['./src/styles/custom.css'],
      editLink: { baseUrl: 'https://github.com/irajgreenberg/ijglabs-instructor-docs/edit/main/' },
      social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/irajgreenberg/ijglabs-instructor-docs' }],
      components: {
        Head: './src/components/Head.astro',
      },
      sidebar: [
        { label: 'Start here', items: [
          { label: 'Welcome', slug: '' },
          { label: 'Getting started', slug: 'getting-started' },
        ] },
        { label: 'Courses', items: [
          { label: 'Create with the wizard', slug: 'courses/create-with-wizard' },
          { label: 'Edit a course', slug: 'courses/edit-course' },
        ] },
        { label: 'Cohorts', items: [
          { label: 'Cohort overview', slug: 'cohorts/overview' },
          { label: 'Add students', slug: 'cohorts/add-students' },
          { label: 'Send invites', slug: 'cohorts/send-invites' },
        ] },
        { label: 'Lessons', items: [
          { label: 'Media types', slug: 'lessons/media-types' },
          { label: 'Edit a lesson', slug: 'lessons/edit-lesson' },
          { label: 'Author with AI', slug: 'lessons/author-with-ai' },
        ] },
        { label: 'Launch', items: [
          { label: 'Publish', slug: 'publish' },
          { label: 'Troubleshooting', slug: 'troubleshooting' },
        ] },
      ],
    }),
  ],
  vite: {
    preview: {
      // Allow the production hostname behind the Cloudflare tunnel.
      // ".ijglabs.ai" is a wildcard for any subdomain on that root.
      allowedHosts: [".ijglabs.ai", "localhost", "127.0.0.1"],
    },
  },
});
