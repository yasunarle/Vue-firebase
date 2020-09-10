<template>
  <div class="shun-container">
    <h1>Life Design</h1>
    <div class="life-design">
      <div class="life-design__content">
        <div class="age">1997</div>
        <h1>test</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Yasunari Tanka",
        description: "よろしくお願いします。",
        lifedesign: [],
      },
    };
  },
};
</script>

<style>
.shun-container .inner-width {
  max-width: 800px;
  margin: auto;
  padding-top: 100px;
}
.life-design {
  height: 600px;
  max-width: 900px;
  margin: auto;
  padding: 10px;
  background: grey;
  overflow: auto;
}
.life-design__content {
  width: 10000px;
  height: 100%;
  background-color: whitesmoke;
  color: black;
}
.age {
  background: yellow;
  color: black !important;
}
</style>