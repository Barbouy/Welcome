/* eslint-disable sort-imports */

import App from "./App.vue"
import { createApp } from "vue"
import router from "./router"
import store from "./store"
import axios from "axios"

const app = createApp({})

app.config.globalProperties.$axios = axios

import "@/styles/main.scss"
import "@/plugins/material-icons"


createApp(App).use(store).use(router).mount("#app")
