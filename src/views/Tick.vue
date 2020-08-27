<template>
  <div class="tick">
    <h1>Tick age</h1>
    <div v-for="(user , index) in users" v-bind:key="index">{{ user.name}}</div>
    <button v-on:click="pushUser">push user</button>
  </div>
</template>

<script>
export default {
  name: "tick",
  data() {
    return {
      users: [{ name: "yasunari" }, { name: "mori" }],
    };
  },
  methods: {
    pushUser() {
      this.users.push({ name: "testman" });
    },
  },
  mounted() {
    this.$nextTick(() => {
      console.log("tick func");
    });
  },
};
</script> 

<style>
.tick {
  width: 100%;
  height: 500px;
  border-bottom: 1px solid black;
}
</style>