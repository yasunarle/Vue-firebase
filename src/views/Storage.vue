<template>
  <div>
     <input type="file" ref="file" @change="setImage" accept="image/*"/>
     <img :src="image"> 
     <button @click="send">send</button>    
  </div>
</template>
<script>
import firebase from 'firebase'
export default {
  data() {
    return {      
      image: "",
      name: "",      
      imageUrl:"",
      src:""      
    };
  },
  methods: {
    setImage() {
      const files = this.$refs.file;
      const fileImg = files.files[0];            
      this.image = window.URL.createObjectURL(fileImg)
      this.name = fileImg.name          
      console.log(this.image)      
    },
    send(){      
      // let storageRef = firebase.storage().ref('images/' + this.image)
      // storageRef.put(this.image)  
      firebase.storage().ref().child('images/teste.jpg').put(this.image)
    }
  }
};
</script>