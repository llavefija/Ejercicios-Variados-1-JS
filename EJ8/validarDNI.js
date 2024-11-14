// Función para validar el DNI
function validarDNI() {
    // Obtener el valor del campo de entrada (sin la letra)
    const dni = document.getElementById('dni').value.toUpperCase(); // Convertir a mayúsculas para evitar problemas con la letra
    const dniNumber = dni.substring(0, dni.length - 1); // Obtener los 8 primeros caracteres (número)
    const dniLetter = dni[dni.length - 1]; // Obtener la letra del DNI

    // Validar que el DNI tenga 9 caracteres (8 números + 1 letra)
    if (dni.length !== 9 || isNaN(dniNumber)) {
        alert("Por favor, ingrese un DNI válido (9 caracteres: 8 números y 1 letra).");
        return;
    }

    // Calculamos la letra del DNI
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE"; // Cadena de letras
    const resto = parseInt(dniNumber) % 23; // Dividimos el número entre 23 y obtenemos el resto
    const letraCalculada = letras[resto]; // Obtenemos la letra correspondiente

    // Verificamos si la letra ingresada es correcta
    if (dniLetter === letraCalculada) {
        document.getElementById('resultado').textContent = "El DNI es válido.";
        document.getElementById('resultado').style.color = "green"; // Cambiamos el color a verde
    } else {
        document.getElementById('resultado').textContent = "El DNI no es válido.";
        document.getElementById('resultado').style.color = "red"; // Cambiamos el color a rojo
    }
}
