<template>
    <div class="Filter">
        <div class="Search">
            <input class="Search_input" type="text" placeholder="你肚子饿吗?要不要吃烧烤?汉堡也行啊" @focus="blueSearch"
                @blur="normalSearch" v-model="info.keywords">
            <i id="search" class="ri-search-line"></i>
        </div>
    </div>
</template>

<script setup>
import { useMealStore } from '@/store/meals';
const info = useMealStore()
function blueSearch() {
    const search_icon = document.querySelector('#search')
    search_icon.classList.add('blue')
}
const normalSearch = () => {
    const search_icon = document.querySelector('#search')
    search_icon.classList.remove('blue')
}
</script>

<style lang="scss" scoped>
.blue {
    color: blue
}

.Filter {
    position: sticky;
    top: 0px;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    border-bottom: 2px solid rgb(195, 191, 191);
    background-color: #ffffff;

    .Search {
        position: relative;

        input {
            width: 300px;
            height: 25px;
            border-radius: 20px;
            border: none;
            outline: none;
            background-color: #e6e2e2;
            padding: 0 30px;
        }

        i {
            position: absolute;
            left: 5px;
            top: 5px;
        }
    }
}
</style>