<template>
  <div class="welcome">
    <MessageCard
      title="Bienvenue !"
      subtitle="Le site est en cours de construction..." />
    <icon-twitch
      class="icon twitch"
      @click="goTo('twitch')" />
    <router-view />
  </div>
</template>

<script>
import MessageCard from "@/components/ui/MessageCard.vue"

export default {
  name: "Welcome",
  components: { MessageCard },
  methods: {
    goTo(route) {
      this.$router.push({ name: route })
    }
  }
}
</script>

<style lang="scss" scoped>
.welcome {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;

    .icon {
      height: 40px;
      width: 40px;
      cursor: pointer;

      .material-design-icon {
        height: 40px;
        width: 40px;
      }

      &.twitch {
        &:hover {
          color: #6441a5;
        }
      }
    }
}
</style>