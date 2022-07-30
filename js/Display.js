class Display {
    // Constructor
    constructor(displayValorAnterior, displayValorActual, baseNum) {
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar: '+',
            dividir: '/',
            multiplicar: 'x',
            restar: '-', 
        }
        this.baseNumerica = baseNum;
    }

    // Borra el ultimo elemento añadido
    borrar() {
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
    }

    // Borra todo en la calculadora
    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }

    // Realiza las oparaciones, recibe como parametro el tipo de operacion
    computar(tipo) {
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual = '';
        if (this.tipoOperacion == 'igual')
            this.convertir(this.valorAnterior)
        this.imprimirValores();
    }

    // Agragamos número en el display
    agregarNumero(numero) {
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.convertir(this.valorActual);
        this.imprimirValores();
    }

    // Imprime los valores en el display
    imprimirValores() {
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }

    calcular() {
        const valorAnterior = this.valorAnterior;
        const valorActual = this.valorActual;
        if((isNaN(parseInt(valorActual, this.baseNumerica)) || isNaN(parseInt(valorAnterior, this.baseNumerica)))) return
        this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }

    // Modificar la base numerica actual
    setBase() {
        const base = document.getElementById('base');
        this.baseNumerica = base.value;
        this.desabilitarBotones(); 
        this.calculador.setBaseNumerica(this.baseNumerica);
    }

    // Desabilita los botones de acuerdo a la base numerica
    desabilitarBotones() { 
        const botones = document.querySelectorAll('.numero');
        botones.forEach (boton => {
            if (parseFloat(boton.value) > parseFloat(this.baseNumerica)-1)
                boton.disabled = true;
            else
                boton.disabled = false;
        })
    }

    convertir(numero) {
        const hex = document.getElementById('hex')
        const dec = document.getElementById('dec')
        const oct = document.getElementById('oct')
        const bin = document.getElementById('bin')
        hex.innerHTML = this.calculador.convertirToBaseN(parseInt(numero, this.baseNumerica), '16')
        dec.innerHTML = this.calculador.convertirToBaseN(parseInt(numero, this.baseNumerica), '10')
        oct.innerHTML = this.calculador.convertirToBaseN(parseInt(numero, this.baseNumerica), '8')
        bin.innerHTML = this.calculador.convertirToBaseN(parseInt(numero, this.baseNumerica), '2')
    }

}