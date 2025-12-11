<template>
  <div class="completed-wrapper">
    <h3>✔️ Completed Films</h3>

    <ul class="list">
      <li v-for="item in completedTodos" :key="item.id" class="item">
        <span>{{ item.text }}</span>

        <div class="actions">
          <button class="fav-btn" @click="addToFavorites(item.text)">⭐ Favorite</button>
          <button class="remove-btn" @click="destroyTodo(item.id)">Hapus</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { useTodos } from "@/stores/todos";
import { mapState, mapActions } from "pinia";

export default {
  computed: {
    ...mapState(useTodos, ["completedTodos"]),
  },

  methods: {
    ...mapActions(useTodos, ["destroyTodo"]),

    addToFavorites(movie) {
      let fav = JSON.parse(localStorage.getItem("favorites")) || [];

      if (!fav.includes(movie)) {
        fav.push(movie);
        localStorage.setItem("favorites", JSON.stringify(fav));
        alert("Ditambahkan ke Favorite ⭐");
      } else {
        alert("Film sudah ada di Favorite");
      }
    },
  },
};
</script>

<style scoped>
.item {
  display: flex;
  justify-content: space-between;
  background: #e8f5e9;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 10px;
}

.fav-btn {
  background: gold;
  border: none;
}

.remove-btn {
  background: #ef4444;
  border: none;
  color: white;
}
</style>
