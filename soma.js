setInterval (() => {
let n = 1
for (let i = 0; i < 10; i++) {
    if (i < 3) { continue; }
    n += + i;
  }
  console.log(n)
  console.log(typeof(n))
}, 2000)
