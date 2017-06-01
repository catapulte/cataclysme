import * as firebase from 'firebase';

const uploadFile = function uploadFile(catId, file) {
  // Create a root reference
  const storageRef = firebase.storage().ref();

  // Create a reference to 'mountains.jpg'
  const profilRef = storageRef.child(`profil/${catId}/profil.jpg`);

  profilRef.put(file);
  // .then(function (snapshot) {
    // console.log('Uploaded a blob or file!')
  // });
};

const getProfilURL = function getProfilURL(catId, onReceive) {
  // Create a root reference
  const storageRef = firebase.storage().ref();

  // Create a reference to 'mountains.jpg'
  const profilRef = storageRef.child(`profil/${catId}/profil.jpg`);

  profilRef.getDownloadURL().then(onReceive);
  // .catch(function (error) {
    // Handle any errors
    // console.log(error);
  // });
};

export default {
  uploadFile,
  getProfilURL,
};
