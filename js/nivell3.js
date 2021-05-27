let myWay = ['M', 'I', 'Q', 'U', 'E', 'L'];
let conta = {};
// looping through your array
for (let i = 0; i < myWay.length; i++) {
  let num = myWay[i];
  // this is a ternary if statement increasing the count
  // if name(number) exists in your object add 1, else add number with value of 1
  conta[num] = conta[num] ? conta[num] + 1 :1;
  /*
  Could also be written like this
  if (counts[num]) {
      counts[num] += 1;
  } else {
      counts[num] = 1;
  }
  */
}
console.log(conta);