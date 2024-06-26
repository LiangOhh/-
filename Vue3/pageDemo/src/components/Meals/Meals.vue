<template>
    <div class="meals">
        <template v-if="props.meals.length">
            <Meal v-for="item in props.meals" :meal="item"></Meal>
        </template>
        <template v-else>
            <el-empty :image-size="200" description="没有该产品" />
        </template>
    </div>
</template>
<script setup>
import Meal from './Meal.vue'
const props = defineProps(['meals'])
console.log(props.meals);

</script>

<style scoped>
.meals {
    height: calc(100vh- 60);
    /* background-color: yellowgreen; */
    /* overflow: hidden; */
    padding-bottom: 4.7rem
}
</style>