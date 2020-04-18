<template>
    <div>
        <h1>Editar Categoria</h1>
        <form-cat
            :category="category"
            :updating="true"
        ></form-cat>
    </div>
</template>

<script>
import FormCategoryComponent from './partials/FormCategoryComponent'
export default {
  props: {
    id: {
      required: true
    }
  },
  created () {
    this.loadCategory()
  },
  data () {
    return {
      category: {}
    }
  },
  methods: {
    loadCategory () {
      this.$store.dispatch('loadCategory', this.id)
        .then(response => {
          this.category = response
        })
        // eslint-disable-next-line handle-callback-err
        .catch(errors => {
          alert('Category não Encontrada')
          this.$router.push({name: 'admin.categories'})
        })
    }
  },
  components: {
    formCat: FormCategoryComponent
  }
}
</script>
<style scoped>
</style>
