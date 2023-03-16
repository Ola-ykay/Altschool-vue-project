<template>
  <div>
  <NavBar />

  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

  export default {
    name: 'App',
    components: {
    NavBar,
      
    }
  }
</script>

<style>
body {
 background-color: #000;
color: #fff;
}
body, *{
  /* font-family: 'Roboto', sans-serif; */
  font-family: 'Poppins', sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>

<!-- <head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
</head> -->