<template>
  <div class="todo-wrapper">
    <h3>🎬 Films To Watch</h3>

    <form @submit.prevent="addNewTodo">
      <input 
        v-model="todo" 
        type="text" 
        placeholder="Tambahkan film yang ingin ditonton..."
      />
      <button :disabled="!todo" type="submit">Add</button>
    </form>

    <ul class="todo-list">
      <li v-for="item in pendingTodos" :key="item.id" class="todo-item">
        <span>{{ item.text }}</span>

        <div class="actions">
          <button class="done-btn" @click="toggleTodo(item.id)">Done</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { useTodos } from "@/stores/todos";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {
      todo: "",
    };
  },

  computed: {
    ...mapState(useTodos, ["pendingTodos"]),
  },

  methods: {
    ...mapActions(useTodos, ["addTodo", "toggleTodo"]),

    addNewTodo() {
      this.addTodo(this.todo);
      this.todo = "";
    },
  },
};
</script>

<style scoped>
.todo-wrapper {
  max-width: 500px;
  margin: auto;
}

form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

input {
  flex: 1;
  padding: 10px;
  border-radius: 6px;
  border: 1px solid #bbb;
}

button {
  padding: 10px 15px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}

.todo-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  background: #f7f7f7;
  padding: 10px;
  border-radius: 6px;
}

.done-btn {
  background: #4ade80;
}
</style>
