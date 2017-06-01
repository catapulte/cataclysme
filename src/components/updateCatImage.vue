<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-4 align">
      <div class="panel panel-default">
        <div class="panel-body">
          <div>
            <div><strong>Glisse l'image de ton chat ...</strong></div>
            <drop-zone-file v-on:changefile='changeFile' :imgSrc='imgSrc'></drop-zone-file>
          </div>
          <button @click='finish' class="btn btn-default">Terminer</button>
        </div>
  
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters,
  } from 'vuex';

  import upload from '@/services/upload';
  import DropZoneFile from './dropZoneFile';
  
  
  export default {
    data() {
      return {
        imgSrc: 'public/static/upload.png',
      };
    },
    mounted() {
      upload.getProfilURL(this.catId, (url) => { this.imgSrc = url; });
    },
    computed: mapGetters([
      'catId',
    ]),
    methods: {
      changeFile(file) {
        console.log(this.catId);
        upload.uploadFile(this.catId, file);
      },
      finish() {
        this.$router.push('app');
      },
    },
    components: {
      DropZoneFile,
    },
  
  };
</script>

<style lang="css">
  .align {
    text-align: center;
  }
</style>
