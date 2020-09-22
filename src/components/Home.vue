<template>
  <div class="projects">
    
<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header">auto deploy to github pages</div>
  <div class="card-body">
    <h5 class="card-title">vue based gh page</h5>
    <p class="card-text">
        <a href="https://dev.to/rolanddoda/deploy-to-github-pages-like-a-pro-with-github-actions-4hdg">
        https://dev.to/rolanddoda/deploy-to-github-pages-like-a-pro-with-github-actions-4hdg
        </a>
    </p>
  </div>
</div>
<div class="card bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">Vue typescript</div>
  <div class="card-body">
    <h5 class="card-title">CRUD tutorial</h5>
    <p class="card-text">
        <a href="https://bezkoder.com/vue-typescript-crud/">
        https://bezkoder.com/vue-typescript-crud/
        </a>
    </p>
  </div>
</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
