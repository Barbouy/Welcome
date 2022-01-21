<template>
  <div class="follower-goal">
    <GoalCardV2
      :count="data.totalFollowers"
      :goals="goals"
      type="follow" />
  </div>
</template>

<script>
import GoalCardV2 from "@/components/ui/GoalCardV2.vue"

export default {
  name: "FollowerGoal",
  components: { GoalCardV2 },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      goals: [
        {
          limit: 50,
          text: "L'affiliation !" 
        },
        {
          limit: 100,
          text: "Les néons canards 🦆"
        },
        {
          limit: 250,
          text: "Reportage sur les canards..."
        },
        {
          limit: 500,
          text: "Mise en place d'un planning 📅"
        },
        {
          limit: 1000,
          text: "Respect du planning ! 📅"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.follower-goal {}
</style>