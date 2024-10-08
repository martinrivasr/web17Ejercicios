console.log("Ejercicio 5");

function obtenerUsuario(id){
    return new Promise((resolve) =>{
        let usuario;

        setTimeout(() => {
            if (id === 1){
                usuario = {id: 1, nombre:'John Dow'};
            }
            resolve(usuario);
        }, 2000);
        return usuario;
    });
};


let loading = true;


const main = async() =>{
    const usuario = await obtenerUsuario(1);
    loading = false;
    console.log(loading);
    console.log(usuario);
};
        
main()
        
const usuario = obtenerUsuario(1);

console.log(usuario)