function e1(arreglo,numero){
    var cantidad=0;
    for(let i=0;i<arreglo.length;i++){
        if(arreglo[i]==numero){
            cantidad+=1;
        }
    }
    return cantidad;
}