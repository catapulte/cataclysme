import Rx from 'rxjs/Rx';

class RxEventBus {

  constructor() {
    this.subject = new Rx.Subject();
  }

  subscribe(key, action) {
    return this.subject
      .filter(event => event.key === key)
      .map(event => event.value)
      .subscribe(action);
  }

  post(event) {
    this.subject.next(event);
  }

}

export const rxEventBus = new RxEventBus();

export class RxEvent {

  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}
