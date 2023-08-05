// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBase: "https://api.github.com",
    },
  },
  devtools: { enabled: false },
  app: {
    head: {
      titleTemplate: "%s",
      title: "Dev Finder • GitHub",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/eslint-module",
    "dayjs-nuxt",
  ],
  colorMode: {
    classSuffix: "",
    storageKey: "color-mode",
  },
});
