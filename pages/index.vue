<template>
  <div class="background-image">
    <Header />
    <!-- <NewMatrix /> -->
    <Matrix />
    <!-- <div>
      <h1>My Portfolio</h1>
    </div>
    <div class="routes">
      <router-link to="/games" class="route"><h3> Game page</h3></router-link>    
      <router-link to="/pages" class="route"><h3>Web pages</h3> </router-link>    
      <router-link to="/projects" class="route"><h3>Check currency</h3></router-link>    
      <router-link to="/resume" class="route"><h3>Resume page</h3></router-link>    
    </div> -->
  </div>
</template>

<script>
  import Header from './Header.vue'
  import Matrix from './matrix.vue'
  // import NewMatrix from './bekamatrix.vue'


  export default{
    components: {Header, Matrix}
  }
</script>
  


<style>

body, .vsc-initialized{
  margin: 0!important;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
/* .background-image{
    background-image: url('./game/images/img1.jpg');
    width: 100%;
    height: 100%;
    background-size: cover; 
    background-repeat: no-repeat;
} */
</style>
