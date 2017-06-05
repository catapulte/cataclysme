import * as firebaseImport from 'firebase';

const config = {
  apiKey: 'AIzaSyBfjDZSI0l5WqZUNa7eASCQ7fWAesaxTKo',
  authDomain: 'sample-b0ebc.firebaseapp.com',
  databaseURL: 'https://sample-b0ebc.firebaseio.com',
  projectId: 'sample-b0ebc',
  storageBucket: 'sample-b0ebc.appspot.com',
  messagingSenderId: '825924492292',
};
firebaseImport.initializeApp(config);

const simpleApi = { url: 'http://localhost:8080' };
if (process.env.NODE_ENV === 'production') {
  simpleApi.url = 'https://simple.lolcat.passoire.net';
}

export const myApp = firebaseImport.app();
export const firebase = firebaseImport;
export const urlBackend = simpleApi.url;
