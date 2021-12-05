<template>
  <div id="app" :class="typeof weather.main != 'undefined' && weather.main.temp > 16 ? 'warm' : ''">
    <main>
      <SearchBar />
      <WeatherInfo />
    </main>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import WeatherInfo from './components/WeatherInfo.vue';

export default {
  components: { SearchBar, WeatherInfo },
  name: 'app',
    computed:{
     weather: {
      get() {
        return this.$store.state.weather;
      },
    },
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'montserrat', sans-serif;
}

#app {
  background-image: url('./assets/cold-bg.jpg');
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}

#app.warm {
  background-image: url('./assets/warm-bg.jpg');
}

main {
  min-height: 100vh;
  padding: 25px;

  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
}
</style>


// TODO: Place the search bar to the bottom when its on mobile
// TODO: Seperate the components
// TODO: Fix the background on desktop mode