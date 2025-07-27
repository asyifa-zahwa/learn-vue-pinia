<script setup>
import { ref } from 'vue';
import { useTodoList } from '../useTodoList';
const todoList = useTodoList();

</script>
<template>
    <div class="todo-list">
        <h2>Daftar Todo</h2>
        <router-link to="/todoList/add">Tambah Todo</router-link>
        <ul>
            <li v-for="todo in todoList.todoList" :key="todo.id">
                <span>{{ todo.id }}</span>
                <span :class="{ completed: todo.completed }">{{ todo.name }}</span>
                <router-link :to="{ name: 'EditTodo', params: { id: todo.id } }">Edit</router-link>
                <button @click="todoList.toggle(todo.id)">Toggle</button>
                <button @click="todoList.remove(todo.id)">Hapus</button>
            </li>
        </ul>
    </div>

</template>
<style scoped>
.todo-list {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
</style>