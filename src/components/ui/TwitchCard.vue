<template>
  <div class="twitch-card">
    <div class="alert">
      <component
        :is="icon"
        class="alert-icon"
        :class="type" />
      <div class="alert-content">
        <span class="alert-text">
          {{ content || " - " }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TwitchCard",
  props: {
    content: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: "heart"
    }
  },
  computed: {
    icon() {
      switch (this.type) {
        case "follow" :
          return "heart"
        case "sub" :
          return "duck"
        default:
          return "heart"      
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.twitch-card {
  .alert {
    max-width: 350px;
    height: 70px;
    background-color: rgba($plainBlack, 0.85);
    border-radius: 20px;
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
      top: -15px;
      left: -15px;
      transform: rotate(-20deg);
      height: 45px;
      width: 45px;
      filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, .4));
      animation: icon-move 6s linear infinite;

      &.follow {
        color: $tomatoRed;
      }

      &.sub {
        color: $sunYellow;
      }
    }
  }   
}

@keyframes icon-move {
  0% {
    // height: 40px;
    // width: 40px;
    transform: rotate(-20deg);
  }

  50% {
    // height: 44px;
    // width: 44px;
    transform: rotate(10deg);
  }
   100% {
    //  height: 40px;
    //  width: 40px;
     transform: rotate(-20deg);
   }
}
</style>