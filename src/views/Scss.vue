<template>
  <div class="scss-container">
    <p>Scss testing</p>
    <p>To use scss</p>
    <p>npm install sass-loader node-sass --save</p>
  </div>
</template>

<script>

export default {

}
</script>

<style lang="scss">
  .scss-container{
    width: 100%;
    height: 100vh;
    background: grey;
    p{
      margin: 0;
      font-family: 'Courier New', Courier, monospace;
      font-size: 30px;
    }
  }
</style>