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

export const myApp = firebaseImport.app();
export const firebase = firebaseImport;
// let features = ['auth', 'database', 'messaging', 'storage']
// .filter(feature => typeof myApp[feature] === 'function')
// console.log(`Firebase SDK loaded with ${features.join(', ')}`)
