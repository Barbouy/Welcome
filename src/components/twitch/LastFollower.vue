<template>
  <TwitchCard
    type="follow"
    :content="data.lastFollower.from_name" />
</template>

<script>
import TwitchCard from "@/components/ui/TwitchCard.vue"

export default {
  name: "LastFollower",
  components: { TwitchCard },
  props: {
    data: {
      type: Object,
      default: null
    }
  } 
}
</script>

<style lang="scss" scoped>

</style>