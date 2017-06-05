<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">LOL Cat on IOT</a>
      </div>
  
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav navbar-right">
          <li role="presentation" v-if="!user">
            <router-link to="/signIn">SignIn</router-link>
          </li>
          <li role="presentation" v-if="!user">
            <router-link to="/signUp">SignUp</router-link>
          </li>
          <li role="presentation" v-if="user">
            <a v-on:click="signOut" style="cursor: pointer;">SignOut</a>
          </li>
        </ul>
        <div class="navbar-form navbar-right" v-if="user">
          <bootstrap-toggle v-model="checked" :options="{ on: 'Yes', off: 'No' }" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
  import BootstrapToggle from 'vue-bootstrap-toggle';
  import {
    firebase,
  } from '@/services/config';
  import {
    rxEventBus,
    RxEvent,
  } from '@/eventbus';
  import * as events from '@/eventbus/events';
  
  
  export default {
    data() {
      return {
        checked: true,
        user: null,
      };
    },
    mounted() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.user = user;
        } else {
          this.user = null;
        }
      });
    },
    components: {
      BootstrapToggle,
    },
    methods: {
      signOut() {
        rxEventBus.post(new RxEvent(events.SIGNOUT));
      },
    },
  };
</script>

<style>
  
</style>
