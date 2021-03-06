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
      include: [/\.[tj]sx?$/, /\.vue\??/],
      imports: [
        "vue",
        "vue-router",
        "@vueuse/core",
        {
          nanoid: ["nanoid"],
        },
        {
          "vee-validate": [
            "validate",
            "defineRule",
            "configure",
            "Field",
            "Form",
            "FieldArray",
            "ErrorMessage",
            "useField",
            "useForm",
            "useFieldArray",
            "useResetForm",
            "useIsFieldDirty",
            "useIsFieldTouched",
            "useIsFieldValid",
            "useIsSubmitting",
            "useValidateField",
            "useIsFormDirty",
            "useIsFormTouched",
            "useIsFormValid",
            "useValidateForm",
            "useSubmitCount",
            "useFieldValue",
            "useFormValues",
            "useFormErrors",
            "useFieldError",
            "useSubmitForm",
            "FormContextKey",
            "FieldContextKey",
          ],
        },
      ],
    }),
    PurgeIcons({
      content: ["**/*.vue"],
      format: "mjs",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
