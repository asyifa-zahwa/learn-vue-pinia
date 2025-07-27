import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'

import { createRouter, createWebHistory } from 'vue-router'
import Counter from './components/Counter.vue'
import MultipleCounter from './components/MultipleCounter.vue'
import TodoList from './components/TodoList.vue'
import AddTodo from './components/AddTodo.vue'
import UpdateTodo from './components/UpdateTodo.vue'
const pinia = createPinia()
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/counter',
        name: 'counter',
        component: MultipleCounter
    },
    {
      path: '/todoList',
      children: [
        {
          path: '',
          name: 'todo-list',
          component: TodoList
        },
        {
          path: 'add',
          name: 'add-todo',
          component: AddTodo
        },
        {
          path: 'edit/:id',
          name: 'EditTodo',
          component: UpdateTodo,
          props: true
        },
      ]
    }
]});


createApp(App).use(pinia).use(router).mount('#app')
