<template>
  <div class="signup">
    <h2>Sign up</h2>
    <input type="text" placeholder="Username" v-model="username">
    <input type="text" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <input type="password" placeholder="Password Confirmation" v-model="password_confirmation">
    <button @click="signUp">アカウント登録</button>
    <p>Do you have an account? 
      <router-link to="/signin">sign in now!!</router-link>
    </p>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'Signup',
  data () {
    return {
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      user: {}
    }
  },
  methods: {
    signUp: function () {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
        .then(usercredential => {
          // console.log(usercredential.user.uid)          
          alert("Created email: " + usercredential.user.email)          
          
          firebase.database().ref('users').push({
            name: this.username,
            // email: this.email,
            user_id: usercredential.user.uid,
          })
          // alert('Create account!!! ', user.email)
          this.$router.push('/')
        })
        .catch(error => {
          alert(error.message)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signup {
  margin-top: 20px;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}
</style>