<script setup>
import { ref } from 'vue';
import { useTodoList } from '../useTodoList';
import { useRouter } from 'vue-router';

const nama = ref('');
const todoList = useTodoList();
const router = useRouter();
function addTodo() {
    if (nama.value.trim() === '') {
        alert('Nama tidak boleh kosong');
        return;
    }
    todoList.add(nama.value);
    nama.value = '';
    router.push('/todolist');
}
</script>
<template>
    <div class="add-todo">
        <h2>Tambah Todo</h2>
        <input v-model="nama" type="text" placeholder="Masukkan nama todo" />
        <button @click="addTodo">Tambah</button>
    </div>
</template>
<style scoped>
.add-todo {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>