<template>
  <div class="repo-list">
    <p class="heading">Repositories</p>
    <ul class="repo-cont">
      <li v-for="repo in repositories" :key="repo.id" class="repo-details">
        <p>{{ repo.name }}</p>
        <!-- <p>{{ repo.description }}</p> -->
        <button><a :href="repo.html_url" target="_blank">
        <img :src="arrowIcon">
        </a></button>
      </li>
    </ul>
    <div class="btns-cont">
      <button :disabled="currentPage <= 1" @click="previousPage">Previous</button>
      <button v-for="page in pages" :key="page" @click="setPage(page)" 
      :class="{active: currentPage === page}">{{ page }}</button>
      <button :disabled="currentPage >= 8" @click="nextPage">Next</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        repositories: [],
        currentPage: 1,
        pages: 5,
        arrowIcon: require('../assets/arrow.png')
      }
    },
    created() {
      this.fetchRepo()
    },
    methods: {
      fetchRepo() {
        const username = 'Ola-ykay'
        const url = `https://api.github.com/users/${username}/repos?page=${this.currentPage}&per_page=${this.pages}`
        axios.get(url)
          .then(response => {
            this.repositories = response.data
          })
          .catch(error => {
            console.error(error)
          })
      },
      setPage(page) {
        this.currentPage = page
        this.fetchRepo()
      },

      previousPage() {
        if (this.currentPage > 1) {
          this.currentPage--
          this.fetchRepo()
        }
      },
      nextPage() {
        if (this.currentPage < this.pages) {  
        this.currentPage++
        this.fetchRepo()
      }
      }
    }
  }
</script>

<style scoped>
.heading{
  font-size: 1.5rem;
  text-align: left;
  padding-left: 20px;
}
.repo-list {
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: left;
  /* margin: 0 auto; */
  padding: 50px;
 
}
.repo-cont{
  display: flex;
  flex-direction: column;
/* column-gap: 5rem; */
  list-style-type: none;
  width: 40%;
}
.repo-details{
  display: flex;
border: 1px dotted #fff;
padding: 10px;
  color: #fff;
  margin: 20px;
}
.repo-details p{
  padding: 10px;
  font-size: .8rem;
  width: 100%;
}
.repo-details a{
  text-decoration: none;
  color: #000;
  font-size: .8rem;
  text-align: center;
  
}
.repo-details button{
  padding: 10px;
  /* border-radius: 10px; */
  background: #000;
  outline: none;
  border: none;
  margin-left: 5rem;
}
.repo-details button img{
  width: 20px;
  height: 20px;
}
.btns-cont{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .3rem;
  margin-top: 1rem;
}
.btns-cont button{
  padding: 10px;
color: #fff;
background: #000;
  outline: none;
  border: none;
  cursor: pointer;
}
.active{
  border: 1px dashed #fff;
}
</style>
