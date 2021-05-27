let myWay = ['M', 'I', 'Q', 'U', 'U', 'E', 'L'];
let works = {};

let conta = myWay.map(men => {
  if (!works[men]){
   works[men]= 1;
  } else {
    works[men]++;
  } return works;
 // return conta = conta ? conta + 1 :1;
});
    console.log(conta[0]);