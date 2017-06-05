<template>
  <div class="panel panel-default">
    <div class="panel-body">
      <img :src='imgSrc' class="profilImg"></img>
      <span><b>{{ cat.name }}</b></span>
      <span>{{ cat.id }}</span>
      <span class="glyphicon glyphicon-pencil" @click='edit'></span>
      <span class="glyphicon glyphicon-search" @click='search'></span>
      <span class="glyphicon glyphicon-thumbs-up" @click='search'></span>
    </div>
  </div>
</template>

<script>
  import upload from '@/services/upload';
  import fakeProfil from '@/assets/empty_avatar.png';
  import router from '@/router';
  
  export default {
    props: ['cat'],
    data() {
      return {
        imgSrc: '',
      };
    },
    mounted() {
      upload.getProfilURL(this.cat.id)
        .then((url) => {
          this.imgSrc = url;
        })
        .catch(() => {
          this.imgSrc = fakeProfil;
        });
    },
    methods: {
      edit() {
        router.push({
          name: 'updateCat',
          params: {
            initcat: this.cat,
          },
        });
      },
      search() {
        router.push(`/myCatMap/${this.cat.id}`);
      },
    },
  };
</script>

<style lang="css">
  .profilImg {
    width: 100px;
  }
</style>
