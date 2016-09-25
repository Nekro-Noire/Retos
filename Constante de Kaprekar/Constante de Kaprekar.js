function kaprekar() {
    'use strict';

    var contador = 0,
        i = 0,
        j = 0,
        aux = 0,
        num = document.getElementById("numero").value;
    if (num >= 9999 || num < 1 || num === 1111 || num === 2222 || num === 3333 || num === 4444 || num === 5555 || num === 6666 || num === 7777 || num === 8888 || num === 6174) {
        alert("El algoritmo no se puede realizar. \n:'(");
    } else {
        while (num !== 6174) {
            var a = [parseInt(num / 1000), parseInt(num % 1000 / 100), parseInt(num % 1000 % 100 / 10), parseInt(num % 1000 % 100 % 10)],
                b = [parseInt(num / 1000), parseInt(num % 1000 / 100), parseInt(num % 1000 % 100 / 10), parseInt(num % 1000 % 100 % 10)];

            for (i = 0; i < 4; i = i + 1) {
                for (j = 0; j < 4; j = j + 1) {
                    if (a[i] < a[j]) {
                        aux = a[i];
                        a[i] = a[j];
                        a[j] = aux;
                    }
                }
            }
            var menor = '' + a[0] + '' + a[1] + '' + a[2] + '' + a[3];
            for (i = 0; i < 4; i = i + 1) {
                for (j = 0; j < 4; j = j + 1) {
                    if (b[i] > b[j]) {
                        aux = b[i];
                        b[i] = b[j];
                        b[j] = aux;
                    }
                }
            }
            var mayor = '' + b[0] + '' + b[1] + '' + b[2] + '' + b[3];
            num = mayor - menor;
            alert(mayor + ' - ' + menor + ' = ' + num);
            contador = contador + 1;
        }
        alert('\n\nSe necesitaron ' + contador + ' iteraciones para encontrar la constante de Kaprekar');
    }
}
