<template>
    <div>
        <div class="heading">
         <h1>Type in your keyword to search for users or repositories</h1>
        </div>
        <form @submit.prevent="searchUsers">
                    <input type="search" v-model="search" placeholder="Search or jump to" />
                <button type="submit">Search</button>
              </form>

              <div v-if="isLoading" class="search-cont">
            <h2>Loading...</h2>
          </div>
          <!-- <div v-if="!isLoading && searchResults.length == 0" class="search-cont">
            <h2>No results found</h2>
          </div> -->

              <div v-if="!isLoading && searchResults.length > 0" class="search-cont" >
          <h2>Search results for: {{ search }}</h2>
          <div class="result-box">
            <ul>
            <li v-for="user in searchResults" :key="user.id">
               <img :src="user.owner.avatar_url" alt="avatar" width="100" height="100" class="result-image">
                <p>{{ user.name }}</p>
                <button><a :href="user.html_url">
                    more</a></button>
              </li>
            </ul>
            
          </div>
          </div>
        </div>
</template>

<script>
    export default {
        name: 'pageSearch',
        data() {
            return {
                search: '',
                searchResults: [],
                isLoading: false,
                
            };
        },
        methods: {
            async searchUsers() {
                this.isLoading = true;
                const response = await fetch(`https://api.github.com/search/repositories?q=${this.search}`);
                const {items} = await response.json();
                this.isLoading = false;
                this.searchResults = items;
            }
        },
    }
</script>

<style scoped>
.heading{
    text-align: center;
    margin-top: 10%;
}
form{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 10px;
    }
input{
    width: 500px;
    height: 40px;
    border-radius: 10px;
box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
         rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
        padding: 5px;
    }
    form button{
        border: 1px solid #000;
        outline: none;
        border-radius: 10px;
        color: #fff;
        background: #c4920a;
        font-size: .8rem;
        font-weight: bold;
        padding: 12px;
        cursor: pointer;
    }
    .search-cont h2{
        padding: 10px;
    }
    .search-cont{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        }
        .result-box ul{
            display: grid;
            grid-template-columns: repeat(3, 300px);
            grid-column-gap: 3rem;
            grid-row-gap: 1rem;
            list-style-type: none;
        
        }
        .result-box{
            display: flex;
            align-items: center;
        }
            .result-image{
                padding: 10px;
                border-radius: 50%;
            margin: auto;
                justify-content: center;
                align-items: center;
                }
                .result-box h2{
                    /* margin: 10px; */
                    padding: 5px;
                    }
                        .result-box li{
                         display: flex;
                            flex-direction: column;
                            justify-content: center;
                           align-content: center;
                            background: #000;
                            border: 1px solid #fff;
                            /* border-radius: 10px; */
                            margin-bottom: 30px;
                            box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3)
                             0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
                    
                            }
                            .result-box p{
                                color: #fff;
                                text-align: center;
                                padding: 10px;
                                font-size: .9rem;
                            }
                            .result-box li a{
                                text-decoration: none;
                                font-size: 1rem;
                                color: #fff;
                                font-size: .8rem;
                               
                                }
                                .result-box button{
                                    border: 1px solid #000;
                                    outline: none;
                                    border-radius: 10px;
                                    background: #000;
                                    display: block;
                                    justify-content: center;
                                    align-items: center;
                                    border: 1px solid #fff;
                                    margin: auto;
                                    width: 25%;
                                    margin-bottom: 30px;
                                    padding: 5px;
                                    cursor: pointer;
                                }
                                    .result-box li button a:hover{
                                        color: #c4920a;
                            
        }
    .result-box1{
        font-size: 1.2rem;
    }
    @media only screen and (max-width: 768px) {
        .heading{
            width: 70%;
            margin: auto;
            padding-top: 20%;
            font-size: .8rem;
        }
        /* form{
            margin: 5%;
        } */
        input{
            width: 300px;
        }
        .result-box ul{
            display: block;
            height: 200px;
            width: 280px;
        }
    }
      
</style>