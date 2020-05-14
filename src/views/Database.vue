<template>
  <div class="database">
    <p>Database testing</p>
    <button @click="test">test</button>

  </div>
</template>

<script>

export default {
  methods:{
    test(){
      console.log(this.$refs)
    }    
  }
}
</script>