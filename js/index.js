const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');
const opcion = document.getElementById('base');
const conversiones = document.getElementsByClassName('.convertor');
const baseNumerica = opcion.value;

const display = new Display(displayValorAnterior, displayValorActual, baseNumerica);
display.setBase();

// Evento click de los botones de números
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML))
});

// Evento click de los botones de operación
botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
});