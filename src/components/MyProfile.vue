<template>
    <div class="profile-cont">
     
  <div class="profile-content">
    <div class="profile-bio">
      <h1>{{ profile.name}} is a frontend developer passionate about solving problem and building amazing projects</h1>
    </div>
     

      <div class="profile-links">

        <div class="links">
          <img :src="locationIcon"  class="image"/>
         <p>{{ profile.location }}</p>
        </div>
        
        <div class="links">
          <img :src="githubIcon" class="image"/>
          <a v-bind:href="profile.html_url" target="_blank" rel="noreferrer">Ola-ykay</a>
        </div>
      
        <div class="links">
        <img :src="twitterIcon" class="image"/>
        <a :href="'https://twitter.com/' + profile.twitter_username" target="_blank">{{ profile.twitter_username }}</a>
      </div>

      <div class="links">
      <img :src="linkIcon" class="image" />
    <a :href="profile.blog">{{ profile.blog }}</a>
      </div>
  </div>
      <div class="profile-public"> 
      <p><strong>Followers:</strong>{{ profile.followers }}</p>
      <p><strong>Following:</strong> {{ profile.following }}</p>
      <p><strong>Public Repos:</strong> {{ profile.public_repos }}</p>
        </div>

      </div>

      <div class="profile-image">
<img :src="myImage" />
</div>

      
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'MyProfile',
    data() {
      return {
        profile: {},
        myImage: require('../assets/olaykay.png'),
        twitterIcon: require('../assets/twitter.png'),
        locationIcon: require('../assets/location.png'),
        githubIcon: require('../assets/github.png'),
        linkIcon: require('../assets/link2.png'),
      }
    },
  
    created() {
      axios.get('https://api.github.com/users/Ola-ykay')
        .then(response => {
          this.profile = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
  </script>

  <style scoped>
  .profile-cont{
    display: flex;
 /* gap: 5rem; */
 
  }

  .profile-bio{
margin-top:8%;
animation-name: bounce;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
}

.profile-bio:hover{
  color: #c4920a;
}
/* .profile-bio.animate{
  opacity: 1;
  transform: translateY(0);
} */
.profile-image{
  display: flex;
  /* flex-direction: column; */
  margin-top: 5%;
 
}

.profile-content{
  margin-left: 7%;
  font-size: 1rem;
  margin-top: 12%;

}
.profile-links{
display: flex;
justify-content: space-between;
align-items: center;
margin-top: 10%;
padding: 2px;
width: 80%;
}
.links .image{
 width: 20px;
 height: 20px;

  
}
.links{
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* gap: 1rem; */
}
.links p{
  font-size: .8rem;
  color: grey;
  padding: 2px;
}
.links a{
  text-decoration: none;
  color: #fff;
  font-size: .8rem;
  color: grey;
}
.profile-public{
 display: flex;
  padding: 5px;
  margin-top: 20px;
  justify-content: left;
  align-items: center;
  color: grey; 
  font-size: .8rem;
  gap: .3rem;
}

@media only screen and (max-width: 768px) {
  .profile-cont{
    display: block;
    overflow-x: hidden;
  }
  .profile-bio{
    font-size: .8rem;
    margin-top: 15%;
  }
  .profile-links{
    width: 100%;
  }
  .profile-content{
    margin: 3%;
  }
  .profile-image{
    display: block;
  }
}
</style>
  