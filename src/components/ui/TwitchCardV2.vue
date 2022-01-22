<template>
  <div
    class="twitch-card"
    :class="type">
    <div class="icon">
      <component
        :is="icon"
        class="alert-icon" />
    </div>
    <div class="content">
      <span class="content-text">
        {{ content || " - " }}
      </span>
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
  max-width: 360px;
  height: 60px;
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.92);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.95);
  border-radius: 10px;
  display: inline-flex;
  align-items: center;

  .icon {
    margin-right: 20px;
    height: 30px;
    width: 30px;
  }

  .content {
    color: $plainWhite;
    display: inline;

    .content-text {
      display: inline-block;
      font-size: 25px;
      font-family: "Arvo", sans-serif;
      font-weight: 400;
      max-width: 270px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }

  &.follow {
    .icon {
      color: $tomatoRed;
    }
  }

  &.sub {
    .icon {
      color: $sunYellow;
    }
  }
}
</style>