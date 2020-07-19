function something() {
  let x = window.localStorage.getItem('numbers');
  x++;
  window.localStorage.setItem('numbers', x);
  console.log(x);
}