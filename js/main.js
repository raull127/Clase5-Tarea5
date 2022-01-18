///////////////////////////////////////////////////////////////////////////////////////////////////////
//TAREA5: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
///////////////////////////////////////////////////////////////////////////////////////////////////////

document.querySelector("#boton-calcular").onclick = function () {
    calcularPromedio(arrayConvertido);
    sacarMenorNumero(arrayConvertido);
    sacarMayorNumero(arrayConvertido);
    sacarNumeroRepetido(arrayConvertido);
    document.querySelector("#resultados").hidden = false;
    return "calculao";
}

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

//////

function calcularPromedio(arrayObjetivo) {
    let sumaNumeros = 0;
    for (let i = 0; i < arrayObjetivo.length; i++) {
        sumaNumeros += arrayObjetivo[i];
    }
    let promedioNumeros = (sumaNumeros / arrayObjetivo.length).toFixed(2);
    const mensaje = document.querySelector("#mensaje-0");
    mensaje.textContent = promedioNumeros;
    return promedioNumeros;
}


///// 

function sacarMenorNumero(arrayObjetivo) {
    let numeroBase = arrayObjetivo[0];
    for (let i = 0; i < arrayObjetivo.length; i++) {
        if (arrayObjetivo[i] < numeroBase) {
            numeroBase = arrayObjetivo[i];
        }
    }
    const mensaje = document.querySelector("#mensaje-1");
    mensaje.textContent = numeroBase;
    return numeroBase;
}


////

function sacarMayorNumero(arrayObjetivo) {
    let numeroBase = 0;
    for (let i = 0; i < arrayObjetivo.length; i++) {
        let numeroCirculando = arrayObjetivo[i];
        if (numeroCirculando > numeroBase) {
            numeroBase = numeroCirculando;
        }
    }
    const mensaje = document.querySelector("#mensaje-2");
    mensaje.textContent = numeroBase;
    return numeroBase;
}


///////////

function sacarNumeroRepetido(arrayObjetivo) {
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
    const mensaje = document.querySelector("#mensaje-3");
    mensaje.textContent = numeroRepetido;
}





