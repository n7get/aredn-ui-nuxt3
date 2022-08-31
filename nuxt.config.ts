import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    transpile: ['vuetify'],
  },

  buildModules: ['@pinia/nuxt'],

  css: [
    'vuetify/lib/styles/main.sass',
    'mdi/css/materialdesignicons.min.css',
  ],

  meta: {
    titleTemplate: '%s - AREDN',
    title: 'Your Node',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  srcDir: 'src/',

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  typescript: {
    strict: true
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
