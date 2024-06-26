<template>
    <div class="btnGroup">
        <template v-if="props.meal.count > 0">
            <button class="btn1" @click="meals.subCart(props.meal)"><i class="ri-subtract-line"></i></button>
            <text>{{ props.meal.count }}</text>
        </template>
        <button class="btn2" @click="meals.addCart(props.meal)"><i class="ri-add-line"></i></button>
    </div>
</template>

<script setup>
import { useMealStore } from '@/store/meals';
import { ref } from 'vue'
const meals = useMealStore()
const props = defineProps(['meal'])
const num = ref(0)
</script>

<style lang="scss" scoped>
.btnGroup {
    padding-right: 16px;

    text {
        padding: 0 8px;
    }

    .btn2 {
        background-color: yellow;
        border-radius: 50%;
        font-size: 18px;
        border: none;
        align-items: center;
    }

    .btn1 {
        background-color: rgb(190, 190, 186);
        border-radius: 50%;
        font-size: 18px;
        border: none;
    }
}
</style>