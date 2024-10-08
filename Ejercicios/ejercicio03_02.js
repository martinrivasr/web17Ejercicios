console.log("ejercio 03_02");

const divideCadena = (cadena) => cadena.split("-");

function splitLetters (input, separator){
    // Esta funcion separa una cadena de una o más palabrasen cadenas de un solo caracter.
    // si el valor ingresado es un número, la función primero convierte el valor en string y después lo separa.
    if (typeof input !== 'string'){
        input = String(input);
    };

    let word = input.split('').join(separator);
    return word;

}


const input = 10;
console.log(splitLetters(input,"-"));

const secondInput = 1;
console.log(splitLetters(secondInput,"/"));

const thirdInput = 11234;
console.log(splitLetters(thirdInput,"$"));

const fourthInput = 'Keepcodding course';
console.log(splitLetters(fourthInput," "));