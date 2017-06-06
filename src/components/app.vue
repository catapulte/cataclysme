<template>
  <div>
    <div v-for="catp in catProfiles">
      <cat-profile :cat='catp' class="col-md-offset-4 col-md-4"></cat-profile>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import { firebase, urlBackend } from '@/services/config';
  
  import catProfile from '@/components/catProfile';
  
  export default {
  
    data() {
      return {
        catProfiles: null,
      };
    },
    components: {
      catProfile,
    },
    mounted() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          axios.get(`${urlBackend}/users/${user.uid}/cats`)
            .then((response) => {
              this.catProfiles = response.data;
            })
            .catch(error => console.log(error));
        } else {
          console.log('logout');
        }
      });
    },
    methods: {},
  };
</script>

<style>
  .message {
    color: red;
  }
</style>
