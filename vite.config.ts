import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { hoistHeadTags } from './scripts/hoist-head-tags';

// https://vite.dev/config/
export default defineConfig(async () => {
  const plugins = [
    react(),
    tailwindcss(),
    ViteImageOptimizer({
      includePublic: true,
      logStats: true,
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
      png: { quality: 80 },
      webp: { quality: 80 },
    }),
  ];

  try {
    // @ts-expect-error optional local vite plugin may not exist in all environments
    const m = await import('./.vite-source-tags.js');
    plugins.push(m.sourceTags());
  } catch {
    // optional plugin not present
  }

  return {
    plugins,
    ssgOptions: {
      dirStyle: 'nested',
      onPageRendered: (_route: string, html: string) => hoistHeadTags(html),
    },
  };
});
