<template>
  <div class="hello">
    <h1>ようこそ: {{ name }}さん</h1>
  </div>
   <!-- <button @click="signOut">Sign out</button> -->
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'HelloWorld',
  created: function () {
    this.name = firebase.auth().currentUser.email

  },
  data(){
    return{
      name: null,
    }
  },
  methods: {
    signOut: function () {
      firebase.auth().signOut().then(() => {
        this.$router.push('/signin')
      })
    }    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
