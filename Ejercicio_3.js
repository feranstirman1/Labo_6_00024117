function e3(arreglo){
    var string = 0;
    var number = 0;
    var booleano = 0;
    var simbolo = 0;
    var funcion = 0;
    var objeto = 0;
    var indefinido = 0;


    for (let i of arreglo) {
        if (typeof i == 'string') {
            string += 1;
        }
        if (typeof i == 'number') {
            number += 1;
        }
        if (typeof i == 'boolean') {
            booleano += 1;
        }
        if (typeof i == 'function') {
            funcion += 1;
        }
        if (typeof i == 'object') {
            objeto += 1;
        }
        if (typeof i == 'symbol') {
            simbolo += 1;
        }
        if (typeof i == 'undefined') {
            indefinido += 1;
        }
    }
    return ("number:" + number + " string: " + string + " booleano: " + booleano + " funcion: " + funcion + " objeto: " + objeto + " symbol: " + simbolo + " indefinido: " + indefinido)
}
