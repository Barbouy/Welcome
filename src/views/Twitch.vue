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
    return {
      clientId: "udfhbi5d9rhth40svup39y9okkli6t",
      clientSecret: "7m3xbl6vl68rga1bu9zmiy7ve9yn8z",
      token: "7h3rlr7c6x848p2yhty55w9ogps4cg",
      userId: "115308944"
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
          "Client-ID": this.clientId,
          "Authorization": `Bearer ${this.token}` 
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
          "Client-ID": this.clientId,
          "Authorization": `Bearer ${this.token}` 
        },
        params: {
          "to_id": this.userId,
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