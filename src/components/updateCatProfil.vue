<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-4">
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="form-group">
            <label for="catId">Identifiant matériel</label>
            <input v-model="id" type="text" class="form-control" id="techId" placeholder="Identifiant matériel">
          </div>
  
          <div class="form-group">
            <label for="catName">Nom</label>
            <input v-model="name" type="text" class="form-control" id="catName" placeholder="Nom">
          </div>
  
          <button @click='update' class="btn btn-default pull-right">Mettre à jour</button>
  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  import { firebase, urlBackend } from '@/services/config';
  import router from '@/router';
  
  export default {
    data() {
      return {
        id: this.initcat ? this.initcat.id : null,
        name: this.initcat ? this.initcat.name : null,
      };
    },
    props: ['initcat'],
    methods: {
      update() {
        const user = firebase.auth().currentUser;
        /* eslint-disable indent */
        axios.put(`${urlBackend}/cats/${this.id}`, {
            id: this.id,
            name: this.name,
            userId: user.uid,
          })
          .then(() => router.push(`updateCatImage/${this.id}`))
          .catch(error => console.log(error));
      },
      /* eslint-enable indent */
    },
  };
</script>

<style>
  .message {
    color: red;
  }
</style>
