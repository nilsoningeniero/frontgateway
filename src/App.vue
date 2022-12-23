<template>
  <div id="app">
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/usuario">Usuarios</router-link> |
        <router-link to="/marca">Marcas</router-link> |
        <router-link to="/modelo">Modelos</router-link> |
        <router-link to="/propietario">Propietarios</router-link> |
        <router-link to="/vehiculo">vehiculos</router-link> |
        <template v-if="$store.state.auth">
          <span>Usuario en sessión: {{ $store.state.usuario }}</span> | <button @click="logout()">Logout</button>
        </template>
        <template v-else>
          <router-link to="/login">Login</router-link> |
        </template>
    </nav>
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      return this.$router.replace("/login");
    }
  }
}
</script>

<style scoped>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
