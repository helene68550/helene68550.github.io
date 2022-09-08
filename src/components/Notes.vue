<script>

 export default {
  data() {
    return {
      
      title: '',
      content: '',
      postits:[],
      key:0
    }

  },
  methods: {
create_postit(){
console.log(this.title, this.content);
this.postits = JSON.parse(localStorage.getItem("postits") || "[]")
this.postits.unshift({title: this.title, content: this.content})
console.log(this.postits);
localStorage.setItem("postits", JSON.stringify(this.postits))
alert("Post-it crée")



},

    
},
beforeMount() {
  this.postits = JSON.parse(localStorage.getItem("postits") || "[]"); 
},
  

}

</script>


<template>

<div :style="{'background-image':'url(https://images.unsplash.com/photo-1553044014-a729eac4af74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)'}">
  
<h1> post-it notes :</h1>
<div class="postit"> 

<ul v-for="(postit, index) in postits" :key="key">
<ul >
  <div class="post">
<li> <div id="index"><router-link :to="`/note/${index}/${postit.title}/${postit.content}`" title="Vue au détail"><p>{{index}}</p></router-link></div></li>
<li><h2>{{postit.title}}</h2> </li>
<li><h3>{{postit.content}}</h3></li>

<li><div id="update"> <router-link :to="`/updatenote/${index}/${postit.title}/${postit.content}`" title="Bon à modifier^^"><p>Update note</p></router-link> </div>    </li>

</div>


</ul>
</ul>
</div>
 
<hr>




<div class="form">
<h1>Created new post-it :</h1>


<label>Title :</label><br>
<input v-model="title" placeholder="title" /> <br>



 <label>Content :</label> <br>
<input v-model="content" placeholder="content" /> <br>


<!-- `greet` is the name of the method defined above -->
<button @click="create_postit" title="Un Post-it de plus?">Create postit</button>
<br>
</div>


</div>
<!-- <router-link :to="`/postits`" title="Une autre manière de stocker des post-it">Post-it (API) </router-link> -->
</template>

<style scoped>
label{
 font-weight: bold;
 font-size: 20px;
}
::placeholder{
 font-size: 20px; 
}





.postit{
    text-align: center;
    font-size: 20px;
   
    
}
ul{
 
  display: inline-block;
  list-style: none;
  padding: 5px;
 
}

*{
 
  text-align: center; 
}
.post{
  border: 3px solid black;
  box-shadow: 6px 6px 5px black;
  font-family:sans-serif;
  color: #8B4513; 
  background-color: #b6b3b0;
  padding-left: 3px;
  padding-right: 3px; 
}
h1{
  font-weight: bold;
  text-transform : capitalize;
  text-decoration: underline;
}
#index{
  border: 1px solid black;
  width: 25px;
}
h2 {
  font-size: 25px;
  
}

.form{
text-align: center;
border: 1px solid black;
line-height: 3em;


}
#update{
  border: 1px solid black;
}
p{
  font-size: 15px;
  color: black;
}
h3{
  font-size: 15px;
}
@media all and (max-width: 1024px)
{

ul{
  display: block;
  width: 440px;
  width: 90%;
  margin-left: 20px;
}
.form
{
  width: 90%;
  margin-left: 20px;
}


 }
</style>
