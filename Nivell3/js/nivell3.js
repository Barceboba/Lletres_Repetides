//Exercici 1

function separaLletres() {
    let captuNom = document.getElementById("nom").value;
    let myWay = [...captuNom];
    for (let i = 0; i < myWay.length; i++) {
        //console.log(myWay[i]);
    }
    document.getElementById("vista").innerHTML = "Les lletres que componen el nom són: " + myWay + ".";
};


//Exercici 2

function contaLletres() {
    let captuNom = document.getElementById("nom2").value.toUpperCase();

    let myWay = [...captuNom];
    let text = "";


    for (let i = 0; i < myWay.length; i++) {
        text += myWay[i];
    }

    for (i = 0; i < myWay.length; i++) {
        if (myWay[i] == 'A' || myWay[i] == 'E' || myWay[i] == 'I' || myWay[i] == 'O' || myWay[i] == 'U') {
            document.getElementById("alVocal").innerHTML += '' + myWay[i] + ", ";
        } else if (isNaN(myWay[i]) == false) {
            document.getElementById("noNum").innerHTML += '' + myWay[i] + ", ";
        } else {
            document.getElementById("alCons").innerHTML += '' + myWay[i] + ", ";
        }
    }
    document.getElementById("alNom").innerHTML = "Partim del nom " + text + ".";
};


//Exercici 3

function contaLletr() {
    let pillaNom = document.getElementById("nom3").value.toUpperCase();
    let myWay = [...pillaNom];
    let works = {};


    let conta = myWay.map(men => {
        if (works[men]) {
            works[men] = works[men] + 1;
        } else {
            works[men] = 1;
        }
        return works;
        // return conta = conta ? conta + 1 :1;
    });
    console.log(conta[0]);
    //for para sacar por pantalla
    for (const contar in works) {
        if (Object.hasOwnProperty.call(works, contar)) {
            document.getElementById("sortida").innerHTML += contar[0] + " : " + works[contar] + " , ";
        }
    }
};


//Exercici 4

function fussArray() {
    let name = document.getElementById("nom4").value.toUpperCase();

    surname = document.getElementById("nom5").value.toUpperCase(),
        fullName = name.concat([' '], surname);

    console.log(fullName);

    document.getElementById("concaten").innerHTML = "Nom i cognom: " + fullName + ".";
}

//Nivell 2

function buscaMail() {

    document.getElementById("concaten").value = '';
    let Str = document.getElementById('tirallonga').value;
    let mails = /\w*-?\w*-[a-z]+@[a-z-]+(\w...)\.([a-zA-Z]+)/g;
    let mailTrobat = [];
    let trobat = Str.match(mails);
    if (trobat) {
        mailTrobat = trobat.sort();
    } else if (trobat === null) {
        document.getElementById("correus").innerHTML += "No hi ha cap adreça electrònica al text introduït.";
    };

    let senseRepes = [];
    if (mailTrobat) {
        for (let i = 0; i < mailTrobat.length; i++) {
            if (mailTrobat[i + 1] != mailTrobat[i]) {
                senseRepes.push(mailTrobat[i]);
            } else if (mailTrobat === null) {
                document.getElementById("correus").innerHTML += "No hi ha cap adreça electrònica al text introduït.";
            }
        }
    };

    // return trobat.slice(0, 3);
    senseRepes.reverse()
    for (const trobat of senseRepes) {
        document.getElementById("correus").innerHTML += trobat + ' <br>';

    }

    //console.log(buscaMail());
};

