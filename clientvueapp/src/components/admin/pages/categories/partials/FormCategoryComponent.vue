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
          alert('Sucesso ao enviar!')
          this.$router.push({name: 'admin.categories'})
        })
        .catch(errors => {
          alert('Algo Errado: Não foi Possível Enviar o Registro')
          // this.errors = errors.data.errors
          console.log(errors)
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
