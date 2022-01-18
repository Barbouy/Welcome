<template>
  <div class="twitch">
    <MessageCard
      title="Twitch"
      subtitle="Ici on twitch à fond." />
  </div>
</template>

<script>
import axios from "axios"
import MessageCard from "@/components/ui/MessageCard.vue"


export default {
  name: "Twitch",
  components: { MessageCard },
  data() {
  },
  created() {
    this.login()
  },
  methods: {
    // https://dev.twitch.tv/docs/api
    // https://dev.twitch.tv/docs/api/reference#get-followed-streams
    login() {
      axios.get("https://api.twitch.tv/helix/users", {
        headers: {
          "Client-ID": process.env.VUE_APP_ENV_TWITCH_CLIENT_ID,
          "Authorization": `Bearer ${process.env.VUE_APP_ENV_TWITCH_TOKEN}` 
        },
        params: { "login": "barbouyy" } 
      })
        .then(response => console.log(response.data.data[0]))
        .catch(error => console.error(error))
        .finally(() => this.follows())
    },
    follows() {
      axios.get("https://api.twitch.tv/helix/users/follows", {
        headers: { 
          "Client-ID": process.env.VUE_APP_ENV_TWITCH_CLIENT_ID,
          "Authorization": `Bearer ${process.env.VUE_APP_ENV_TWITCH_TOKEN}` 
        },
        params: {
          "to_id": process.env.VUE_APP_ENV_TWITCH_USER_ID,
          "first": 5 
        } 
      })
        .then(response => console.log(response.data))
    }
  }
}
</script>

<style>

</style>