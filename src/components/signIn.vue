<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-4">
      <div>
        <div>
          <login-button :imgSrc="imgGoogle" alt='Login with google' text='Se connecter avec Google' v-on:click="signInWithProvider('google')">
          </login-button>
          <login-button :imgSrc="imgFacebook" alt='Login with facebook' text='Se connecter avec Facebook' v-on:click="signInWithProvider('facebook')">
          </login-button>
          <login-button :imgSrc="imgGithub" alt='Login with github' text='Se connecter avec Github' v-on:click="signInWithProvider('github')">
          </login-button>
          <login-button :imgSrc="imgMail" alt='Login' text='Se connecter' v-on:click="displayForm = !displayForm">
          </login-button>
        </div>
      </div>
  
      <div v-if='displayForm'>
        <div class="form-group">
          <label for="exampleInputEmail1">Login</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="email" v-model="login" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password" />
        </div>
        <div class="form-group">
          <input type="button" value="Se connecter" class="btn btn-default" v-on:click="signInWithMailPassword" />
        </div>
      </div>
  
    </div>
  </div>
</template>

<script>
  import {
    rxEventBus,
    RxEvent,
  } from '@/eventbus';
  import * as events from '@/eventbus/events';
  
  import imgGoogle from '../assets/google-logo.png';
  import imgFacebook from '../assets/facebook-logo.png';
  import imgGithub from '../assets/github-logo.png';
  import imgMail from '../assets/mail-logo.png';
  
  import LoginButton from './loginButton';
  
  export default {
    data() {
      return {
        login: '',
        password: '',
        displayForm: false,
        imgGoogle,
        imgFacebook,
        imgGithub,
        imgMail,
      };
    },
    components: {
      LoginButton,
    },
    methods: {
      signInWithProvider(provider) {
        rxEventBus.post(new RxEvent(events.SIGNIN_PROVIDER, provider));
      },
      signInWithMailPassword() {
        rxEventBus.post(new RxEvent(events.SIGNIN_MAIL, {
          login: this.login,
          password: this.password,
        }));
      },
      showMailPasswordForm() {
        this.displayForm = !this.displayForm;
      },
    },
  
  };
</script>

<style>
  
</style>
