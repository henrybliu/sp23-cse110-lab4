setInterval(cb, 1000);

function cb() {
  let d = new Date();
  let time = d.toLocaleDateString();
  console.log(time);
}
