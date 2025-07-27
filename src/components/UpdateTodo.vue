<script setup>
import { ref } from 'vue';
import { useTodoList } from '../useTodoList';
import { useRouter } from 'vue-router';
import { defineProps } from 'vue';

const todoList = useTodoList();
const {id } = defineProps(['id']);
const router = useRouter();

const name = ref(todoList.get(Number(id)).name);
function updateTodo() {
    console.log('ini nama:', name.value);
    if (name.value.trim() === '') {
        alert('Nama tidak boleh kosong');
        return;
    }
    todoList.update(Number(id), name.value);
    router.push('/todolist');
}
</script>
<template>
    <div class="update-todo">
        <h2>Update Todo</h2>
        <input v-model="name" type="text" placeholder="Masukkan nama todo" />
        <button @click="updateTodo">Update</button>
    </div>
</template>
<style scoped>
.update-todo {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>