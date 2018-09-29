function e12(){
    class persona{
        constructor(nombre,edad){
            this.nombre=nombre;
            this.edad=edad;
        }
    }
    var personas=[];

    /*funciones del programa*/
    function ingresarPersona(nombre,edad){
        var nuevaPersona= new persona(nombre,edad);
        personas.push(nuevaPersona);
    }
    function buscarPersona(nombre){
        var succes=false;
        for(let x of personas){
            if(x.nombre==nombre){
                console.log("Nombre: "+x.nombre+" edad: "+x.edad);
                succes=true;
                break;
            }
        }
        if(!succes){
            console.log("No se ha podido encontrar a la persona con ese nombre");
        }
    }
    function eliminarPersona(nombre){
        var succes=false;
        for(let x in personas){
            if(personas[x].nombre==nombre){
                succes=true;
                var aux1= personas.splice(0,x);
                var aux2= personas.splice(x+1);
                personas=aux1.concat(aux2);
                break;
            }
        }
        if(!success){
            console.log("No exisitia esa persona");
        }
    }
    function mostrarTodo(){
        for(let x of personas){
            console.log("Nombre: "+x.nombre+" edad: "+x.edad);
        }
    }
    function modificarPersona(){
        var nombre= prompt("nombre de la persona");
        for(let x of personas){
            if(nombre==x.nombre){
                console.log("1.Modificar nombre 2.Modificar edad");
                var opcion=parseInt(prompt("Ingrese una opcion"));
                switch(opcion){
                    case 1:
                        var nuevonombre= prompt("ingrese el nuevo nombre");
                        x.nombre=nuevonombre;
                        break;
                    case 2:
                        var nuevaEdad= parseInt(prompt("ingrese la nueva edad"));
                        x.edad=nuevaEdad;
                    default:
                        console.log("no ingreso una opcion valida");
                        break;
                }
            }
        }
    }

    var running=true;
    while(running){
        console.log("1.Ingresar persona 2.Buscar persona 3.Modificar persona 4.Eliminar persona 5.Mostrar todo 6.Salir");
        var opcion=parseInt(prompt("escoja una opcion"));
        switch(opcion){
            case 1:
                var nombre=prompt("que persona desea afectar?:");
                var edad=prompt("edad que tiene esa persona");
                ingresarPersona(nombre,edad);
                break;
            case 2:
                var nombre=prompt("que persona desea afectar?:");
                buscarPersona(nombre);
                break;
            case 3:
                modificarPersona();
                break;
            case 4:
                var nombre=prompt("que persona desea afectar?:");
                eliminarPersona(nombre);
                break;
            case 5:
                mostrarTodo();
                break;
            case 6:
                running=false;
                break;
            default:
                console.log("no ingreso una opcion valida");
                break;
        }
    }
    console.log("fin de programa");
}