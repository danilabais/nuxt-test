// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/image", "@vueuse/nuxt"],
  css: ["normalize.css/normalize.css", "@/app/styles/main.scss"],
  vite: {
    vue: {
      script: {
        defineModel: true,
      },
    },
  },
});
