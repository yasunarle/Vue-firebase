<template>
  <div class="shunta">
    <p>shunta</p>
    <p>{{ items }}</p>
    <button @click="test">items 持ってくる</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// import 'firebase/firestore'
import { db } from '@/main'
export default {
  name: 'shunta',
  components: {
    // HelloWorld
  },
  data(){
    return{      
      user:{
        name:"ゴンザレる",
        email:"test@gmail"
      },
      items:[]
    }
  },
  firestore(){
    return{
      items: db.collection('items')
    }
  },
  created(){    
    let params =  {
      name: this.user.name
    }     
    db.collection('items').add(params)        
  },
  computed: {

  },
  methods:{
    test: function(){
      db.collection('items').add(this.user)
    }
  }
}
</script>
<style>
  .shunta{
    width: 100%;
    height: 80vh;
    border: 3px solid black;
  }


</style>