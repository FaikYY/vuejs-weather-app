import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    api_key: "74b9fa31401a7772e24262a7d4843fe0",
    url_base: "https://api.openweathermap.org/data/2.5/",
    query: "default query",
    weather: {},
    date: ""
  },
  mutations:{
    
  },
  actions: {
    fetchWeather() {
        console.log('Enter pressed')
        console.log('Query is ' + this.state.query)
        fetch(
          `${this.state.url_base}weather?q=${this.state.query}&units=metric&APPID=${this.state.api_key}`
        )
          .then((res) => {
            console.log(res)
            return res.json();
          })
          .then(results => {
            console.log(results)
            this.state.weather = results;
          });

    },
  },
});
