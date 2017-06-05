<template>
  <div class="panel panel-default cat-panel">
    <div class="panel-body center">
      <img :src='griffouneImg' class="btnImg" :class="selectedGriffoune" @click='griffoune'></img>
      <span class="photoContainer">
        <b class="labelContainer">{{ profil.name }}</b>
        <img :src='imgSrc' class="profilImg">         
        </img>
      </span>
      <img :src='patouneImg' class="btnImg" :class="selectedPatoune" @click='patoune' ></img>
    </div>
  </div>
</template>

<script>
  import upload from '@/services/upload';
  import fakeProfil from '@/assets/empty_avatar.png';
  import patouneImg from '@/assets/patoune.png';
  import griffouneImg from '@/assets/griffoune.png';
  
  export default {
    props: ['profil', 'status'],
    computed: {
      selectedPatoune() {
        return { selected: this.status === 'PATOUNE' };
      },
      selectedGriffoune() {
        return { selected: this.status === 'GRIFFOUNE' };
      },
    },
    data() {
      return {
        imgSrc: fakeProfil,
        patouneImg,
        griffouneImg,
      };
    },
    mounted() {
      upload.getProfilURL(this.profil.id)
        .then((url) => {
          this.imgSrc = url;
        })
        .catch(() => {
          this.imgSrc = fakeProfil;
        });
    },
    methods: {
      patoune() {
        this.$emit('patoune', this.profil.id);
      },
      griffoune() {
        this.$emit('griffoune', this.profil.id);
      },
    },
  };
</script>

<style lang="css">
  .profilImg {
    width: 300px;
    margin-right: 20px;
    cursor: pointer;
  }
  
  .btnImg {
    width: 100px;
    margin-right: 20px;
    cursor: pointer;
  }
  
  .cat-panel {
    background-color: #fafafa;
  }
  
  .photoContainer {
    display: inline-block;
  }
  
  .labelContainer {
    display: block;
    font-size: 2em;
  }
  
  .center {
    text-align: center;
  }
  
  .selected {
    border: 1px solid green;
    padding: 5px;
    border-radius: 10px;
  }
</style>
