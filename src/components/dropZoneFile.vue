<template>
  <img id="drop_zone" v-bind:src=imgSrc v-on:drop="dropHandler" v-on:dragover="dragoverHandler" v-on:dragend="dragendHandler" height="200" alt="Image preview...">
  </img>
</template>

<script>
  export default {
    props: ['imgSrc'],
    methods: {
      dropHandler: function dropHandler(ev) {
        ev.preventDefault();
  
        const reader = new FileReader();
        reader.addEventListener('load', () => { this.imgSrc = reader.result; }, false);
  
        // If dropped items aren't files, reject them
        const dt = ev.dataTransfer;
        if (dt.items) {
          // Use DataTransferItemList interface to access the file(s)
          for (let i = 0; i < dt.items.length; i += 1) {
            if (dt.items[i].kind === 'file') {
              const f = dt.items[i].getAsFile();
              // console.log("... file[" + i + "].name = " + f.name);
              reader.readAsDataURL(f);
              this.$emit('changefile', f);
            }
          }
        } else {
          // Use DataTransfer interface to access the file(s)
          // for (let i = 0; i < dt.files.length; i++) {
          //  console.log("... file[" + i + "].name = " + dt.files[i].name);
          // }
        }
      },
      dragoverHandler: function dragoverHandler(ev) {
        // Prevent default select and drag behavior
        ev.preventDefault();
      },
      dragendHandler: function dragendHandler(ev) {
        // Remove all of the drag data
        const dt = ev.dataTransfer;
        if (dt.items) {
          // Use DataTransferItemList interface to remove the drag data
          for (let i = 0; i < dt.items.length; i += 1) {
            dt.items.remove(i);
          }
        } else {
          // Use DataTransfer interface to remove the drag data
          ev.dataTransfer.clearData();
        }
      },
    },
  };
</script>

<style lang="css">
  drop_zone {
    border: 5px solid blue;
    width: 200px;
    height: 100px;
  }
</style>
