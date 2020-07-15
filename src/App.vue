<template>
  <v-app>
    <Navbar />
      <nav>
        <v-app-bar class="backbar" inverted-scroll app height="100px"></v-app-bar>
      </nav>
    <v-content class="success">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/NavBar'
export default {
  components:  {Navbar}
}
</script>
<style scoped>
.backbar{
   z-index: 1;
}
</style>
