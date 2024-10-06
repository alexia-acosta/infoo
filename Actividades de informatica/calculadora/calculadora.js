function concatenar(valor) {
    document.getElementById('operacion').innerHTML += valor;
}

function borrarUltimoCaracter() {
    let operacion = document.getElementById('operacion').innerHTML;
    document.getElementById('operacion').innerHTML = operacion.substring(0, operacion.length - 1);
}

function borrarOperacion() {
    document.getElementById('operacion').innerHTML = '';
}

function calcular() {
    let operacion = document.getElementById('operacion').innerHTML;
    operacion = operacion.replace('^', '**');
    try {
        let resultado = eval(operacion);
        document.getElementById('operacion').innerHTML = resultado;
    } catch (e) {
        document.getElementById('operacion').innerHTML = 'Error';
    }
}

function calcularRaiz() {
    let operacion = document.getElementById('operacion').innerHTML;
    try {
        let resultado = Math.sqrt(eval(operacion));
        document.getElementById('operacion').innerHTML = resultado;
    } catch (e) {
        document.getElementById('operacion').innerHTML = 'Error';
    }
}
