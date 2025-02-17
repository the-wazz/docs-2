import theme from "@nuxt/content-theme-docs";

export default theme({
  docs: {
    primaryColor: "#3b82f6",
  },
  pwa: {
    manifest: {
      name: "Hoppscotch Documentation",
    },
  },
  buildModules: [
    // Doc: https://github.com/nuxt-community/tailwindcss-module
    "@nuxtjs/tailwindcss",
  ],
});
