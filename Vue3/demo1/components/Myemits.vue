<template>
    <div>
        <button @click="$emit('send_one', str1)">发送1</button>
        <button @click="$event => emits('send_two', str2)">发送2</button>
        {{ str }}
    </div>
</template>
<script setup>
import { inject, ref } from 'vue'
const str = inject('provide_str')
const str1 = ref('这是不推荐写法')
const str2 = ref('这是推荐写法')
console.log(str);
const emits = defineEmits(['send_two'])
</script>
<style scoped></style>