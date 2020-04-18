<template>
  <div>
      <form class="form" @submit.prevent="onSubmit">
          <div :class="['form-group', {'has-error': errors.name }]">
              <div v-if="errors.name">
                  {{ errors.name[0] }}
              </div>
              <input type="text" v-model="category.name" class="form-control" placeholder="Nome da Categoria" />
          </div>
          <div class="form-control">
              <button type="submit" class="btn btn-dark">Salvar</button>
          </div>
      </form>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      require: false,
      type: Object | Array,
      default: () => {
        return {
          id: '',
          name: ''
        }
      }
    },
    updating: {
      require: false,
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      errors: {}
    }
  },
  methods: {
    onSubmit () {
      const action = this.updating ? 'updateCategory' : 'storeCategory'
      this.$store.dispatch(action, this.category)
        .then(() => {
          // this.$snotify.success('Sucesso ao Cadastrar')
          this.$router.push({name: 'admin.categories'})
        })
        .catch(errors => {
          // this.$snotify.error('Algo Errado', 'Erro')
          // this.errors = errors.data.errors
        })
    }
  }
}
</script>
<style scoped>
    .has-error{
        color: red;
    }
    .has-error input{
        border: 1px solid red;
    }
</style>
