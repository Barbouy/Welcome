<template>
  <div
    class="twitch-card"
    :class="type">
    <div
      class="content-status"
      :style="`width: ${statusWidth}`" />
    <div class="content">
      <transition
        name="go-away"
        mode="out-in">
        <span
          v-if="isCountVisibile"
          class="content-count">
          <strong>{{ count }}</strong> / {{ currentGoal.limit }}
          <component
            :is="icon"
            class="icon" />
        </span>
        <span
          v-else
          class="content-text">
          {{ currentGoal.text }}
        </span>
      </transition>
    </div>
  </div>
</template>

<script>
export default { 
  name: "GoalCardV2",
  props: {
    count: {
      type: Number,
      default: 0
    },
    goals: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      default: "follow"
    }
  },
  data() {
    return { 
      isCountVisibile: false,
      visibleTime: 8000 
    }
  },
  computed: {
    currentGoal() {
      return this.goals.find(goal => goal.limit > this.count)
    },
    statusWidth() {
      return `${this.count / this.currentGoal.limit * 100}%`
    },
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
  },
  created() {
    this.updateContent()
  },
  methods: {
    updateContent() {
      this.isCountVisibile = !this.isCountVisibile
      if (this.isCountVisibile) {
        this.visibleTime = 22000
        return this.startTimeout()
      }
      this.visibleTime = 8000
      return this.startTimeout()
    },
    startTimeout() {
      setTimeout(() => {
        this.updateContent()
      }, this.visibleTime)
    }
  }
}
</script>

<style lang="scss">
.twitch-card {
  width: 360px;
  height: 60px;
  padding: 0 20px;
  background-color: rgba(0, 0, 0, 0.92);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.95);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;


    .content-status {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        transition: width 0.3s ease-in-out;
    }

  .content {
    color: $plainWhite;
    display: inline;
    z-index: 10;
    line-height: 0;

    .content-text, .content-count {
      width: 100%;
      display: flex;
      justify-content: center;
      font-family: "Arvo", sans-serif;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    }

    .content-count {
        font-size: 22px;
        line-height: 30px;
        align-items: center;

        strong {
            font-size: 30px;
            margin-right: 5px;
        }

        .icon {
        margin-left: 10px;
        height: 30px;
        width: 30px;
        }
    }

    .content-text {
      font-size: 25px;
      line-height: 25px;
      font-family: "Arvo", sans-serif;
      font-weight: 400;
    }
  }

  &.follow {
    .content-status {
        background-color: rgba($grassGreen, 0.4);
    }
  }

  &.sub {
    .content-status {
        background-color: rgba($riverBlue, 0.8);
    }
  }

.go-away-enter-active {
  transition: top 0.4s, opacity 0.4s !important;
}

.go-away-leave-active {
  transition: top 0.2s, opacity 0.2s !important;
}

.go-away-enter-from {
    top: -50% !important;
    opacity: 0% !important;
}
.go-away-enter-to {
    top: 50% !important;
    opacity: 100% !important;
}

.go-away-leave-from {
    top: 50% !important;
    opacity: 100% !important;
}

.go-away-leave-to {
    top: 150% !important;
    opacity: 0% !important;
}
}

</style>