function e5(arreglo,tipo){
    tipo=tipo.toLowerCase();
    var nuevo=[];
    for(let i=0;i<arreglo.length;i++){
        if(tipo== typeof(arreglo[i])){
            nuevo.push(arreglo[i]);
        }else{
            continue;
        }
    }
    return nuevo;
}