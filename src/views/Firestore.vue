<template>
  <div class="firestore">
    <p>firestore</p>
    <p>{{ items }}</p>
  </div>
</template>

<script>
// import firebase from 'firebase'
import 'firebase/firestore'
import { db } from '@/main' 
export default {
  name: 'firestore',
  components: {
    // HelloWorld
  },
  data(){
    return{
      items:[]
    }    
  },
  firestore(){
    return{
      items: db.collection('items')
    }    
  },
  created(){
    console.log(this.items)
    // let test = {
    //   name: "testman"
    // }
    // db.collection('items').add(test);
 
  }
}
</script>
<style>
  .firestore{
    width: 100%;
    height: 80vh;
    border: 3px solid black;
  }
</style>