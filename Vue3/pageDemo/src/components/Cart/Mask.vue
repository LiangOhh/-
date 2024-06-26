<template>
    <div class="mask" v-show="props.showMask" @click.self="$emit('hide')">
        <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps(['showMask'])
const emits = defineEmits(["hide"])
</script>
<style lang="scss" scoped>
.mask {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .3);

}
</style>