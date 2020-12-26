<template>
<Navigation/>

 <div>
   <router-view></router-view>
 </div>
</template>

<script>

import Navigation from './components/pages/TheNavigation.vue';
export default {
  
  name: "App",
  components: {
    Navigation,
  },
  
};
</script>

<style>

</style>
