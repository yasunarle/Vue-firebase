<template>
  <div class="database">
    <h1>This is a test page of Database</h1>
    <div class="" v-if = "user.uid">
      <h1>がっつり:{{ user.email }}:ログイン中</h1>      
    </div>
    <div v-else>
      <h1>ログインしてないぜ</h1>
    </div>
    <!-- 入力フォーム -->
    <!-- <form action="" @submit.prevent="doSend" class="form">
      <textarea
        v-model="input"
        :disabled="!user.uid"
        @keydown.enter.exact.prevent="doSend"></textarea>
      <button type="submit" :disabled="!user.uid" class="send-button">Send</button>
    </form>     -->


  </div>
</template>




<script>
// import firebase from 'firebase'
// import App_vue from '@/App.vue'

export default {
  // data(){
  //   return{
  //     user: {},
  //     input: '',
  //     message: [],

  //   }
  // },
  // created() {
  //   this.user = App_vue.user
  // },
  // methods: {
  //   doSend() {
  //     if (this.user.uid && this.input.length) {
  //       // firebase にメッセージを追加
  //       firebase.database().ref('message').push({
  //         message: this.input,
  //         name: this.user.displayName,
  //         image: this.user.photoURL
  //       }, () => {
  //         this.input = '' // フォームを空にする
  //       })
  //     }
  //   }
  // }  
}
</script>