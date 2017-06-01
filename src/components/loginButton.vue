<template>
  <button v-on:click="onclick" type="button" class="btn btn-info btn-block text">
          <span style="width: 70px ">
              <img class='providerButton' :src='imgSrc' :alt='alt'></img>
          </span>
          {{text}}
      </button>
</template>

<script>
  export default {
    props: ['imgSrc', 'alt', 'text'],
    methods: {
      onclick() {
        this.$emit('click');
      },
    },
  };
</script>


<style lang="css">
  .providerButton {
    height: 50px;
  }
  
  .text {
    text-align: left;
  }
</style>
