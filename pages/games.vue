<template>
  <div>
    <Header />
    <div class="content-wrapper">
      <div class="game-mainWrapper">
            <h1 > Please click on the box to Start the game</h1>
          <!-- <button onclick="changeColor()">click me</button> -->
          
          <div class="grid">
              <div v-for="cellId in cellIds" :key="cellId" class="cell-input" :id="cellId" @click="changeColor(cellId)"></div>
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
  methods: {
    changeUser(){
      this.userOne = !this.userOne;
      this.userTwo = !this.userTwo;
      if(this.userOne){
          document.querySelector('h1').innerHTML = 'User one';
      } else {
          document.querySelector('h1').innerHTML = 'User Two';
      }
    },
    changeColor(id){
        if(this.isBoxClickable(id)){

            if(this.userOne){
                document.getElementById(id).innerHTML = '0';
                this.playerOneClicks.push(id)
            }

            if(this.userTwo){
                document.getElementById(id).innerHTML = 'X';
                this.playerTwoClicks.push(id)
            }

            this.allClicks.push(id)
            this.changeUser()
            this.getResults()

        } else {
            alert('this box allready clicked')
          }
    },
    isBoxClickable(id){
        return !this.allClicks.find(element => element == id)
    },
    getResults(){
      this.checkWinner()
      if(this.allClicks.length >= 9){
          alert('game has been finished, nobody wins')
          this.startAgain()
      }

    },
    startAgain(){
      this.allClicks = [];
      this.playerOneClicks = [];
      this.playerTwoClicks = [];
      var list = document.getElementsByClassName("cell-input");
      for (let item of list) {
          item.innerHTML = '';
      }
    },
    checkWinner(){
    this.isPlayeroneWinner()
    if(this.isPlayeroneWinner()){
      this.startAgain()
    }
    this.isPlayerTwoWinner()
    if(this.isPlayerTwoWinner()){
      this.startAgain()
    }
    },
    isPlayeroneWinner(){
    if(this.winningCombinations.some(combination => this.checkWinningCombination(combination, this.playerOneClicks))){
        alert('player one wins')
        return true
    } else {
        console.log('aint working')
    }
    },
    isPlayerTwoWinner(){
      if(this.winningCombinations.some(combination => this.checkWinningCombination(combination, this.playerTwoClicks))){
          alert('player Two wins')
          return true
      } else {
          console.log('aint working')
      }
    },
    checkWinningCombination(combination, playerClicks){
      return combination.every(combinationElement => playerClicks.find(playerClick => playerClick == combinationElement))
    },
  },
  data() {
    return {
      cellIds: [11,12,13,21,22,23,31,32,33],
       userOne: true,
       userTwo: false,
       allClicks: [],
       playerOneClicks: [],
       playerTwoClicks: [],
       winningCombinations: [
              [11, 12, 13],
              [21, 22, 23],
              [31, 32, 33],
              [12, 22, 32],
              [13, 23, 33],
              [11, 21, 31],
              [11, 22, 33],
              [13, 22, 31],
          ] 
    }
  },
}

</script>

<style>
body, .vsc-initialized{
  margin: 0!important;
}
.game-mainWrapper a{
  color:#ffffff;
  padding: 1rem;
  font-size: 1.5rem;
  text-decoration: none;
}

.game-mainWrapper h1{
  color: rgba(105, 119, 24, 0.651);
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.9s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}

.content-wrapper{
  
  display: flex;
  flex-direction: column;
  align-items: center;
}
.grid {
  display: grid;
  grid-template-columns: repeat(3, 0fr);
  justify-content: center;
}
.cell-input {
  height: 7rem;
  width: 7rem;
  background-color: rgba(50, 105, 156, 0.63);
  border: 1px solid #ffffff;
  display: flex;
  justify-content: center; 
  align-items: center;
}

#changeMe{
  height: 5rem;
    width: 5rem;
    background-color: red;
}
.game-mainWrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.game-mainWrapper .router-link a{
  padding: 0.5rem;
  text-decoration: none;
  border: 1px solid rgb(156, 155, 155);
  background: #969595;
  font-size: 1.2rem;
  color: rgb(255, 255, 255);
  font-family: Montserrat, Helvetica, Arial, sans-serif;
}
.router-link{
  margin-top: 1.4rem;
}
  /* .game-img{
      background-image: url('./game/images/gameimg3.jpg');
      width: 100%;
      height: 100%;
      background-size: cover; 
      background-repeat: no-repeat;
      overflow: hidden;
  } */
</style>