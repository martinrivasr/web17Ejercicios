console.log("ejercico 3")

const input1 = [
    'Downloads',
    'Videos',
    'Capture',
    'mp4',
]

const createPath = (list) => {
    // esta funcion crea un path con base a los elementos de un array. Esta funcio considera que el último elemento es la
    // extensión del archivo
    if (list.length > 1){
        let newPath = ''
        // unimos todos los elementos del array excepto el último elemento y lo almacenamos en la variable newPath
        newPath = list.splice(0, list.length -1).join("/"); 
        // unimos la variable nePath y agregamos la extension que es el último elemento
        const fullPath = `${newPath}.${input1[input1.length -1]}`
        return fullPath
    } else{
        return "La lista debe de contener al menos dos elementos."
    }
}


console.log(createPath(input1));

const input2 = [
    'CodinGame',
    'python',
    'py',
]

console.log(createPath(input2));

const input3 = [
    'programming',
    'languajes',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
]
console.log(createPath(input3));