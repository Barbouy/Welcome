<template>
  <div class="twitch">
    <div class="alert">
      salut
    </div>
  </div>
</template>

<script>
import axios from "axios"


export default {
  name: "Twitch",
  data() {
    return {
      lastFollower: null,
      userInformation: null
    }
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
        .then(response => this.userInformation = response.data.data[0])
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
        .then(response => this.lastFollower = response.data.data[0])
    }
  }
}
</script>

<style lang="scss" scoped>
.twitch {
  padding: 5px;

  .alert {
    max-width: 350px;
    height: 80px;
    background-color: $plainBlack;
    border-radius: 15px;
  }
}
</style>