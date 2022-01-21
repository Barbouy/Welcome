<template>
  <TwitchCardV2
    type="follow"
    :content="data.lastFollower.from_name" />
</template>

<script>
import TwitchCardV2 from "@/components/ui/TwitchCardV2.vue"

export default {
  name: "LastFollower",
  components: { TwitchCardV2 },
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