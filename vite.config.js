import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import PurgeIcons from "vite-plugin-purge-icons";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dts: true,
      dirs: ["src"],
      extensions: ["vue"],
      deep: true,
    }),
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue\??/, // .vue
      ],
      imports: [
        // presets
        "vue",
        "vue-router",
        "@vueuse/core",
        // custom
        {
          vuex: ["mapActions", "mapGetters", "mapState", "useStore"],
        },
      ],
    }),
    PurgeIcons({
      content: [
        "**/*.vue", // scan for .vue file as well
      ],
      format: "mjs",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
