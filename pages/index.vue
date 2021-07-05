<template>
    <iframe
        ref="frame"
        src="https://qaapp.gaidge.com"
        scrolling="no"
        sandbox="allow-forms allow-same-origin allow-scripts allow-storage-access-by-user-activation"
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
    height: 100%;
}
</style>
