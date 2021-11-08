<template>
  <WindowAppIframe :window="props.window" />
</template>

<script setup>
import WindowAppIframe from "@owd-client/core/src/components/window/app/WindowAppIframe.vue";

const props = defineProps({
  window: Object
})
</script>
