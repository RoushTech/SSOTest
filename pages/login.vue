<template>
    <div>
        <button @click="login">Login with Gaidge</button>
        <label v-if="!frame">
            Client Secret
            <input v-model="secret" />
        </label>
        <button :disabled="!secret" @click="toggleFrame">Toggle Frame</button>
        <iframe
            v-if="frame"
            :src="src"
            sandbox="allow-forms allow-same-origin allow-scripts allow-storage-access-by-user-activation"
            height="900"
        />
    </div>
</template>
<script lang="ts">
import { createHmac } from "crypto";
import Vue from "vue";
import type { Oauth2SchemeOptions, Scheme } from "@nuxtjs/auth-next";

export default Vue.extend({
    auth: "guest",
    data: () => ({
        secret: "",
        frame: false,
    }),
    computed: {
        src() {
            const hmac = createHmac("sha256", this.secret);
            const bid = "test";
            const ts = Date.now();
            // demo user
            const uid = "c9b4e17e-7743-4994-b86d-b358bbaf3522";

            const query = `bid=${bid}&ts=${ts}&uid=${uid}`;
            const signature = hmac.update(query).digest("base64");
            return `https://qaapp.gaidge.com/api/v1/mmg/login?${query}&signature=${signature}`;
        },
    },
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
        toggleFrame() {
            this.frame = !this.frame;
        },
    },
});
</script>
