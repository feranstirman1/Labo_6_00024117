function e6(numero){
    var codigo= String(numero);
    for(let i=0;i<codigo.length;i++){
        switch(codigo[i]){
            case '0':
                codigo[i]='m';
                break;
            case '1':
                codigo[i]='u';
                break;
            case '2':
                codigo[i]='r';
                break;
            case '3':
                codigo[i]='c';
                break;
            case '4':
                codigo[i]='i';
                break;
            case '5':
                codigo[i]='e';
                break;
            case '6':
                codigo[i]='l';
                break;
            case '7':
                codigo[i]='a';
                break;
            case '8':
                codigo[i]='g';
                break;
            case '9':
                codigo[i]='o';
                break;
            default:
                break;

        }
    }
    return codigo;
}