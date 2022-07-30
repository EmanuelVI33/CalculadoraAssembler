class Calculadora {

    constructor () {
        this.baseNumerica = document.getElementById('base').value;
        this.binario = "";
    }

    // Operación suma
    sumar(num1, num2) {  // 1010 + 101
        num1 = parseInt(num1, this.baseNumerica);
        num2 = parseInt(num2, this.baseNumerica);
        var resul = num1 + num2;
        return this.convertirToBaseN(resul, this.baseNumerica);    
    }

    // Operación resta
    restar(num1, num2) {
        num1 = parseInt(num1, this.baseNumerica);
        num2 = parseInt(num2, this.baseNumerica);
        var resul = num1 - num2;
        return this.convertirToBaseN(resul, this.baseNumerica);
    }

    // Operación división
    dividir(num1, num2) {
        num1 = parseInt(num1, this.baseNumerica);
        num2 = parseInt(num2, this.baseNumerica);
        var resul = Math.trunc(num1 / num2);
        return this.convertirToBaseN(resul, this.baseNumerica);
    }

    // Operación multiplicar
    multiplicar(num1, num2) {
        num1 = parseInt(num1, this.baseNumerica);
        num2 = parseInt(num2, this.baseNumerica);
        var resul = num1 * num2;
        return this.convertirToBaseN(resul, this.baseNumerica);
    }

    // Agrega su equivalente en Hexa
    equivalenteHexa (digitoHexadecimal) {
        return {
                0 : '0',
                1 : '1',
                2 : '2',
                3 : '3',
                4 : '4',
                5 : '5',
                6 : '6',
                7 : '7',
                8 : '8',
                9 : '9',
                10: 'A' ,
                11: 'B' ,
                12: 'C' ,
                13: 'D' ,
                14: 'E' ,
                15: 'F' ,
            } [ digitoHexadecimal ] ;
    }

    // Modificar la base numerica
    setBaseNumerica(baseNumerica) {
        this.baseNumerica = baseNumerica
    }

    convertirToBaseN(num, base) {
        if (base != '10') {
            let dig, nuevoNum = '', b = false;
            if (num < 0) {  // Si es negativo
                num *= -1;
                b = true;
            } 
            while (num > 0) {   
                dig = num % base;
                if (base > 10)
                    dig = this.equivalenteHexa(dig);
                nuevoNum = dig + nuevoNum;
                num = Math.trunc(num / base);
            }
            if (b)  // Agrega signo
                nuevoNum = '-' + nuevoNum;

            return nuevoNum;
        }
        return num;
    }

} 