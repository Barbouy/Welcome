<template>
  <div class="welcome">
    <div class="header">
      <h1>Pierre-Alexandre</h1>
      <span>site en cours de création</span>
    </div>
    <div class="content">
      <span>En attendant son retour, découvre le projet des copains :</span>
      <a
        target="_blank"
        href="https://tronche-de-cake.fr/">https://tronche-de-cake.fr/</a>
    </div>
  </div>
</template>

<script>

export default {
  name: "Welcome",
  methods: {
    goTo(route) {
      this.$router.push({ name: route })
    }
  }
}
</script>

<style lang="scss" scoped>
.welcome {
    background: linear-gradient($plainBlack, darken($plainBlack, 10%));
    color: $plainWhite;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 50px;
    font-size: 16px;

    .header {
      padding-bottom: 20px;
      border-bottom: 1px solid rgba($sunYellow, 0.3);

      h1 {
        font-family: "Aleo", sans-serif;
      }
    }

    .header, .content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      a {
        color: $sunYellow;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
}
</style>