<template>
  <div>
    <h3>Post Details</h3>
    <table class="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in postDetails" :key="post.id"></tr>
          <td>{{post.title}}</td>
          <td>{{post.description}}</td>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';
export default {
      name:'Posts',
      data(){
        return{
          postDetails:[],
        };
      },
      mounted(){
        axios
              .get(`https://fir-fcb21-default-rtdb.firebaseio.com/posts.json`)
              .then((response)=>{
                this.formatPosts(response.data)
              });
        },
      methods:{
        formatPosts(postsData){
          for(let key in postsData)
          this.postDetails.push({...postsData[key],id:key});
        }
      },
};
</script>

<style>




</style>
