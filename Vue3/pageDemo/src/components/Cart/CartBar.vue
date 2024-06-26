<template>
    <!-- <Mask :showMask="showMask" @hide="showMask = !showMask"></Mask> -->
    <Cart :showMask="showMask" @hide="showMask = !showMask"></Cart>
    <div class="CartBar">
        <div class="cartPic">
            <img src="/src/assets/bag.png" alt="">
            <template v-if="meals.totalCount > 0">
                <span class="total_num">{{ meals.totalCount }}</span>
            </template>
            <button class="payBtn">去结算</button>
        </div>
        <div class="total_price">
            <template v-if="meals.totalPrice == 0">
                <p class="no_item">
                    未添加主食
                </p>
            </template>
            <template v-else>
                <p class="have_item" @click="showMask = !showMask">
                    $&nbsp;{{ meals.totalPrice }}
                </p>
            </template>

        </div>

    </div>
</template>

<script setup>
import { useMealStore } from '@/store/meals';
import Mask from './Mask.vue'
import Cart from './Cart.vue'

import { ref } from 'vue';
const meals = useMealStore()
const showMask = ref(false)
</script>

<style lang="scss" scoped>
.CartBar {
    background-color: #3a3a3a;
    height: 4rem;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0.7rem;
    margin: 0 auto;
    width: 90%;
    border-radius: 50px;

    .cartPic {
        position: relative;

        img {
            position: absolute;
            width: 3.6rem;
            left: 0;
            bottom: -4.3rem
        }

        .total_num {
            position: absolute;
            border-radius: 50%;
            width: 1.5rem;
            color: #fff;
            background: red;
            left: 3rem;
            top: -0.5rem;
            display: flex;
            justify-content: center
        }

        .payBtn {
            position: absolute;
            right: 0;
            height: 4rem;
            width: 30%;
            border-radius: 50px;
            background-color: #f6c637;
        }
    }

    .total_price {
        display: flex;
        justify-content: center;
        line-height: 4rem;
        color: #fff;
        font-size: 1.2rem;
        font-weight: bold;


    }
}
</style>