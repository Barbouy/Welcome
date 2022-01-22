<template>
  <div class="twitch">
    <div
      v-if="$route.name == 'twitch'"
      class="links">
      <router-link
        :to="{name: 'last-follow'}">
        dernier follow
      </router-link>
      <router-link
        :to="{name: 'follower-goal'}">
        follower goal
      </router-link>
    </div>
    <router-view
      v-if="!isLoading"
      :data="twitchData" />
  </div>
</template>

<script>
import axios from "axios"


export default {
  name: "Twitch",
  data() {
    return {
      isLoading: false,
      twitchData: {
        lastFollower: null,
        userInformation: null
      }
    }
  },
  created() {
    this.login()
    document.title = "Twitch"
    setInterval(() => {
      this.getDatas()
    }, 5000)
  },
  methods: {
    // https://dev.twitch.tv/docs/api
    // https://dev.twitch.tv/docs/api/reference#get-followed-streams
    login() {
      this.isLoading = true
      axios.get("https://api.twitch.tv/helix/users", {
        headers: {
          "Client-ID": process.env.VUE_APP_ENV_TWITCH_CLIENT_ID,
          "Authorization": `Bearer ${process.env.VUE_APP_ENV_TWITCH_TOKEN}` 
        },
        params: { "login": "barbouyy" } 
      })
        .then(response => this.twitchData.userInformation = response.data.data[0])
        .catch(error => console.error(error))
        .finally(() => {
          this.follows() 
          // this.subs()
        })
    },
    getDatas() {
      this.follows()
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
        .then(response => {
          this.twitchData.lastFollower = response.data.data[0]
          this.twitchData.totalFollowers = response.data.total})
        .finally(() => {
          this.isLoading = false
        })
    },
    subs() {
      axios.get("https://api.twitch.tv/helix/subscriptions", {
        headers: { 
          "Client-ID": process.env.VUE_APP_ENV_TWITCH_CLIENT_ID,
          "Authorization": `Bearer ${process.env.VUE_APP_ENV_TWITCH_TOKEN}` 
        },
        params: { "broadcaster_id": process.env.VUE_APP_ENV_TWITCH_USER_ID } 
      })
        .then(response => this.twitchData.lastFollower = response.data.data[0])
        .finally(() => {
          this.isLoading = false
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.twitch {
  padding: 20px;

  .links {
    display: flex;
    gap: 10px;
  }

  .alert {
    max-width: 360px;
    height: 80px;
    background-color: rgba($plainBlack, 0.85);
    border-radius: 15px;
    display: inline-block;
    padding: 0 20px;
    position: relative;

    .alert-content {
      height: 100%;
      display: flex;
      align-items: center;
      color: $plainWhite;
      font-size: 30px;
      font-weight: 700;
      // letter-spacing: 25px;

      .alert-text {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }

    .alert-icon {
      position: absolute;
      top: -10px;
      left: -10px;
      transform: rotate(-20deg);
      color: $tomatoRed;
      height: 40px;
      width: 40px;
      filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, .4));
      animation: icon-move 4s linear infinite;
    }
  }
}

@keyframes icon-move {
  0% {
    height: 40px;
    width: 40px;
    transform: rotate(-20deg);
  }

  50% {
    height: 45.5px;
    width: 45.5px;
    transform: rotate(10deg);
  }
   100% {
     height: 40px;
     width: 40px;
     transform: rotate(-20deg);
   }
}
</style>