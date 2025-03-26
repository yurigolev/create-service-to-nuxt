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

const { $api } = useNuxtApp();

const todos = ref([]);

async function submit() {
  todos.value = await $api.todos.getTodoList();
}
</script>
