/* eslint-disable sort-imports */

import App from "./App.vue"
import { createApp } from "vue"
import router from "./router"
import store from "./store"
import axios from "axios"

const app = createApp(App)

app.config.globalProperties.$axios = axios

import "@/styles/main.scss"
import icons from "@/plugins/material-icons"

app.use(icons)
app.use(store)
app.use(router)

app.mount("#app")

