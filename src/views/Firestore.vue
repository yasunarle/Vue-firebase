<template>
  <div class="firestore">
    <p>firestore</p>
    <p>category: {{ category.cat }}</p>    
    <!-- <p>{{ user }}</p> -->
    <p>goodinfo: {{ goodinfo }}</p>
    <p>shunta: {{ shunta }}</p>
    <div>
      <button class="good-btn" v-bind:class="{ gooded: gooded }" @click="goodbtn">
        いいね
      </button>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
// import 'firebase/firestore'
import { db } from '@/main' 
export default {
  name: 'firestore',
  components: {
    // HelloWorld
  },
  data(){
    return{
      user:{},
      items:[],
      category:[],
      item: "",
      test: {
        email: "not@gmail.com",        
      },
      goodinfo: {},    
      shunta:{}  
    }    
  },
  firestore(){
    return{
      // items: db.collection('items')
      items: db.collection('items').where('category', '==', 'animal'),
      item: db.collection('items').where('item', '==', 'yasunari'),
      category: db.collection('categorys').doc('animal'),
      // goodinfo: db.collection('categorys').where('cat', 'array-contains', this.test.email)
    }    
  },
  created(){
    this.user = firebase.auth().currentUser
    // db.collection('categorys').where('cat.なんちゃらでもしたの階層に行ける', '==', )
    // this.goodinfo = db.collection('categorys').where('cat', 'array-contains', 'test@gmail.com')
    //   .get().then( (re) =>{        
    //     console.log(re)
    //   })
    // let test = {
    //   name: "testman"
    // }
    // db.collection('items').add(test);
  },
  computed: {    
    gooded: function(){
      return this.isgooded()
    },
  },
  methods: {
    goodbtn: function(){            
      if(this.islogin()){
          if (this.isgooded()){
            console.log("いいね済")
            db.collection("categorys").doc("animal").update({
            cat: firebase.firestore.FieldValue.arrayRemove(this.test.email)
          })
        } else{
            db.collection("categorys").doc("animal").update({
            title:"犬か猫か", 
            cat: firebase.firestore.FieldValue.arrayUnion(this.test.email)
          })
        }  
      }          
    },
    isgooded: function(){
      return this.category.cat.includes(this.test.email)                                
    },
    islogin: function(){
       if(this.test == null){
         return alert("ログインしてください")
       }else{
         return true
       }
    },
  }
}
</script>
<style>
  .firestore{
    width: 100%;
    height: 80vh;
    border: 3px solid black;
  }
  .good-button{
    cursor: pointer;
    background: red;
  }
  .gooded{
    background: grey;
  }
</style>