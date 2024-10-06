let resultado = document.getElementById('resultado');
let lanzar = document.getElementById('lanzar');
let maximo = document.getElementById('maximo');

function generarNumeroAleatorio(maximoValor) {
    return Math.floor(Math.random() * maximoValor) + 1;
}

function lanzarDado() {
    let maximoValor = parseInt(maximo.value);
    if (maximoValor > 0) {
        let numeroAleatorio = generarNumeroAleatorio(maximoValor);
        resultado.textContent = numeroAleatorio;
    } else {
        alert('Ingrese un valor máximo válido');
    }
}

lanzar.addEventListener('click', lanzarDado);