import { BaseAxios } from '../../../config/configs'

export default {
  state: {
    items: {
      data: []
    }
  },
  mutations: {
    LOAD_CATEGORIES (state, categories) {
      state.items = categories
    }
  },
  actions: {
    loadCategories (context) {
      BaseAxios.get('/api/v1/categories')
        .then(response => {
          console.log(response)
          context.commit('LOAD_CATEGORIES', response)
        })
        .catch(errors => {
          console.log(errors)
        })
        // .finally(() => context.commit('PRELOADER', false))
    },

    loadCategory (context, id) {
      return new Promise((resolve, reject) => {
        BaseAxios.get(`/api/v1/categories/${id}`)
          .then(response => resolve(response.data))
          .catch(error => reject(error))
          // .finally(() => context.commit('PRELOADER', false))
      })
    },

    storeCategory (context, params) {
      return new Promise((resolve, reject) => {
        BaseAxios.post('/api/v1/categories', params)
          .then(response => resolve())
          .catch(error => reject(error))
          // .finally(() => context.commit('PRELOADER', false))
      })
    },

    updateCategory (context, params) {
      return new Promise((resolve, reject) => {
        BaseAxios.put(`/api/v1/categories/${params.id}`, params)
          .then(response => resolve())
          .catch(error => reject(error))
          // .finally(() => context.commit('PRELOADER', false))
      })
    },

    destroyCategory (context, id) {
      // context.commit('PRELOADER', true)

      return new Promise((resolve, reject) => {
        BaseAxios.delete(`/api/v1/categories/${id}`)
          .then(response => resolve())
          .catch(error => reject(error))
        // .finally(() => context.commit('PRELOADER', false))
      })
    }
  },
  getters: {}
}
