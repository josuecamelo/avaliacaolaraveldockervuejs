<template>
  <div>
      <ul class="nav bg-dark">
        <li>
          <router-link :to="{name: 'admin.categories'}" class="nav-link">Categorias ({{totalCategories}})</router-link>
        </li>
      </ul>
      <div class="container">
        <router-view></router-view>
      </div>
  </div>
</template>
<script>
export default {
  computed: {
    totalCategories () {
      return this.$store.state.categories.items.data.length
    }
  }
}
</script>
<style>
</style>
