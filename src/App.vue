<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="#" class="navbar-brand">Home</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <a href="/projects" class="nav-link">Projects</a>
        </li>
        <li class="nav-item">
          <a href="/notes" class="nav-link">Notes</a>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
