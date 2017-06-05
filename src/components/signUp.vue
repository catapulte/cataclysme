<template>
  <div class="row">
    <div class="col-md-4 col-md-offset-4">
      <div>
        <login-button :imgSrc="imgGoogle" alt='Login with google' text="S'inscrire avec Google" v-on:click="signUpWithProvider('google')">
        </login-button>
        <login-button :imgSrc="imgFacebook" alt='Login with facebook' text="S'inscrire avec Facebook" v-on:click="signUpWithProvider('facebook')">
        </login-button>
        <login-button :imgSrc="imgGithub" alt='Login with github' text="S'inscrire avec Github" v-on:click="signUpWithProvider('github')">
        </login-button>
        <login-button :imgSrc="imgMail" alt='Login' text="S'inscrire" v-on:click="displayForm = !displayForm">
        </login-button>
      </div>
      <div v-if='displayForm'>
        <div class="form-group">
          <label for="exampleInputEmail1">Login</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="email" v-model="email" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password" />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword2">Repeat password</label>
          <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Repeat password" v-model="password2" />
        </div>
        <div class="form-group">
          <input type="button" value="Créer le compte" class="btn btn-default" v-on:click="verifyBeforeSignUp" />
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
  
  import imgGoogle from '@/assets/google-logo.png';
  import imgFacebook from '@/assets/facebook-logo.png';
  import imgGithub from '@/assets/github-logo.png';
  import imgMail from '@/assets/mail-logo.png';
  
  import LoginButton from './loginButton';
  
  
  export default {
    data() {
      return {
        email: '',
        password: '',
        password2: '',
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
      signUpWithProvider(provider) {
        rxEventBus.post(new RxEvent(events.SIGNUP_PROVIDER, provider));
      },
      verifyBeforeSignUp() {
        if (this.password === this.password2) {
          rxEventBus.post(new RxEvent(events.SIGNUP_MAIL, {
            login: this.login,
            password: this.password,
          }));
        } else {
          console.log('bad correspondance password');
        }
      },
    },
  };
</script>

<style>
  
</style>
