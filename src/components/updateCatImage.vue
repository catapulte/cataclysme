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
  import upload from '@/services/upload';
  import uploadImg from '@/assets/empty_avatar.png';
  
  import DropZoneFile from './dropZoneFile';
  
  export default {
    data() {
      return {
        imgSrc: uploadImg,
      };
    },
    props: ['catId'],
    mounted() {
      upload.getProfilURL(this.catId)
        .then((url) => {
          this.imgSrc = url;
        })
        .catch(() => {
          this.imgSrc = uploadImg;
        });
    },
    methods: {
      changeFile(file) {
        upload.uploadFile(this.catId, file);
      },
      finish() {
        this.$router.push('../app');
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
