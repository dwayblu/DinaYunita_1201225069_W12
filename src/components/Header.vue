<template>
  <header class="navbar">
    <div class="logo">
      🎬 <span>My List Movies</span>
    </div>

    <nav class="nav-links">
      <router-link to="/todo" class="nav-btn" :class="{ active: isActive('/todo') }">
        To-Do
      </router-link>

      <router-link to="/completed" class="nav-btn" :class="{ active: isActive('/completed') }">
        Completed
      </router-link>

      <router-link to="/favorites" class="nav-btn" :class="{ active: isActive('/favorites') }">
        Favorites
      </router-link>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    isActive(path) {
      return this.$route.path === path;
    }
  }
}
</script>

<style scoped>
.navbar {
  background: #0f0f0f;
  padding: 18px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #222;
}

.logo span {
  font-size: 22px;
  font-weight: bold;
  color: white;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-btn {
  padding: 10px 16px;
  border-radius: 10px;
  background: #1b1b1b;
  color: #ddd;
  text-decoration: none;
  font-weight: 500;
  transition: 0.25s;
}

.nav-btn:hover {
  background: #2c2c2c;
}

.nav-btn.active {
  background: #4ade80; /* Hijau bagus */
  color: black;
  font-weight: 600;
  box-shadow: 0 0 12px #4ade80aa;
}
</style>
