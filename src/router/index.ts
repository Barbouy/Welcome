import { 
  createRouter, createWebHistory , RouteRecordRaw
} from "vue-router"
import FollowerGoal from "@/components/twitch/FollowerGoal.vue"
import LastFollower from "@/components/twitch/LastFollower.vue"
import NotFound from "@/views/NotFound.vue"
import Twitch from "@/views/Twitch.vue"
import Welcome from "@/views/Welcome.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "welcome",
    component: Welcome,
  },
  {
    path: "/twitch",
    name: "twitch",
    component: Twitch,
    children: [
      {
        path: "last-follow",
        name: "last-follow",
        component: LastFollower,
      },
      {
        path: "follower-goal",
        name: "follower-goal",
        component: FollowerGoal
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
