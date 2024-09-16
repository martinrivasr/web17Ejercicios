console.log("ejercicio 3.2");


function reverseString(input){
    // esta funcion muestra una palabra de forma invertida.
    let newString = input.split('').reverse().join('');

    return  input.length + ' ' + newString ;
}

const input1 = 'string';
console.log(reverseString(input1));

const input2 = 'variable'
console.log(reverseString(input2));

const input3 = 'pointer';
console.log(reverseString(input3));