<template>
  <div class="fav-wrapper">
    <h3>⭐ Favorite Films</h3>

    <ul v-if="favorites.length > 0" class="fav-list">
      <li v-for="(item, i) in favorites" :key="i" class="fav-item">
        <span>{{ item }}</span>
        <button class="remove" @click="removeFavorite(i)">Hapus</button>
      </li>
    </ul>

    <p v-else>Belum ada film favorit.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favorites: [],
    };
  },

  mounted() {
    this.loadFavorites();
  },

  methods: {
    loadFavorites() {
      this.favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    },

    removeFavorite(index) {
      this.favorites.splice(index, 1);
      localStorage.setItem("favorites", JSON.stringify(this.favorites));
    },
  },
};
</script>

<style scoped>
.fav-item {
  background: #fff8dc;
  padding: 10px;
  border-radius: 6px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

.remove {
  background: #ef4444;
  color: white;
  border: none;
  padding: 6px 12px;
}
</style>
