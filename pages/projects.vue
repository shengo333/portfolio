<template>
    <div>
        <Header />
        <div class="content-wrapper">

            <div class="currency-background">
                <div id="table-wrapper">
                <div id="wrapper-head">
                    <select name="currencyDropdown" id="currencyDropdown" v-model="search">
                        <option v-for="(currencyOption,index) in currencyOptions" :key="currencyOption" >{{currencyOptions[index].code}}</option>
                    </select>
                </div>
                <table id="currency-table">
                    <thead id="thead">
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>rateFormated</th>
                        <th class="right-padding">Difference</th>
                        <th class="right-padding">Rate</th>
                    </thead>
                    <tr v-for="currency in filteredCurrency" :key="currency.id" id="currency">
                        <td>{{currency.code}}</td>
                        <td>{{currency.quantity}}</td>
                        <td>{{currency.rateFormated}}</td>
                        <td>{{currency.diffFormated}}</td>
                        <td>{{currency.rate}}</td>
                    </tr>
                    </table>
                    <!-- <div class="router-link">
                        <router-link to="/">Home Page</router-link>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Header from './Header.vue'
export default {
// get deta from server
    components: {Header},
    data(){
        return{
            url: 'https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/en/json/',
            currencies: [],
            currencyOptions: [],
            search: '',
        }
    },
    mounted(){
        this.getData();
        //agar gchirdeba this.renderCurrency;
        //agar gchirdeba this.renderCurrencyOption;
        //agar gchirdeba this.renderData;
    },
    methods:{

            async getData(){
                const response = await axios.get(this.url);
                //const data =  response.json();
                console.log(response);
                this.currencies = response.data[0].currencies;
                this.currencyOptions = response.data[0].currencies;
            },
    },
    computed:{
        filteredCurrency(){
            return this.currencies.filter(currency => {
                return currency.code.match(this.search)
            })
        }
    }
}
</script>

<style>
body{
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
/* .currency-background{
    background-image: url('./game/images/curency1.jpg');
    width: 100%;
    height: 100vh;
    background-size: cover; 
    background-repeat: no-repeat;
    overflow: hidden;
} */
#table-wrapper{
    margin: auto;
    height: auto;
    width: 60rem;
    background-color: rgba(245, 245, 245, 0.5);
    display: flex;
    flex-direction: column;
}
#wrapper-head{
    display: flex;
    justify-content: space-between;
    padding: 4rem;
    align-items: center;
}
#select, #search{
    background-color: rgb(182, 182, 177);
    padding: 0.5rem;
    border-radius: 10%;
}
.raw {
    background-color: gray;
    display: flex;
    justify-content: space-around;
    padding: 2rem;
}

#currency-table{
    display: flex;
    flex-direction: column;
    align-items: center;
}
#thead{
    display: flex;
    justify-content: space-between;
    width: 90%;
    padding-bottom: 1rem;

}
#currency{
    display: flex;
    justify-content: space-between;
    width: 90%;
    line-height: 0.9rem;
    font-size: 0.9rem;
}
#currency td{
    width: 3rem;
}
.right-padding{
    padding-right: 0.8rem;
}
#table-wrapper .router-link{
    align-self: center;
    padding: 0.5rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    text-decoration: none;
    border: 1px solid rgb(92, 77, 77);
    font-size: 1.2rem;
    font-family: Montserrat, Helvetica, Arial, sans-serif;
    background-color: rgb(128, 126, 126);
}
#table-wrapper .router-link a{
    text-decoration: none;
    color: rgb(255, 255, 255);
}

</style>