function contador(){
    let segundo = +Document.querySelector('#segundos').value;
    setTimeout(finalizar,segundos * 1000);
}
function finalizar(){
    let mostrat = Document.querySelector('#salida').textcontent ="ON"
    let alarma = Document.querySelector('#alarma');
    alarma.play();
    mostrat.style ='color: Red; fon-size : 40px';
}
function reiniciar(){
    location.reload();
}
