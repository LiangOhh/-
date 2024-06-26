<script setup>
import Meals from './components/Meals/Meals.vue'
import MealsFilter from './components/MealsFilter/MealsFilter.vue'
import CartBar from './components/Cart/CartBar.vue'
import { useMealStore } from '@/store/meals';
const meals = useMealStore()
</script>

<template>
  <MealsFilter></MealsFilter>
  <Meals :meals="meals.filterMeals"></Meals>
  <CartBar></CartBar>
</template>

<style scoped></style>
