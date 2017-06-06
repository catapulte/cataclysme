import * as firebase from 'firebase';

class BatteryWatcher {

  constructor() {
    this.list = [];
  }

  subscribe(catId) {
    const ref = firebase.database().ref(`batterie/${catId}/status`);
    ref.on('value', (snapshot) => {
      console.log(snapshot.val());
    });
    this.list.push(ref);
  }

  unSubscribe() {
    this.list.forEach((ref) => {
      ref.off();
    });
    this.list = [];
  }

}


const batteryWatcher = new BatteryWatcher();

export default {
  batteryWatcher,
};

