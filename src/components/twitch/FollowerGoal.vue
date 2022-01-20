<template>
  <div class="follower-goal">
    <GoalCard
      :count="data.totalFollowers"
      :goals="goals" />
  </div>
</template>

<script>
import GoalCard from "@/components/ui/GoalCard.vue"

export default {
  name: "FollowerGoal",
  components: { GoalCard },
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