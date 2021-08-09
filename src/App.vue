<template>
  <div>
    <h1>Rick & Morty</h1>
    <FilterStatus />
    <Search />
    <ListCharacters />
  </div>
</template>

<script>
import FilterStatus from "./components/FilterStatus.vue";
import ListCharacters from "./components/ListCharacters";
import Search from "./components/Search.vue";
export default {
  name: "App",
  components: {
    ListCharacters,
    FilterStatus,
    Search,
  },
};
</script>

<style lang="scss">
:root {
  --background-body: #24282f;
  --background-card: #3c3e44;
  --text-white: #fff;
  --text-gray: #c0c0c0;
  --text-orange: #ff9800;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  background-color: var(--background-body);
  color: var(--text-white);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
h1 {
  margin-bottom: 3rem;
  text-align: center;
}
.container {
  width: 980px;
  max-width: 90%;
  margin: 5rem auto;
}
img {
  width: 100%;
}
</style>
