<script >

import { useRoute } from 'vue-router'; 


const route = useRoute();

 export default {
  data() {
    return {
      
      route: route,
      content: '',
      postits:[],
    }
  },

  
  

  methods: {
delete_postit(){

this.postits = JSON.parse(localStorage.getItem("postits") || "[]")
console.log(this.postits)
this.postits.splice(this.$route.params.postit, 1);
console.log(this.postits)
localStorage.setItem('postits', JSON.stringify(this.postits))
window.location.href = "/"
alert("Post-it Supprimé")
  }
}
}
</script>

<template>
 <h1>Post-it N° {{ $route.params.postit}}</h1>

<div class="post">
 
<div class="postit">
 <button @click="delete_postit" title="Bon à effacer?">X</button>
  <h2> {{ $route.params.title}}</h2>
  <h3> {{$route.params.content}}</h3>





</div>



</div>
<router-link :to="`/`" title="Retour à la page principale">Retour </router-link>
</template>
<style scoped>
h1{
  font-weight: bold;
  text-transform : capitalize;
  text-decoration: underline;
}

h2 {
  font-size: 35px;
  font-weight: bold;
  
}

h3{
  font-size: 25px;
}
*{
  line-height: 3em;
  width: 400px;
  text-align: center;
}
button{
  border: 1px solid black;
  width: 30px;
  /* padding-left: 1px; */
  display: flex;
}


.post{
border: 3px solid black;
  box-shadow: 6px 6px 5px black;
  font-family:sans-serif;
  color: #8B4513; 
  background-color: #b6b3b0;
text-align: center;
height: 100%;

font-family:sans-serif;
}

</style>

