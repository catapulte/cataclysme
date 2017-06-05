import * as firebase from 'firebase';

const uploadFile = function uploadFile(catId, file) {
  // Create a root reference
  const storageRef = firebase.storage().ref();
  // Create a reference to 'mountains.jpg'
  const profilRef = storageRef.child(`profil/${catId}/profil.jpg`);
  profilRef.put(file);
};

const getProfilURL = function getProfilURL(catId) {
  // Create a root reference
  const storageRef = firebase.storage().ref();
  // Create a reference to 'mountains.jpg'
  const profilRef = storageRef.child(`profil/${catId}/profil.jpg`);
  return profilRef.getDownloadURL();
};

export default {
  uploadFile,
  getProfilURL,
};
