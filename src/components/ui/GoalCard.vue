<template>
  <div class="goal-card">
    <pin class="goal-icon" />
    <div class="goal">
      <span class="goal-text">
        {{ currentGoal.text }}
      </span>
      <span class="goal-count">
        {{ count }} / <strong class="total">{{ currentGoal.limit }}</strong>
      </span>
      <div
        class="goal-status"
        :style="{width: statusWidth}" />
    </div>
  </div>
</template>

<script>
export default { 
  name: "GoalCard",
  props: {
    count: {
      type: Number,
      default: 0
    },
    goals: {
      type: Object,
      required: true
    }
  },
  computed: {
    currentGoal() {
      return this.goals.find(goal => goal.limit > this.count)
    },
    statusWidth() {
      return `${this.count / this.currentGoal.limit * 100}%`
    }
  }
}
</script>

<style lang="scss" scoped>
.goal-card {
    position: relative;
    max-width: 400px;
    height: 70px;

    .goal {
      box-shadow: 0 0 10px rgba(0, 0, 0, .35);
      background-color: rgba(0,0,0, 0.8);
      border: 4px solid $plainWhite;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
      position: relative;
      overflow: hidden;

    .goal-status {
        transition: width ease 0.3s;
        height: 100%;
        left: 0px;
        top: 0px;
        background-color: rgba($riverBlue, 0.3);
        position: absolute;
    }

    .goal-text {
        z-index: 2;
        font-weight: 700;
        color: $plainWhite;
        font-size: 22px;
        line-height: 22px;
        margin-bottom: 5px;
    }

    .goal-count {
        z-index: 2;
        font-weight: 500;
        line-height: 22px;
        font-size: 20px;
        color: $sunYellow;

        .total {
          font-size: 22px;
        }
    }
    }


    .goal-icon {
      z-index: 2;
      position: absolute;
      top: -15px;
      left: -15px;
      transform: rotate(-20deg);
      height: 45px;
      width: 45px;
      filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, .8));
      animation: icon-move 6s linear infinite;
      color: $riverBlue;
      stroke: $plainWhite;
      stroke-width: 3;
      paint-order: stroke;
    }
}

@keyframes icon-move {
  0% {
    // height: 40px;
    // width: 40px;
    transform: rotate(-30deg);
  }

  50% {
    // height: 44px;
    // width: 44px;
    transform: rotate(-10deg);
  }
   100% {
    //  height: 40px;
    //  width: 40px;
     transform: rotate(-30deg);
   }
}
</style>