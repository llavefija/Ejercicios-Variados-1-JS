// Función que calcula la potencia de un número
function calcularPotencia(base, exponente) {
    // Validar si la base o el exponente son valores no válidos
    if (base == null || exponente == null) {
        return "Base o exponente no válido"; // Retorna un mensaje si alguno de los parámetros es nulo
    }

    if (base === 0 && exponente === 0) {
        return "Indeterminación (0^0)"; // Mensaje especial para 0^0
    }

    if (exponente === 0) {
        return 1; // Cualquier número elevado a 0 es 1
    }

    if (base === 0) {
        return 0; // 0 elevado a cualquier número positivo es 0
    }

    let resultado = 1; // Inicializamos el resultado en 1

    // Multiplicamos la base consigo misma tantas veces como el exponente
    for (let contador = 0; contador < exponente; contador++) {
        resultado *= base; // Multiplicamos el resultado por la base en cada iteración
    }

    return resultado; // Devuelve base^exponente
}


// Función que se ejecuta al presionar el botón
function mostrarResultado() {
    // Obtener los valores de los campos de entrada
    const base = parseFloat(document.getElementById('base').value);
    const exponente = parseFloat(document.getElementById('exponente').value);

    // Calcular la potencia
    const resultado = calcularPotencia(base, exponente);

    // Mostrar el resultado en el HTML
    document.getElementById('resultado').textContent = `Resultado: ${resultado}`;
}
