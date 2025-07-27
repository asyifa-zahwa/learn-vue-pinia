
<template>
  <div class="counter">
    <h1>Counter</h1>
    <h1>{{ counterStore.counter }}</h1>
    <button @click="counterStore.counter++">Increment</button>
    <button @click="counterStore.counter--">Decrement</button>
    <button @click="counterStore.reset()">Reset</button>
    <button @click="doubleIt">Double it</button>
  </div>
</template>
<script setup>
import { useCounterStore } from '../store' 



const counterStore = useCounterStore()
counterStore.$subscribe((mutation, state) => {
  console.log('State changed:', mutation, state);
});
counterStore.$onAction(({ name, args }) => {
  console.log(`Action ${name} called with args:`, args);
});
function doubleIt() {
  //counterStore.double();
  console.log('Counter doubled:', counterStore.double);
}

</script>
<style scoped>
.counter {
  text-align: center;
  margin-top: 20px;
}
</style>
