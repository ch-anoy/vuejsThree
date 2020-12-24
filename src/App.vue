<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <post @postcreated="onCreatePost" ></post>
      </div>
      <div class="my-2" >
        <post-details v-if="showPosts"></post-details>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "./components/Post.vue";
import PostDetails from "./components/PostDetails.vue";

export default {
  data(){
    return{
      showPosts:true
      }
  },
  name: "App",
  components: {
    Post,
    PostDetails,
  },
  methods:{
    onCreatePost(){
      this.showPosts=false;
      setTimeout(()=>{
        this.showPosts=true
      },10);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
