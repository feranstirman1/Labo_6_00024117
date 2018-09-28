function e2(arreglo){
    /*validar que el arreglo solo sea de numeros, si hay otro valor se convierte en cero*/
    for(let i=0;i<arreglo.length;i++){
        if(isNaN(arreglo[i])){
            arreglo[i]=0;
        }
    }

    /*for de la suma */
    var suma=0;
    for(let i=0;i<arreglo.length;i++){
        suma+=arreglo[i];
    }
    console.log("La suma de los elementos es: "+suma);

    /* calcular el promedio */
    var promedio= suma/arreglo.length;
    console.log("El promedio es: "+promedio);
}