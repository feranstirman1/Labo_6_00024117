function e6(numero){
    var codigo= String(numero);
    var encript=[];
    for(let i=0;i<codigo.length;i++){
        switch(codigo[i]){
            case "0":
                encript.push("m");
                break;
            case "1":
                encript.push("u");
                break;
            case "2":
                encript.push("r");
                break;
            case "3":
                encript.push("c");
                break;
            case "4":
                encript.push("i");
                break;
            case "5":
                encript.push("e");
                break;
            case "6":
                encript.push("l");
                break;
            case "7":
                encript.push("a");
                break;
            case "8":
                encript.push("g");
                break;
            case "9":
                encript.push("o");
                break;
            default:
                break;

        }
    }
    return encript.join("");
}