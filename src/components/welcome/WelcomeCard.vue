<template>
    <div class="welcome-card">
        <span class="title">
            Bienvenue !
        </span>
        <span class="subtitle">
            Le site est en cours de construction...
        </span>
    </div>
</template>

<script>
export default { name: "WelcomeCard" }
</script>

<style lang="scss" scoped>
.welcome-card {
    display: inline-block;
    padding: 40px;
    background-color: rgba(0, 0, 0, 0.15);
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;

    .title {
        font-size: 48px;
        line-height: 48px;
    }

    .subtitle {
        font-size: 18px;
        line-height: 18px;
        font-weight: 300;
    }
}
</style>