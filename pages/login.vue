<template>
    <div>
        <button @click="login">Login with Gaidge</button>
    </div>
</template>
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    auth: "guest",
    methods: {
        async login() {
            await this.$auth.loginWith("gaidge");
        },
    },
});
</script>
