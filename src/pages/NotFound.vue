<template>
  <div class="error-cont">
    <h1>{{ errorCode }}</h1>
    <p>{{ errorMessage }}</p>
    <button @click="goBack">Go Home</button>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  props: {
    errorCode: {
      type: Number,
      required: true,
    },
    errorMessage: {
      type: String,
      required: true,
    },
  },
  methods: {
    goBack() {
      this.$router.push('/');
    },
  },
};
</script>

<style>
.error-cont {
  text-align: center;
  margin-top: 10%;
}
button{
  background: #c4920a;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-weight: bolder;
  cursor: pointer;
}

@media only screen and (max-width: 768px) {
  .error-cont {
    margin-top: 30%;
  }
}
</style>
