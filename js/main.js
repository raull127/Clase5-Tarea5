///////////////////////////////////////////////////////////////////////////////////////////////////////
//TAREA5: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
///////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////

document.querySelector("#boton-calcular").onclick = function () {
    document.querySelector("#mensaje-0").textContent = calcularPromedio(arrayConvertido);
    document.querySelector("#mensaje-1").textContent = obtenerMenorNumero(arrayConvertido);
    document.querySelector("#mensaje-2").textContent = obtenerMayorNumero(arrayConvertido);
    document.querySelector("#mensaje-3").textContent = obtenerNumeroRepetido(arrayConvertido);
    document.querySelector("#resultados").hidden = false;
    return "calculado";
}
/////////////////////////////////////////////////////////////////////////////////

const convertirAArray = function (elementoLlamado) {
    const nodeListNumeros = elementoLlamado;
    const arrayNumeros = [];
    for (let i = 0; i < nodeListNumeros.length; i++) {
        arrayNumeros.push(Number(nodeListNumeros[i].innerText));
    }
    return arrayNumeros;
}
let nodoAConvertir = document.querySelectorAll("li");
let arrayConvertido = convertirAArray(nodoAConvertir);
/////////////////////////////////////////////////////////////////////////////////

function calcularPromedio(arrayObjetivo) {
    let sumaNumeros = 0;
    for (let i = 0; i < arrayObjetivo.length; i++) {
        sumaNumeros += arrayObjetivo[i];
    }
    let promedioNumeros = (sumaNumeros / arrayObjetivo.length).toFixed(2);
    return promedioNumeros;
}
/////////////////////////////////////////////////////////////////////////////////

function obtenerMenorNumero(arrayObjetivo) {
    let numeroBase = arrayObjetivo[0];
    for (let i = 0; i < arrayObjetivo.length; i++) {
        if (arrayObjetivo[i] < numeroBase) {
            numeroBase = arrayObjetivo[i];
        }
    }
    return numeroBase;
}
/////////////////////////////////////////////////////////////////////////////////

function obtenerMayorNumero(arrayObjetivo) {
    let numeroBase = 0;
    for (let i = 0; i < arrayObjetivo.length; i++) {
        let numeroCirculando = arrayObjetivo[i];
        if (numeroCirculando > numeroBase) {
            numeroBase = numeroCirculando;
        }
    }
    return numeroBase;
}
/////////////////////////////////////////////////////////////////////////////////

function obtenerNumeroRepetido(arrayObjetivo) {
    let numeroRepetido;
    let contador = 0;
    let contadorMaximo = 0;
    for (i = 0; i < arrayObjetivo.length; i++) {
        for (j = 0; j < arrayObjetivo.length; j++) {
            if (arrayObjetivo[i] === arrayObjetivo[j]) {
                contador++;
            }
            if (contador > contadorMaximo) {
                contadorMaximo = contador;
                numeroRepetido = arrayObjetivo[i];
            }
        }
        contador = 0;
    }
    return numeroRepetido;
}

/////////////////////////////////////////////////////////////////////////////////

