// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineAppConfig } from 'nuxt/app'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  modules: [
    '@nuxt/icon',
    '@nuxt/content',
    'nuxt-studio'
  ],
  studio: {
    // Git repository configuration (owner and repo are required)
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'mrGrochowski', // your GitHub/GitLab username or organization
      repo: 'tatolista', // your repository name
      branch: 'main', // the branch to commit to (default: 'main')
    }
  }
})