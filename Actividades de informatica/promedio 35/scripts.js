function promedio(){
    const nota1 = +document.querySelector('#nota1').value;
    const nota2 = +document.querySelector('#nota2').value;
    const nota3 = +document.querySelector('#nota3').value;
    const mostrar = document.querySelector('#salida');
    const promedio = (nota1 * 0.35) + (nota2 * 0.35) + (nota3 * 0.30);

  if (nota1 >=1 && nota1 < 10 && nota2 < 10 && nota3 >=1 && nota3 <10){
    if (promedio >=6 && promedio <=10){
        mostrar.textContent = promedio.toFixed(2) + '¡APROBADO! :D';
    } else if (promedio >=1 && promedio<6){
        mostrar.textContent = promedio.toFixed(2) + '¡REPROBADO! :(';
    } else{
        mostrar.textContent = 'Ingrese notas válidas';
    }
  } else{
    mostrar.textContent = 'Ingrese notas válidas'
  }
}