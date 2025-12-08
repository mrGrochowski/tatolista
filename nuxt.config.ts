
export default defineNuxtConfig({
  build: {
    // Wymuszenie transpilacji modułu 'extend'
    transpile: ['extend'],
  },
  compatibilityDate: '2025-07-15',
  modules: [
    '@nuxt/content',
    'nuxt-studio',
    '@nuxt/icon',
  ],
  studio: {
    route: '/admin',
    // Git repository configuration (owner and repo are required)
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'mrGrochowski', // your GitHub/GitLab username or organization
      repo: 'mrGrochowski/tatolista', // your repository name
      branch: 'main', // the branch to commit to (default: 'main')
    }
  },
 /*  content: {
    preview: {
      // Upewnij się, że to jest poprawne lub, że tego w ogóle nie ma, jeśli 
      // nie jest wymagane do uruchomienia Studio
      api: 'https://api.nuxt.studio', // Jeśli to była próba obejścia błędu, spróbuj usunąć!
    }
  }, */
  /* nitro: {
    prerender: {
      // Pre-render the homepage
      routes: ['/'],
      // Then crawl all the links on the page
      crawlLinks: true
    }
  } */
})