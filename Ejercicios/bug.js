console.log("Ejercicio 2");

// El error se eencuentra en la validacion del for, en esta validacion
//i <= numeros.length. Al igualar el contador con la longitud del array,  el ultimo elemento a leer no existe, pues el array 
// tiene 5 elementos y la variable lee 6 elementos
const calcularPromedio = (numeros) => {
    let sumaTotal = 0;

    for (let i = 0; i < numeros.length; i++) {
        sumaTotal += numeros[i];
    }

    const promedio = sumaTotal / numeros.length;
    return promedio;
};

const listaNumeros = [1, 2, 3, 4, 5];
const promedioNumeros = calcularPromedio(listaNumeros);

console.log(promedioNumeros);