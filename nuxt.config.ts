export default defineNuxtConfig({
  compatibilityDate: '2025-12-15',
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@nuxt/content",
    "@vueuse/nuxt",
    "@nuxt/image",
  ],
  studio: {
    // Git repository configuration (owner and repo are required)
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'mrGrochowski', // your GitHub/GitLab username or organization
      repo: 'tatolista', // your repository name
      branch: 'main', // the branch to commit to (default: 'main')
    },
    route: '/admin',
  },
 /*  nitro: {
    prerender: {
      // Pre-render the homepage
      routes: ['/'],
      // Then crawl all the links on the page
      crawlLinks: true
    }
  }, */
  css: [
    '~/assets/css/main.css',
  ],
  ui: {
    icons: ["heroicons", "lucide"],
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
        class: "h-full",
      },
      bodyAttrs: {
        class: "antialiased bg-gray-50 dark:bg-black min-h-screen",
      },
    },
  },
  content: {
    highlight: {
      theme: "github-dark",
    },
  },
  googleFonts: {
    display: "swap",
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },
  tailwindcss: {
    config: {
      // Wszelkie opcje, które były w głównym obiekcie konfiguracyjnym Tailwind
      // W Nuxt 4 pliki `content` (jak komponenty, strony, layouty) są zazwyczaj automatycznie 
      // skanowane przez moduł, więc ta sekcja nie jest bezwzględnie konieczna 
      // dla domyślnych ścieżek, ale zostawiamy ją dla niestandardowych elementów.
      content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}",
        "./app.vue",
        // Pamiętaj, że dla typowej instalacji Nuxt i Tailwind to jest domyślna konfiguracja
        // i możesz ją usunąć, jeśli nie dodajesz innych, niestandardowych folderów.
      ],

      theme: {
        extend: {
          boxShadow: {
            // Zauważ, że usuwamy `satisfies Config` i `module.exports`, 
            // ponieważ jesteśmy w pliku konfiguracyjnym Nuxt.
            zoop: "rgba(102, 109, 128, 0.08) 0px 1.2672px 1.2672px 0px, rgba(102, 109, 128, 0.08) 0px 5.06879px 10.1376px 0px",
            zoopdark:
              "rgba(10, 10, 10, 0.2) 0px 1.2672px 1.2672px 0px, rgba(10, 10, 10, 0.2) 0px 5.06879px 10.1376px 0px",
          },
        },
        fontFamily: {
          // Tutaj nadpisujesz całą sekcję `sans` i `mono` w `theme`.
          sans: [
            "Inter",
            "Avenir Next",
            "Roboto",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Ubuntu",
            '"Helvetica Neue"',
            "Arial",
            '"Noto Sans"',
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"',
          ],
          mono: [
            "Cascadia Code",
            "ui-monospace",
            "SFMono-Regular",
            "Menlo",
            "Monaco",
            "Consolas",
            "Liberation Mono",
            "Courier New",
            "monospace",
          ],
        },
      },

    },
  }
});