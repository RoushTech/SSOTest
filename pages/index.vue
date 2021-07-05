<template>
    <iframe
        ref="frame"
        src="https://qaapp.gaidge.com"
        sandbox="allow-forms allow-same-origin allow-scripts allow-storage-access-by-user-activation"
        height="900"
    />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    data: () => {},
    computed: {},
});
</script>

<style>
iframe {
    width: 100%;
}
</style>
