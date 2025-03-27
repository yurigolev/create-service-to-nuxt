<template>
  <div>
    <button @click="getTodoList">get list</button>

    <ul v-if="statusTodoList === 'success'">
      <li v-for="todo in todoList" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
    <div v-if="statusTodoList === 'pending'">loading...</div>
    <div v-if="statusTodoList === 'error'">server is not rabotaet...</div>

    <div>
      <div>
        <input v-model="idTodo" type="number" placeholder="id todo">
        <button @click="getTodoById">search todo by id</button>
      </div>
      <div>
        {{ todoById }}
      </div>
      <div v-if="statusTodoById === 'pending'">
        loading todo by id...
      </div>
      <div v-if="statusTodoById === 'error'">server is not rabotaet...</div>
    </div>

  </div>
</template>

<script setup>

import {useServiceTodos} from "~/composables/useServiceTodos.js";
import {useAsyncData} from "#app";

const idTodo = ref(null)

const serviceTodo = useServiceTodos()

const {
  data: todoList,
  status: statusTodoList,
  execute: getTodoList
} = useAsyncData('todo-list', () => {
  return serviceTodo.getTodoList();
}, { immediate: false });

const {
  data: todoById,
  status: statusTodoById,
  execute: getTodoById,
} = useAsyncData(`todo-${idTodo.value}`, () => {
  return serviceTodo.getTodoById(idTodo.value)
}, { immediate: false });

// Функционал ниже в комментарии тоже самое что и выше, но без использования useAsyncData

// const isLoadingTodoById = ref(false)
// const todoById = ref(null)
// async function getTodoById() {
//   try {
//     isLoadingTodoById.value = true
//     if (idTodo.value === null) {
//       return
//     }
//     todoById.value = await serviceTodo.getTodoById(idTodo.value)
//   } finally {
//     isLoadingTodoById.value = false
//   }
// }

</script>
