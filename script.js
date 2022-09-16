let n = prompt("Enter number");
let x = 1;
let sum = 0;
if (!isNaN(n)) {
  for (let i = 0; i < n; i++) {
    x *= 2;
    sum += x;
    //document.write(x + " ");
  }
  document.write(
    `Now ypu hawe ${sum} grains of wheat that weigh ${
      (sum * 0.065) / 1000
    } kilogram`
  );
} else alert("ERROR! Please try again");

// let a, b;
// a = 1;
// b = 1;
// a = ++b;
// console.log(a);
