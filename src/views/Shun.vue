<template>
  <div class="shun-container">
    <div class="inner-width">
      <p v-for="(item, index) in items" :key="index" class="p">
        {{ item.name }}
      </p>
      <input type="text" v-model="inputText" v-on:keyup.enter="sendStore" placeholder="Name">
    </div>    
  </div>
</template>

<script>
import { db } from '@/main'
export default {
  data(){
    return {
      inputText:"",
      items:{}
    }
  },
  firestore:{
    items: db.collection('items')
  },  
  methods:{
    sendStore(){
      db.collection('items').add({name: this.inputText})
      this.inputText = ""
    }
  }
}
</script>

<style>
.shun-container .inner-width{
  max-width: 800px;
  margin: auto;
  padding-top: 100px;
}
.shun-container .p{
  border-bottom:1px solid black; 
}  
</style>