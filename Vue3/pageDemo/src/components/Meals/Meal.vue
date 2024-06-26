<template>
    <div class="meal">
        <div class="pic">
            <img :src="props.meal.img" alt="图片">
        </div>
        <div class="info">
            <div>
                <h3>{{ props.meal.title }}</h3>
                <p>{{ props.meal.desc }}</p>
            </div>

            <div class="price">

                <span>{{ props.meal.price }}</span>
                <Counter :meal="props.meal"></Counter>
            </div>

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Counter from './Counter.vue'
const props = defineProps(['meal'])

</script>

<style lang="scss" scoped>
.meal {
    display: flex;
    height: 10rem;
    // align-items: center;
    border-bottom: 2px solid rgb(195, 191, 191);
    overflow: hidden;

    .pic {
        img {
            width: 7rem;
            align-items: center;
            // vertical-align: middle
        }
    }

    .info {
        padding-top: 10px;

        p {
            padding-top: 5px;
            color: #6f6f6f;
            font-size: 15px
        }

        .price {
            margin-top: 10px;
            display: flex;
            justify-content: space-between;

            span {
                color: red;
                font-size: 20px;
            }

            span::before {
                content: '$';
            }
        }
    }
}
</style>