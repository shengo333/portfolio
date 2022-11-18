<template>
  <div>
    <Header />
    <div class="content-wrapper">
      <div class="resumeWrapper">
        <div class="flex-wrapp">
          <h3>About Me</h3>
          <h4>Beka Shengelia</h4>
          <h4>Location: Georgia</h4>
          <h4>Georgian mobile: +995 595 017 757 +995 579064635</h4>
          <h4>Email: bekashengelia333@gmail.com</h4>
          <h4>Languages: English, Georgian and Russian</h4>
          <h4>Nationality: Georgian</h4>
        </div>
        <div class="flex-wrapp">
          <h3>Personal Skills</h3>
          <li>Good communication skills both on the phone and face-to-face</li>
          <li>Tactful & articulate</li>
          <li>Ability to work in a fast paced environment</li>
          <li>Enthusiastic, ambitious, self-aware and demonstrate initiative</li>
          <li>Ability to initiate and conduct litigation proceedings.</li>
        </div>
        <div class="flex-wrapp">
          <h3>Coding Skills</h3>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap (css framework)</li>
          <li>Tailwind (css framework)</li>
          <li>WordPress</li>
          <li>JavaScript</li>
          <li>Typescript</li>
          <li>Vue3</li>
          <li>5 Stars on Hackerrank.com</li>
        </div>
        <div class="flex-wrapp">
            <button @click="showImg = !showImg">
              <span v-if="showImg">hide certificates</span>
              <span v-else>show certificates</span>
            </button>
            <div class="certificate" v-if="showImg">
              <a href="http://localhost:3000/_nuxt/pages/game/images/certiport.png" target="_blank">
                <img src="./game/images/certiport.png">
              </a>
              <a href="http://localhost:3000/_nuxt/pages/game/images/certimg1.jpg" target="_blank">
                <img src="./game/images/certimg1.jpg">
              </a>
              <a href="http://localhost:3000/_nuxt/pages/game/images/certimg2.jpg" target="_blank">
                <img src="./game/images/certimg2.jpg">
              </a>
              <a href="http://localhost:3000/_nuxt/pages/game/images/certimg3.jpg" target="_blank">
                <img src="./game/images/certimg3.jpg">
              </a>
              <a href="http://localhost:3000/_nuxt/pages/game/images/certimg4.jpg" target="_blank">
                <img src="./game/images/certimg4.jpg">
              </a>
              <a href="http://localhost:3000/_nuxt/pages/game/images/vueNinjaUdemi.jpg" target="_blank">
                <img src="./game/images/vueNinjaUdemi.jpg">
              </a>
              <a href="http://localhost:3000/_nuxt/pages/game/images/newHorizon.jpg" target="_blank">
                <img src="./game/images/newHorizon.jpg">
              </a>
            </div>
        </div>
        <!-- <div class="router-link">
          <router-link to="/"> Home Page</router-link>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue'

export default {
  components: {Header},
  data(){
    return {
      showImg: false,
    }
  },
}
</script>

<style>
body,.vsc-initialized{
  margin: 0;
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
.resumeWrapper h1,.resumeWrapper h2,.resumeWrapper h3,.resumeWrapper h4,.resumeWrapper h5, .resumeWrapper h6, .resumeWrapperp{
  color: #000000!important;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
}
/* .resume-image{
  background-image: url('./game/images/resumeimg.jpg');
  width: 100%;
  height: 100%;
  background-size: cover; 
  background-repeat: no-repeat;
} */
.resumeWrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 1rem;
    border: 1px solid black;
    padding: 1rem;
}
.flex-wrapp{
  flex: 50%;
}
.certificate img{
  width: 210px;
  height: 180px;
  max-width: 320px;
  max-height: 200px;
}

.resumeWrapper .router-link a{
  padding: 0.5rem;
  text-decoration: none;
  border: 1px solid rgb(156, 155, 155);
  background: #d6d4d4;
  font-size: 1.2rem;
  color: rgb(80, 81, 82);
  font-family: Montserrat, Helvetica, Arial, sans-serif;
}

</style>