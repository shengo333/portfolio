<template>
  <div>
      <Header />
      <div class="content-wrapper">
          <div class="my-pages pages-background">
            <div>
              <h2>Pages I have worked on</h2>
            </div>
            <div class="page-images">
              <a href="https://boo.evivalhosting.de/">
                <img src="./game/images/page1.jpg">
              </a>
              <a href="https://officewelt24.de/">
                <img src="./game/images/page2.jpg">
              </a>
              <a href="https://dev.ajaxstore.de/">
                <img src="./game/images/page3.jpg">
              </a>
              <a href="https://elektroniks-home.de/">
                <img src="./game/images/page4.jpg">
              </a>
            </div>
            <h1>Independet projects</h1>
            <div class="page-images">
              <a href="https://visual.translate.ge/">
                <img src="./game/images/vizual.png">
              </a>
            </div>
            <!-- <div class="router-link">
              <router-link to="/">Home Page</router-link>
            </div> -->
        </div>
      </div>
  </div>
</template>

<script>


  import Header from './Header.vue'

  export default{
    components: {Header,}
  }
</script>
  
<style>
body{
  margin: 0;
}
#__layout{
  height: 100vh;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
.my-pages .page-images{
    display: grid;
    width: 1000px;
    grid-template-columns: 50% 50%;
    gap: 20px;
    margin-top: auto;
    margin-bottom: auto;
}

.my-pages{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;

}
.page-images img{
  width: 100%;
  height: 100%;
  border: 2px solid black;
}
@media only screen and (max-width: 1280px) {
.my-pages .page-images{
    width: 800px;
}
}
/* .pages-background{
    background-image: url('./game/images/pagesbackground1.jpg');
    width: 100%;
    height: 100%;
    background-size: cover; 
    background-repeat: no-repeat;
} */
.my-pages .router-link a{
  padding: 0.5rem;
  text-decoration: none;
  border: 1px solid whitesmoke;
  font-size: 1.2rem;
  color: rgb(80, 81, 82);
  font-family: Montserrat, Helvetica, Arial, sans-serif;
}
.my-pages .router-link{
  margin-top: 1rem;
}

</style>