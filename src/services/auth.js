import axios from 'axios';
import { firebase } from './config';


/* eslint-disable */
//import app from './config';
/* eslint-enable */

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

const getUserByUID = uid => axios.get(`http://127.0.0.1:8080/users/${uid}`);
const signInWithFirebase = provider => firebase.auth().signInWithPopup(selectProvider(provider));


const signIn = function signIn(provider, success, errorProc) {
  signInWithFirebase(provider)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.log(`Error with firebase : ${errorCode}  ${errorMessage}`);
      if (errorProc) {
        errorProc(error.code, error.message);
      }
    })
    .then(response => getUserByUID(response.user.uid))
    .then(() => success)
    .catch((error) => {
      if (error.response.status === '404') {
        console.log('User not foud, redirection vers la page signup');
      } else {
        console.log('error');
        errorProc(0, 'Unable to call web service');
      }
    });
};

export default {

  loginWithLoginPassword(mail, password, success, errorProc) {
    firebase.auth().signInWithEmailAndPassword(mail, password)
      .then((result) => {
        console.log('logged with login/password');
        success(result.user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode}  ${errorMessage}`);
        if (errorProc) {
          errorProc(error.code, error.message);
        }
      });
  },

  loginAsProvider(provider, success, error) {
    signIn(provider, success, error);
  },
  signOut(onSignOut) {
    firebase.auth().signOut().then(onSignOut);
  },
};
