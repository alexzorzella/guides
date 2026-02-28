// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "High Quality Quick Reference",
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
          autogenerate: { directory: "guides" },
        },
        {
          label: "Scripts",
          autogenerate: { directory: "scripts" },
        },
      ],
    }),
  ],
});
