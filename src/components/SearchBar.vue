<template>
  <div class="search-box">
    <input
      type="text"
      class="search-bar"
      placeholder="Search..."
      v-model="query"
      @keypress.enter="fetchWeatherFromStore"
    />
  </div>
</template>

<script>
export default {
  methods: {
    fetchWeatherFromStore() {
      this.$store.dispatch("fetchWeather");
    },
  },
  computed: {
    query: {
      get() {
        return this.$store.query;
      },
      set(value) {
        console.log(value);
        this.$store.state.query = value;
      },
    },
    weather: {
      get() {
        return this.$store.state.weather;
      },
    },
  },
};
</script>

<style>
.search-box {
  width: 100%;
  margin-bottom: 30px;
}

.search-box .search-bar {
  display: block;
  width: 100%;
  padding: 15px;
  
  color: #313131;
  font-size: 20px;

  appearance: none;
  border:none;
  outline: none;
  background: none;

  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  transition: 0.4s;
}

.search-box .search-bar:focus {
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.95);
}
</style>
