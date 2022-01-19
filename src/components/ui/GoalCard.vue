<template>
  <div class="goal-card">
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    max-width: 400px;
    height: 70px;
    background-color: rgba($plainBlack, 0.85);
    border-radius: 20px;
        overflow: hidden;

    .goal-status {
        transition: width ease 0.3s;
        height: 100%;
        left: 0px;
        top: 0px;
        background-color: rgba($sunYellow, 0.1);
        position: absolute;
    }

    .goal-text {
        z-index: 2;
        font-weight: 700;
        color: $plainWhite;
        font-size: 22px;
        line-height: 22px;
    }

    .goal-count {
        z-index: 2;
        font-weight: 500;
        color: $sunYellow;
        line-height: 20px;;

        .total {
            font-size: 20px;
        }
    }
}
</style>