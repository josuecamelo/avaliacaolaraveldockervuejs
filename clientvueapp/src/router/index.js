import Vue from 'vue'
import VueRouter from 'vue-router'
import AdminComponent from '../components/admin/AdminComponent'

Vue.use(VueRouter)

const routes = [
  {
    path: '/admin',
    component: AdminComponent,
    children: [
      // {path: '', component: DashboardComponent, name: 'admin.dashboard'},
      // {path: 'categories', component: CategoriesComponent, name: 'admin.categories'},
      // {path: 'categories/create', component: AddCategoryComponent, name: 'admin.categories.create'},
      // {path: 'categories/:id/edit', component: EditCategoryComponent, name: 'admin.categories.edit', props: true},
      // {path: 'products', component: ProductsComponent, name: 'admin.products'}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
