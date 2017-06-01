<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-4">
      <div class="panel panel-default">
        <div class="panel-body">
          <div class="form-group">
            <label for="catId">Identifiant matériel</label>
            <input :value="id" type="text" class="form-control" id="techId" placeholder="Identifiant matériel">
          </div>
  
          <div class="form-group">
            <label for="catName">Nom</label>
            <input type="text" class="form-control" id="catName" placeholder="Nom">
          </div>
  
          <button @click='update' class="btn btn-default pull-right">Mettre à jour</button>
  
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapState,
  } from 'vuex';
  
  import * as types from '@/store/mutation-types';
  
  import DropZoneFile from './dropZoneFile';
  
  
  export default {
    components: {
      DropZoneFile,
    },
    computed: {
      ...mapState({
        id: state => state.cat.catId,
        name: state => state.cat.catName,
      }),
  
    },
    methods: {
      update() {
        this.$store.commit(types.UPDATE_CAT_ID, this.id);
        this.$store.commit(types.UPDATE_CAT_NAME, this.name);
        this.$router.push('updateCatImage');
      },
    },
  };
</script>

<style>
  .message {
    color: red;
  }
</style>
