<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/database">DB</router-link> |
      <div v-if = "user.uid" class = "login">
        <button type="button" @click="doLogout">ログアウト</button>
      </div>
      <div v-else class = "not_log_in">
        <router-link to="/signin">Login</router-link> |
        <router-link to="/signup">Signup</router-link>
      </div>
    </div>
    <!-- Router -->
    <router-view/>
  </div>
</template>


<script>
// firebase モジュール
import firebase from 'firebase'
// import func from '../vue-temp/vue-editor-bridge';
// import axios from 'axios'
// import FileReader from 'filereader'

export default {
  data() {
    return {
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
    doLogout() {
      firebase.auth().signOut()
    },    
  }
} 
</script>  

<style>
body{
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  
  padding: 10px;
  background: #5c5f6e;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.not_log_in, .login{
  display: inline-block;
}
.text_form{
  border: 2px solid #42b983;
  width: 400px;
  height: 200px;
  margin: auto;
}

</style>

