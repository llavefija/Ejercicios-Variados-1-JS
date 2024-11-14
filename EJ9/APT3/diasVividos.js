// Función que calcula los días vividos y muestra el resultado de acuerdo al método
function calcularDiasVividos(metodo) {
    const nombre = prompt("¿Cuál es tu nombre?");
    const edad = prompt("¿Cuántos años tienes?");
    const diasVividos = edad * 365; // Calculamos los días vividos

    if (metodo === 'alerta') {
        // Mostrar en alerta
        alert(`Hola ${nombre}, has vivido aproximadamente ${diasVividos} días.`);
    } else if (metodo === 'escribir') {
        // Mostrar en la página (cuando se utiliza document.write())
        document.write(`Hola ${nombre}, has vivido aproximadamente ${diasVividos} días.`);
    }
}
