<template>
  <vmap :zoom=13 :center=center class="mymap center-block" @moveend='moveend'>
    <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
    <template v-for="cat in catData">
      <v-marker :latLng='cat.position' :icon='myIcon'>
        <v-popup :content='description(cat)'>
        </v-popup>
      </v-marker>
    </template>
  </vmap>
</template>

<script>
  import L from 'leaflet';
  import dateFormat from 'dateformat';
  import {
    Map,
    TileLayer,
    Marker,
    Popup,
  } from 'leaflet-vue';
  import axios from 'axios';
  
  import {
    urlBackend,
  } from '@/services/config';
  import catIcon from '@/assets/cat.svg';
  
  export default {
  
    components: {
      vmap: Map,
      'v-tilelayer': TileLayer,
      'v-marker': Marker,
      'v-popup': Popup,
    },
    mounted() {
      const lat = 48.302631;
      const lng = -1.666984;
      axios.get(`${urlBackend}/catdata?lat=${lat}&lng=${lng}&distance=100`)
        .then((response) => {
          this.catData = response.data;
        });
    },
    methods: {
      moveend(evt) {
        const {
          lat,
          lng,
        } = evt.target.getCenter();
        axios.get(`${urlBackend}/catdata?lat=${lat}&lng=${lng}&distance=100`)
          .then((response) => {
            this.catData = response.data;
          });
      },
      description(cat) {
        const d = dateFormat(new Date(cat.timestamp), 'isoDateTime');
        return `${cat.id} le ${d}`;
      },
    },
    data() {
      return {
        myIcon: L.icon({
          iconUrl: catIcon,
          iconSize: [38, 95],
          iconAnchor: [22, 94],
          popupAnchor: [-3, -76],
        }),
        catData: null,
        url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>',
        center: [48.302631, -1.666984],
      };
    },
  };
</script>

<style>
  .mymap {
    height: 500px;
    width: 1000px;
  }
</style>
