import { defineStore } from "pinia";
import { ref } from "vue";
import { computed } from "vue";

export const useCounterStore = defineStore("counter", () => {
    const counter = ref(0);

    function increment() {
        counter.value++;
    }
    function decrement() {
        counter.value--;
    }  
    function reset() {
        counter.value = 0;
    }
    const double = computed(() => {
        return counter.value * 2;
    });
    return{
        counter: counter,
        increment: increment,
        decrement: decrement,
        reset: reset,
        double: double
    }
});