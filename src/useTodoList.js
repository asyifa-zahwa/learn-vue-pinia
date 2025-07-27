import {defineStore} from 'pinia'
import { reactive } from 'vue'

let id = 0;


export const useTodoList = defineStore('todoList', () => {
    const todoList = reactive([]);

    function add(name) {
        todoList.push({
            id: id++,
            name: name,
            completed: false
        });
        
    }
    function get(id) {
        return todoList.find(todo => todo.id === id);
    }
    function getByName(name) {
        return todoList.filter(todo => todo.name === name);
    }
    function update(id, name) {
        const index = todoList.findIndex(todo => todo.id === id);
        if (index !== -1) {
            todoList[index].name = name;
        }
    }
    function toggle(index) {
        todoList.todos[index].completed = !todoList.todos[index].completed;
    }

    function remove(id) {
        const index = todoList.findIndex(todo => todo.id === id);
        if (index === -1) {
            return;
        }

        todoList.splice(index, 1);
    }

    return {
        todoList,
        add,
        get,
        getByName,
        update,
        toggle,
        remove
    };
});