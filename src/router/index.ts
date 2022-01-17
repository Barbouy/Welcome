import { 
  createRouter, createWebHistory , RouteRecordRaw
} from "vue-router"
import NotFound from "@/views/NotFound.vue"
import Twitch from "@/views/Twitch.vue"
import Welcome from "@/views/Welcome.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "welcome",
    component: Welcome,
    children: [
      {
        path: "twitch",
        name: "twitch",
        component: Twitch
      }
    ]
  },
  {
    path: "/:catchAll(.*)",
    name: "not-found",
    component: NotFound
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
