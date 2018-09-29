function e9(){
    var arreglo=[];
    for(let i=0;i<20;i++){
        arreglo.push(Math.floor((Math.random() * 100) + 1));
    }
    /*opcional*/
    console.log(arreglo);
    /****************/
    var numero= prompt("Adivine un numero que este en el arreglo: ");
    var adivino=false;
    for(let x in arreglo){
        if (numero==arreglo[x]){
            adivino=true;
            break;
        }else{
            continue;
        }
    }
    if(adivino){
        console.log("HA ADIVINADO CORRECTAMENTE!!!");
    }else{
        console.log("ESE NUMERO NO ESTABA EN EL ARREGGLO :(");
    }
}