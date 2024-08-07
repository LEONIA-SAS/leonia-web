import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'http://leonia.com.co',
  integrations: [react(), sitemap()]
});