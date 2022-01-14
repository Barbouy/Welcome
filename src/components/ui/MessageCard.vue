<template>
  <div class="message-card">
        <span class="title">
            {{ title }}
        </span>
        <span class="subtitle">
            {{ subtitle }}
        </span>
  </div>
</template>

<script>
export default {
    name: "Error",
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            default: null
        }
    }
}
</script>

<style lang="scss" scoped>
.message-card {
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