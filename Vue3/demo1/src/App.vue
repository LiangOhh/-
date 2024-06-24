<script setup>
import Mybutton from '../components/Mybutton.vue';
import Myattrs from '../components/Myattrs.vue'
import Myinput from '../components/Myinput.vue'
import Myemits from '../components/Myemits.vue'
import { provide, ref } from 'vue';
const msg = "hello world";
const str = ref('')
const provide_str = ref('This is my provide_str')
provide('provide_str', provide_str.value)
function get_one(str_value) {
  console.log(str_value);
  str.value = str_value
  console.log(str.value);
}
function get_two(str_value) {
  str.value = str_value
}
</script>

<template>
  <div>
    {{ msg }}
  </div>
  <div>
    <!-- 父组件出入插槽 -->
    <Mybutton>
      这是默认插槽的指定内容
      <template v-slot:myH1>H1插槽指定内容(完整写法)</template>
      <template #myP1>p1插槽指定内容(简写)</template>
    </Mybutton>

  </div>
  <div>
    <Myattrs class="box1" style="color: red;"></Myattrs>
  </div>
  <div>
    <Myinput></Myinput>
  </div>
  <div>
    <Myemits @send_one="get_one" @send_two="get_two"></Myemits>
    {{ str }}
  </div>
</template>

<style scoped></style>
