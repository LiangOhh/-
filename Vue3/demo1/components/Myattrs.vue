<template>
    <div>
        <h1>这是我的透传</h1>

    </div>
    <!-- <div :style="$attrs.style">
        {{ $attrs }}
        <h2>这是我的多根</h2>
    </div> -->
</template>

<script setup>
import { useAttrs } from 'vue';

const attrs = useAttrs()
console.log(attrs);
</script>
<script>
// 关闭自动透传
export default {
    inheritAttrs: false
}
</script>
<style scoped>
/* * {
    color: blue;
} */
</style>