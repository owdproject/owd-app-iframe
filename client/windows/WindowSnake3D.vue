<template>
  <WindowIframe :window="window" />
</template>

<script>
  import WindowIframe from "@owd-client/core/src/components/window/iframe/WindowIframe";

  export default {
    components: {WindowIframe},
    props: {
      window: Object
    }
  }
</script>
