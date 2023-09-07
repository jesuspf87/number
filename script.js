let numeroEntrada = document.getElementById('numeroEntrada');
let numeroAzar = Math.floor(Math.random() * 100) + 1;
let mensaje = document.getElementById('mensaje');

function comprobar() {
    let numeroIngresado = parseInt(numeroEntrada.value);

    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        mensaje.textContent = 'Ingresa por favor un numero valido entre 0 y 100';
        return 
    };

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = 'Felicidades descubriste el numero';
        mensaje.style.color = 'blue';
        numeroEntrada.disabled = true;
    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = 'Ingresa un numero de mayor valor';
        mensaje.style.color = 'white';
    } else {
        mensaje.textContent = 'Ingresa un numero de menor valor';
        mensaje.style.color = 'white';
    };
};