export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'Thavarshan | Personal Website',

        htmlAttrs: {
            lang: 'en',
        },

        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'Thavarshan',
                name: 'Thavarshan | Personal Website',
                content: 'Thavarshan | Personal Website',
            },
        ],

        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
        '@nuxtjs/moment',
        '@nuxtjs/google-analytics',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: ['@nuxtjs/axios'],

    axios: {
        baseURL: 'http://localhost:3000',
        credentials: true,
    },

    googleAnalytics: {
        id: process.env.GOOGLE_ANALYTICS_ID,
    },

    publicRuntimeConfig: {
        axios: {
            credentials: true,
            browserBaseURL: process.env.BROWSER_BASE_URL,
            headers: {
                common: {
                    'Access-Control-Allow-Origin': '*',
                    Authorization: `token ${process.env.GITHUB_API_KEY}`,
                },
            },
        },

        googleAnalytics: {
            id: process.env.GOOGLE_ANALYTICS_ID,
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
};
