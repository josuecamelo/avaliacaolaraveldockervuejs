import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminComponent from '../components/admin/AdminComponent'
import CategoriesComponent from '../components/admin/pages/categories/CategoriesComponent'
import EditCategoryComponent from '../components/admin/pages/categories/EditCategoryComponent'
import CreateCategoryComponent from '../components/admin/pages/categories/CreateCategoryComponent'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: AdminComponent,
    children: [
      {path: '', component: CategoriesComponent, name: 'admin.categories'},
      {path: 'categories/create', component: CreateCategoryComponent, name: 'admin.categories.create'},
      {path: 'categories/:id/edit', component: EditCategoryComponent, name: 'admin.categories.edit', props: true}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
