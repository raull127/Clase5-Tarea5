///////////////////////////////////////////////////////////////////////////////////////////////////////
//TAREA5: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."
///////////////////////////////////////////////////////////////////////////////////////////////////////

let nodoAConvertir = document.querySelectorAll("li");

const convertirAArray = function (elementoLlamado) {
    const nodeListNumeros = elementoLlamado;
    const arrayNumeros = [];
    for (let i = 0; i < nodeListNumeros.length; i++) {
        arrayNumeros.push(Number(nodeListNumeros[i].innerText));
    }
    return arrayNumeros;
}

let arrayConvertido = convertirAArray(nodoAConvertir);

console.log(arrayConvertido);

////////


function calcularPromedio(arrayObjetivo) {
    let sumaNumeros = 0;
    for (let i = 0; i < arrayObjetivo.length; i++) {
        sumaNumeros = sumaNumeros + arrayObjetivo[i];
        /// console.log(sumaNumeros)
    }
    const promedioNumeros = sumaNumeros / arrayObjetivo.length;
    /// console.log(promedioNumeros)
    const mensaje = document.querySelector("#mensaje-0");
    mensaje.textContent = promedioNumeros;

    return promedioNumeros;
}

calcularPromedio(arrayConvertido);

