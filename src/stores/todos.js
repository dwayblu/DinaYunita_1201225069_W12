import { defineStore } from "pinia";

export const useTodos = defineStore("todos", {
  state: () => ({
    todos: [],
  }),

  getters: {
    pendingTodos(state) {
      return state.todos.filter((todo) => !todo.completed);
    },

    // 🚀 TAMBAHKAN INI
    completedTodos(state) {
      return state.todos.filter((todo) => todo.completed);
    }
  },

  actions: {
    addTodo(text) {
      this.todos.push({
        id: Date.now(),
        text,
        completed: false,
      });
    },

    toggleTodo(id) {
      const todo = this.todos.find((t) => t.id === id);
      if (todo) todo.completed = !todo.completed;
    },

    destroyTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    }
  },
});
