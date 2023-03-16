<template>
    <div>
      <nav>
        <router-link to="/">Home</router-link>
            <router-link to="/repo">Repositories</router-link>
            <router-link to="/search">Search</router-link>
          <router-link to="/error">Error</router-link>
          </nav>
    <router-view />
    
    </div>
    </template>
    
    <script>

    export default {
      name: 'NavBar',
  
  }
    </script>


    <style scoped>
  nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding:20px;
    height: 40px;
    }
    
  nav a{
    text-decoration: none;
    color: #fff;
    font-size: .8rem;
  }
  </style>

    <!-- <style>
    #app {
      font-family: Avenir, Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      margin-top: 60px;
    }
    </style> -->
    