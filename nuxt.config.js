export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: "static",

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "ssotest",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        "@nuxt/typescript-build",
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        "@nuxtjs/axios",
        "@nuxtjs/auth-next",
    ],

    /** @type {import('@nuxtjs/auth-next').ModuleOptions} */
    auth: {
        redirect: {
            // this should force the oauth callback to not automatically fire
            callback: "none",
        },
        strategies: {
            /** @type {import('@nuxtjs/auth-next').Oauth2SchemeOptions} */
            gaidge: {
                scheme: "oauth2",
                endpoints: {
                    authorization:
                        "https://sandboxapp.gaidge.com/api/v1/connect/authorize",

                    token: "https://sandboxapp.gaidge.com/api/v1/connect/token",
                    userInfo:
                        "https://sandboxapp.gaidge.com/api/v1/connect/userinfo",
                },
                token: {
                    maxAge: 3600,
                },
                refreshToken: {
                    maxAge: 60 * 60 * 24,
                },
                responseType: "code",
                grantType: "authorization_code",
                accessType: "offline",
                codeChallengeMethod: "S256",
                clientId: "640E323B130B685EF7D15B6D8E68C98D",
                redirectUri: "https://roushtech.github.io/SSOTest/login",
                scope: ["openid", "email", "profile", "offline_access"],
            },
        },
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    /** @type {import("@nuxt/types/config/router").NuxtOptionsRouter} */
    router: {
        base: "/SSOTest/",
        middleware: ["auth"],
    },
};
