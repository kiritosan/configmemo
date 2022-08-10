const getDebounce = (fn, ...args) => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.call(this, ...args);
    }, 1000);
  };
};

let co = (name) => console.log(`runing ${name}`);

let dco = getDebounce(co, 'names');

dco();
setTimeout(() => {
  dco();
}, 500);
setTimeout(() => {
  dco();
}, 500);
setTimeout(() => {
  dco();
}, 500);
setTimeout(() => {
  dco();
}, 500);
setTimeout(() => {
  dco();
}, 500);
