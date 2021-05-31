let myWay = ['M', 'I', 'Q', 2, 4, 'U', 'E', 'L'];
let text = "";

console.log("Partim del nom " + myWay.join(""));

for (let i = 0; i < myWay.length; i++) {
    text += myWay[i];
}

for (i = 0; i< myWay.length; i++) {
if (myWay[i] == 'A' || myWay[i] == 'E' || myWay[i] == 'I' || myWay[i] == 'O' || myWay[i] == 'U') {
    console.log('He trobat la VOCAL: ' + myWay[i]);
}
else if (isNaN(myWay[i]) == false) {
    console.log('Els noms de persones no contenen el número: ' + myWay[i]);
}
else {
    console.log('He trobat la CONSONTANT: ' + myWay[i]);
}  

}