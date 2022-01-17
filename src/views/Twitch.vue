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
    return { clientId: "udfhbi5d9rhth40svup39y9okkli6t" }
  },
  created() {
    this.login()
  },
  methods: {
    // https://dev.twitch.tv/docs/api
    login() {
      axios.get("https://api.twitch.tv/kraken/users/44322889", { headers: { "Client-ID": this.clientId } })
        .then(response => console.log(response))
        .catch(error => console.error(error))
    }
  }
}
</script>

<style>

</style>