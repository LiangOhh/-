<template>
    <div>
        <button>
            <slot>这是默认插槽的默认内容</slot>
        </button>
        <h1>
            <slot name="myH1">这是默认H1内容</slot>
        </h1>
        <p>
            <slot name="myP1">这是默认p1内容</slot>
        </p>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>