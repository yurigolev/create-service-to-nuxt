<template>
  <div>
    <button @click="submit">submit fetch</button>

    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ todo.title }}
      </li>
    </ul>
  </div>
</template>

<script setup>

import {useServiceTodos} from "~/composables/useServiceTodos.js";

const serviceTodo = useServiceTodos()

const todos = ref([]);

async function submit() {
  todos.value = await serviceTodo.getTodoList();
}
</script>
