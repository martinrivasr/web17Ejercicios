console.log("ejercicio 4");
const datos = [
    {
      id: 1,
      nombre: 'Juan',
      habilidades: ['JavaScript', 'HTML', 'CSS'],
      proyectos: [
        { id: 1, nombre: 'Proyecto 1' },
        { id: 2, nombre: 'Proyecto 2' }
      ]
    },
    {
      id: 2,
      nombre: 'María',
      habilidades: ['Python', 'SQL', 'Django'],
      proyectos: [
        { id: 3, nombre: 'Proyecto 3' },
        { id: 4, nombre: 'Proyecto 4' }
      ]
    },
    {
      id: 3,
      nombre: 'Pedro',
      habilidades: ['Java', 'Spring', 'Hibernate'],
      proyectos: [
        { id: 5, nombre: 'Proyecto 5' },
        { id: 6, nombre: 'Proyecto 6' }
      ]
    }
  ];

  function getDatabySkill(skill){
    // esta funcion filtra los datos del array Datos con base al parametro de skill.
    let skillFilter = datos.filter(function(dato){
        return dato.habilidades.includes(skill);
      });

    let result = skillFilter.map(dato =>{
        return{
            "id": dato.id,
            "Nombre": dato.nombre,
            "habilidades": dato.habilidades,
            "projectos": dato.proyectos,
        }
    });
    return result;
  }

  console.log(JSON.stringify(getDatabySkill('JavaScript'),null,2));

function getProjectos(input){
    let projectos = input.map(function(dato){
        return dato.proyectos.map(function(projecto){
            return projecto.nombre;
        }).join('-');
      }); 
      return projectos;
};


console.log(getProjectos(datos));
