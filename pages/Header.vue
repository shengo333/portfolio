<template>
    <div id="header-wrapper">
        <div>
        <h2>Beka Shengelia</h2>
        </div>
        <div class="routes">
        <router-link to="/" class="route"><h3> Home</h3></router-link>    
        <router-link to="/games" class="route"><h3> Game page</h3></router-link>    
        <router-link to="/pages" class="route"><h3>Web pages</h3> </router-link>    
        <router-link to="/projects" class="route"><h3>Check currency</h3></router-link>    
        <router-link to="/resume" class="route"><h3>Resume page</h3></router-link>    
        </div>
    </div>
</template>


<script>
export default {
    name: 'Header',
}
</script>


<style scoped>
#header-wrapper{
  display: flex;
  background: rgba(128, 128, 128, 0.39);
  margin-bottom: 1.5rem;
  margin-top: 2rem;
  justify-content: space-between;
  padding: 0 2rem;
}
.routes{
  /* width: 60%; */
  display: flex;
  justify-content: space-between;
}
.route{
  padding: 0 1rem ;
  /* background: rgba(77, 77, 76, 0.329);
  border-radius: 100px;
  background-size: calc(100% + 150px) calc(100% + 150px);
  opacity: 0.8; */
  text-decoration: none;
}
h1{
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  font-size: 50px;
  font-style: normal;
  font-weight: bold;
  letter-spacing: -2.5px;
  line-height: 50px;
  text-transform: none;
  color: #535050bb;

}
h3{
  font-family: Esteban, Georgia, 'Times New Roman', serif;
  font-size: 20px;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: 20px;
  text-transform: none;
  color: #000000;
}
</style>