<template>
  <div class="stripe">
    <p>Stripe page</p>
    <a @click="stripe" class="button--grey">Stripe</a>
  </div>
</template>

<script>
export default {
  name: "stripe",
  methods: {
    stripe() {
      console.log("test: stripe");
    },
  },
};
</script> 

<style>
.stripe {
  width: 100%;
  height: 500px;
  background: grey;
}
</style>