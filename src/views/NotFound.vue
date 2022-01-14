<template>
    <div class="not-found">
        <MessageCard title="Aïe..." subtitle="Vous vous êtes peut être perdu ?" />
    </div>
</template>

<script>
import MessageCard from "@/components/ui/MessageCard.vue"

export default {
    name: "NotFound",
    components: {MessageCard}
}
</script>

<style lang="scss" scoped>
.not-found {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>