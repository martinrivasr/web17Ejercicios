console.log("ejercicios");

const registro  = {
    nombre: 'Francisco',
    Apellidos : 'Lopez',
    cursos: [
        {
            modulo: 'Desarrollo backend con Node.js',
            FechaInicio: '2024-10-21',
            temas: ['NPM y nodemon',
                    'Repaso de JavaScript',
                    'JavaScript en Node',
                    'Express y MVC',
                    'API REST y HTT']
            },
        {
            modulo: 'Desarrollo Backend avanzado con Node.js',
            FechaInicio:'2025-01-03',
            temas:['Node.js y V8',
                'NPM y nodemon',
                'Repaso de JavaScript',
                'JavaScript en Node',
                'Express y MVC',
                'API REST y HTT'],
        },
        {
            modulo:'Fundamentos de React',
            FechaInicio:'2024-12-16',
            temas:['React y Virtual DOM',
                'Componentes y HooksI',
                'Rutas con React Router',
                'SPA y Herramientas']
        },
        {
            modulo:'React avanzado',
            FechaInicio: '2025-02-25',
            temas: ['Redux, Store, Actions, Reducers',
                'Next.js Router, Renderizado',
                'Testing Componentes, Redux',
                'Extras Patrones, Hooks']
        }
    ]
};



let info = registro.cursos.filter(function(curso){
        return curso.modulo === 'Fundamentos de React';
});

if(info){
    console.log(info[0].FechaInicio);
}else{
    console.log("Curso no encontrado")
}


//registro.cursos.filter(curso => cursos.modulo = 'Fundamentos de React');


`
    <h2>Curso: ${info[0].FechaInicio}</h2>
    <p>Genres: ${info[0].FechaInicio}</p>
`;
