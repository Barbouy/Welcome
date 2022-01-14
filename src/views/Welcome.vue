<template>
    <div class="welcome">
        <MessageCard title="Bienvenue !" subtitle="Le site est en cours de construction..." />
    </div>
</template>

<script>
import MessageCard from "@/components/ui/MessageCard.vue"

export default {
    name: "Welcome",
    components: { MessageCard }
}
</script>

<style lang="scss" scoped>
.welcome {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>