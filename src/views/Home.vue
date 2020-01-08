<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="" v-if = "user.uid">
      <h1>がっつり:{{ user.email }}:ログイン中</h1>  
      <!-- <p>{{ user }}</p> -->
      <div class="text_form">
        <!-- 入力フォーム -->
        <form action="" @submit.prevent="doSend" class="form">
          <p>identimal name: {{ identimal_name }}</p>
          <textarea
            v-model="identimal_name"
            :disabled="!user.uid"
            @keydown.enter.exact.prevent="doSend"></textarea>
            <div class="btn">
              <button type="submit" :disabled="!user.uid" class="send-button">Send</button>
            </div>
        </form>  
      </div>  
      <img :src="imageUrl" class = "test_image" height="150"/> 
      <!-- <p>{{selectedFile}}</p> -->
      <input type="file" @change = "onFileSelected" accept="image/*">  
      <button @click = "onUpload">upload to firebase</button>   
    </div>
    <div v-else>
      <h1>ログインしてない</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import firebase from 'firebase'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  data(){
    return{
      user: {},  // ユーザー情報
      identimal_name: '',  // 入力したメッセージ
      selectedFile: '',
      // image: '',
      imageName: 'identimal１号機',
      imageUrl: '',
      image: null,
      key: 'testzkoetnafoejraa',
      ext: ''
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(user => {
      this.user = user ? user : {}
    })
  },
  methods: {
    doSend() {
      if (this.user.uid && this.identimal_name.length) {
        // firebase にメッセージを追加
        firebase.database().ref('identimals').push({
          identimal_name: this.identimal_name,
          user_id: this.user.uid,
          image: "image_id"
          // test: "test",
        }, () => {
          this.identimal_name = '' // フォームを空にする
          alert("テキストをdatabaseに格納しました。")
        })
      }
    },
    onFileSelected(event){
      const files = event.target.files 

      console.log(files[0].name)     
      let filename = files[0].name;
      this.ext = filename.slice(filename.lastIndexOf('.'))
      console.log(this.ext)     
      if (filename.lastIndexOf('.') <= 0){
        return alert("Please add a valid file.")
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', function(){
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
      console.log(this.image)

    },
    onUpload(){
      if (!this.image){
        alert('画像を洗濯してね')
        return;
      }
      console.log("starts...")     
      var storageRef = firebase.storage().ref('images/' + this.key + this.ext );                  
      storageRef.put(this.image);
// image.URL should get downloadURL 
      console.log("Done...")            
    },
    createImage(file){
      console.log("reader start...")            
      var reader = new FileReader();
      reader.onload = function(event){
        this.imageUrl = event.target.result
      } 
      reader.readAsDataURL(file);
      console.log("...done")
    },
  }
}
</script>

