<template>
    <div>
        <form>
            <input type="text" @input="getTarget">
            <button @click.prevent="suBmit">确定</button>
        </form>
    </div>
</template>

<script setup>
function getTarget(event) {
    console.log(event.target.value);
}
function suBmit(event) {
    console.log(event.target);
}
</script>

<style scoped></style>