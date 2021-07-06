<template>
    <div>
        <button @click="login">Login with Gaidge</button>
    </div>
</template>
<script lang="ts">
import Vue from "vue";
import type { Oauth2SchemeOptions, Scheme } from "@nuxtjs/auth-next";

export default Vue.extend({
    auth: "guest",
    async mounted() {
        const strategy = this.$auth.strategy as Scheme<Oauth2SchemeOptions>;
        const query = this.$auth.ctx.query;

        if (!query.code) {
            return;
        }

        const params = new URLSearchParams();
        params.append("code", query.code as string);
        params.append("client_id", strategy.options.clientId as string);
        // this is just a test app so it's fine I swear
        params.append(
            "client_secret",
            "u0TV9N/LsjwBz1vQ/DrZ+8ofZ9DY/YmYCR/yCFEdZlTc68hi3/8JrBboYRozQVzb"
        );
        params.append("redirect_uri", strategy.options.redirectUri);
        params.append("grant_type", strategy.options.grantType);

        const codeVerifier = this.$auth.$storage.getUniversal(
            strategy.name + ".pkce_code_verifier"
        ) as string;
        this.$auth.$storage.setUniversal(
            strategy.name + ".pkce_code_verifier",
            null
        );

        params.append("code_verifier", codeVerifier);

        const result = await this.$axios.$post(
            strategy.options.endpoints.token,
            params,
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }
        );

        await this.$auth.setUserToken(
            result.access_token,
            result.refresh_token
        );
        this.$auth.redirect("home", true);
    },
    methods: {
        async login() {
            await this.$auth.loginWith("gaidge");
        },
    },
});
</script>
