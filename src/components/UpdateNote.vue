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
created() {console.log(this.$route.params)},
  methods: {

    

    update_postit(){
this.postits = JSON.parse(localStorage.getItem("postits") || "[]");
console.log(this.postits);
this.postits[this.$route.params.note] = {title: this.$route.params.title, content: this.$route.params.content}
console.log(this.postits);
localStorage.setItem("postits", JSON.stringify(this.postits))
 window.location.href = "/"
 alert("Post-it Modifié")

   
   }
  },
}


</script>
<template>
<div :style="{'background-image':'url(https://images.unsplash.com/photo-1553044014-a729eac4af74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)'}"> 


<div id="title">  <h1>Update :</h1></div>
<div class="postit">
    
    <div><h2>Post-it N° {{ $route.params.postit}}</h2></div>
    <label>Title :</label>
    <br>
    
    <input v-model ="$route.params.title"/>
    <br>
    <label>Content :</label>
    <br>
    <input v-model="$route.params.content"/> <br>

<button @click ="update_postit">Update</button>

</div>
</div>
<router-link :to="`/`">Retour </router-link>
</template>
<style scoped>
*{
line-height: 3em;
  width: 400px;
  text-align: center;
    font-weight: bold;
    color: black; 

}
h1{
  font-weight: bold;
  text-transform : capitalize;
  text-decoration: underline;
  font-size: 35px;
  
}
input{
  background-color: #b6b3b0;
  font-style: italic;
  font-weight: normal;
}
label{
  font-size: 20px;
}
h2{
  font-size: 25px;
}
.title{
  border: 1px solid black;
}



</style>
