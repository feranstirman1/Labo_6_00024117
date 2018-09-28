function e4(arreglo){
    var n= Math.ceil(arreglo.length/2);
    for(let i=0;i<n;i++){
        console.log(arreglo[i]+arreglo[arreglo.length-1-i]);
    }
}