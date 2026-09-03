// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "High Quality Docs",
      customCss: [ 
          './src/styles/custom.css', 
      ],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [
        {
          label: 'Home',
          link: '/'
        },
        {
          label: "Guides",
          items: [ { autogenerate: { directory: "guides" } } ],
        },
        {
          label: "Scripts",
          items: [ { autogenerate: { directory: "scripts" } } ],
        },
        {
          label: "MParakeet3",
          items: [ { autogenerate: { directory: "mparakeet3" } } ],
        },
        {
          label: "Socrates Plugin",
          items: [ { autogenerate: { directory: "socrates_plugin" } } ],
        },
        {
          label: "Editorial",
          items: [ { autogenerate: { directory: "editorial" } } ],
        },
      ],
    }),
  ],

  adapter: cloudflare(),
});