<template>
    <Mask>
        <div class="cart">
            <div class="header">
                <text>详情</text>
                <a href="javascript:;" @click="dialogVisible = true" v-show="meals.cartMeals.length > 0">
                    <i class="ri-delete-bin-line"></i>
                    清空购物车
                </a>
            </div>
            <Meals :meals="meals.cartMeals"></Meals>
            <div>
                <el-dialog v-model="dialogVisible" title="通知" width="300">
                    <span>确认清空购物车吗</span>
                    <template #footer>
                        <div class="dialog-footer">
                            <el-button @click="dialogVisible = false">取消</el-button>
                            <el-button type="primary" @click="clearCart">
                                确认
                            </el-button>
                        </div>
                    </template>
                </el-dialog>
            </div>
        </div>
    </Mask>
</template>

<script setup>
import Mask from './Mask.vue'
import Meals from '../Meals/Meals.vue';
import { useMealStore } from '@/store/meals';
import { ref } from 'vue';
const meals = useMealStore()
const dialogVisible = ref(false)
function clearCart(e) {
    console.log(e);
    meals.$reset()
    dialogVisible.value = false
}
</script>

<style lang="scss" scoped>
.cart {
    width: 100%;
    height: 50%;
    background-color: #fff;
    position: absolute;
    bottom: 4rem;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
    left: 0;
    overflow: auto;

    .header {
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
        position: fixed;
        width: 100%;
        background-color: #fff;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0.5rem 1rem 0 1rem;
        height: 5%;

        text {
            font-size: medium;
        }

        a {
            color: red;
            text-decoration: none
        }

        text {
            font-weight: bold;
        }
    }
}

.meals {
    height: auto;
    padding-top: 2rem;
}
</style>