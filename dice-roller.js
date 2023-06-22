const args = process.argv;
let max = args[2];
let arr = [];
//console.log(max);
for (i=0 ; i< max ; i++) {
  arr[i] = Math.floor(Math.random() * 6);
}
console.log(" Rolled 3 dice: " + arr.join());