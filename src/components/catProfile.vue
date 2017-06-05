<template>
  <div class="panel panel-default cat-panel">
    <div class="panel-body">
      <img :src='imgSrc' class="profilImg"></img>
      <div class='cat-name-id'>
        <span><b>{{ cat.name }}</b></span> 
        <span class="glyphicon glyphicon-pencil edit-cat" @click='edit'></span>
      </div>
      <div class='cat-links'>
        <div>
          <button type="button" class="cat-link-btn btn btn-default btn-sm" @click='search' aria-label="Left Align">
            <span class="glyphicon glyphicon-search" ></span> Locate
          </button>
        </div>
        <div>
          <button type="button" class="cat-link-btn btn btn-default btn-sm" @click='catinder' aria-label="Left Align">
            <span class="glyphicon glyphicon-thumbs-up" ></span> Catinder
          </button>
        </div>
      </div>
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
        imgSrc: fakeProfil,
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
      catinder() {
        router.push(`/catinder/${this.cat.id}`);
      },
    },
  };
</script>

<style lang="css">
  .profilImg {
    width: 100px;
    float: left;
    margin-right: 20px;
  }
  .cat-name-id .edit-cat {
    visibility: hidden;
  }
  .cat-name-id:hover .edit-cat {
    visibility: visible;
  }
  .cat-link-btn {
    margin-top: 4px;
    background-color: #f0f0f0;
  }
  .cat-panel {
    background-color: #fafafa;
  }

</style>
