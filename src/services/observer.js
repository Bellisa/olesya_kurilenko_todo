export const errObserver = {
  observers: [],

  addObserver(method) {
    console.log(method, 'method addObserver');
    this.observers.push(method);
  },

  trigger(data) {
    console.log(data, ' trigger ');
    this.observers.forEach(method => method(data));
  }
};
