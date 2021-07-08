<template>
    <div>
        <button @click="frame = !frame">Toggle Frame</button>
        <div v-if="!frame">Frame is hidden</div>
        <iframe
            v-else
            ref="frame"
            src="https://qaapp.gaidge.com"
            sandbox="allow-forms allow-same-origin allow-scripts allow-storage-access-by-user-activation"
            height="900"
        />
    </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    data: () => ({
        frame: false,
    }),
    computed: {},
});
</script>

<style>
iframe {
    width: 100%;
}
</style>
