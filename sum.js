const clas = process.argv;
let sum = 0;


for (let i = 2; i < clas.length; i++) {
  if (! isNaN(Number(clas[i]))) { //hello
    sum += Number(clas[i]);
  }
}

console.log("The sum is " + sum);
