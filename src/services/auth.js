import axios from 'axios';
import { rxEventBus } from '@/eventbus';
import * as events from '@/eventbus/events';
import router from '@/router';
import { firebase, urlBackend } from './config';


const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

const selectProvider = (provider) => {
  if (provider === 'google') {
    return googleProvider;
  } else if (provider === 'facebook') {
    return facebookProvider;
  } else if (provider === 'github') {
    return githubProvider;
  }
  return '';
};

const getUserByUID = uid => axios.get(`${urlBackend}/users/${uid}`);
const putUserByUID = uid => axios.put(`${urlBackend}/users/${uid}`, {
  firebaseId: uid,
});

const signInWithFirebase = provider => firebase.auth().signInWithPopup(selectProvider(provider));
const signInWithMailFirebase =
  (login, password) => firebase.auth().signInWithEmailAndPassword(login, password);

const signInWithProvider = (provider) => {
  signInWithFirebase(provider)
    .catch((error) => { console.log(`Technical excepion ${error}`); })
    .then(response => getUserByUID(response.user.uid))
    .then(() => router.push('app'))
    .catch((error) => {
      if (error.response.status === 404) {
        console.log('pas inscris');
        router.push('signUp');
      } else {
        console.log('Technical excepion');
      }
    });
};

const signUpWithProvider = (provider) => {
  signInWithFirebase(provider)
    .catch((error) => { console.log(`Technical excepion ${error}`); })
    .then(response => putUserByUID(response.user.uid))
    .then(() => router.push('updateCat'))
    .catch((error) => {
      console.log(`Technical excepion ${error}`);
    });
};

const signInWithMail = (login, password) => {
  signInWithMailFirebase(login, password)
    .catch((error) => {
      console.log(`Technical excepion ${error}`);
    })
    .then(response => getUserByUID(response.user.uid))
    .then(() => router.push('app'))
    .catch((error) => {
      if (error.response.status === 404) {
        router.push('updateCat');
      } else {
        console.log('Technical excepion');
      }
    });
};


const signOut = () => {
  firebase.auth().signOut()
    .then(() => router.push('/'))
    .catch(() => console.log('unable to signout'));
};

rxEventBus.subscribe(events.SIGNIN_PROVIDER, provider => signInWithProvider(provider));
rxEventBus.subscribe(events.SIGNUP_PROVIDER, provider => signUpWithProvider(provider));
rxEventBus.subscribe(events.SIGNIN_MAIL, ({ login, password }) => signInWithMail(login, password));
rxEventBus.subscribe(events.SIGNUP_MAIL, ({ login, password }) => signInWithMail(login, password));
rxEventBus.subscribe(events.SIGNOUT, () => signOut());

export default {
  init() {
  },
};
