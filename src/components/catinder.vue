<template>
  <div>
    <div v-for="profil in profils">
      <div class="col-md-offset-4 col-md-4">
        <catinderprofil :profil='profil.otherCat' :status='profil.status' @patoune='patoune' @griffoune='griffoune'></catinderprofil>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import {
    urlBackend,
  } from '@/services/config';
  import catinderprofil from '@/components/catinderProfile';
  
  export default {
  
    props: ['catId'],
    data() {
      return {
        profils: null,
      };
    },
    components: {
      catinderprofil,
    },
    mounted() {
      // lister les different chats
      axios.get(`${urlBackend}/cats/${this.catId}/all`)
        .then((response) => {
          this.profils = response.data;
        });
    },
    methods: {
      patoune(otherCatId) {
        axios.post(`${urlBackend}/cats/${this.catId}/patoune/${otherCatId}`)
        .then(() => axios.get(`${urlBackend}/cats/${this.catId}/all`))
        .then((response) => {
          this.profils = response.data;
        })
        .catch((error) => { console.log(error); });
      },
      griffoune(otherCatId) {
        axios.post(`${urlBackend}/cats/${this.catId}/griffoune/${otherCatId}`)
          .then(() => axios.get(`${urlBackend}/cats/${this.catId}/all`))
          .then((response) => {
            this.profils = response.data;
          })
          .catch((error) => { console.log(error); });
      },
    },
  };
</script>
