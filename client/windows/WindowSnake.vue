<template>
  <WindowIframe :data="data" />
</template>

<script>
  import WindowIframe from "~/core/components/window/iframe/WindowIframe";
  export default {
    name: "WindowSnake",
    components: {WindowIframe},
    props: {
      data: Object
    }
  }
</script>
