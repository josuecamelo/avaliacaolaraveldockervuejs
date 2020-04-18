<template>
  <div>
    <h1>Listagem das Categorias</h1>

    <div class="row">
      <div class="col">
        <router-link :to="{name: 'admin.categories.create'}" class="btn btn-success">Cadastrar</router-link>
      </div>
    </div>

    <table class="table table-dark">
      <thead>
      <tr>
        <th>ID</th>
        <th>NOME</th>
        <th width="200">AÇÕES</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(category, index) in categories.data" :key="index">
        <td>{{ category.id }}</td>
        <td v-text="category.name"></td>
        <td>
          <router-link :to="{name: 'admin.categories.edit', params: {id: category.id}}" class="btn btn-info">
            Editar
          </router-link>

          <a href="#" class="btn btn-danger" @click.prevent="confirmDestroy(category)">
            Remover
          </a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  created () {
    this.loadCategories()
  },
  data () {
    return {
      name: ''
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories.items
    }
  },
  methods: {
    loadCategories () {
      this.$store.dispatch('loadCategories', {name: this.name})
    },

    confirmDestroy (category) {
      if (confirm(`Deseja realmente deletar a categoria: ${category.name}`)) {
        this.destroy(category)
      }
    },

    destroy (category) {
      this.$store.dispatch('destroyCategory', category.id)
        .then(() => {
          alert(`Sucesso ao deletar a categoria: ${category.name}`)
          this.loadCategories()
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          alert('Erro ao deletar a categoria')
        })
    }
  }
}
</script>
<style scoped>
</style>
