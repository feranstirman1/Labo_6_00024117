function e7(medidas){
    /*calculando el promedio */
    var suma=0;
    for(let i=0;i<medidas.length;i++){
        suma+=medida[i];
    }

    var promedio= (1/medidas.length)*(suma);
    console.log("El promedio de las mediciones es: "+promedio);

    /*calculando las incertezas */
    var sumaIncerteza=0;
    for(let i=0;i<medidas.length;i++){
        sumaIncerteza+= Math.pow((medidas[i]-promedio),2);
    }
    var incerteza= Math.sqrt((1/(medidas.length-1))*sumaIncerteza);
    console.log("La incerteza es: "+incerteza);
}