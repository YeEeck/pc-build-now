import Vue from "vue"
import VueRouter from "vue-router"
import EditView from "../views/EditView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "edit",
    component: EditView,
  },
  {
    path: "/show",
    name: "show",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ShowView.vue"),
  },
]

const router = new VueRouter({
  routes,
})

export default router
