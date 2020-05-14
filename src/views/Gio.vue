<template>
  <div id="globeArea" style="width:800px;height:420px">
    <p>test</p>
  </div>
</template>

<script>
// import GIO from 'giojs'
export default {
  data(){
    return{

    }
  },
  mounted(){
    this.gioCreater()
  },
  methods:{
    gioCreater(){
      // const container = document.getElementById( "globalArea" )
      // const controller = new GIO.Controller( container )
      // controller.init();  
      console.log("test")           
    }
  }
}
</script>