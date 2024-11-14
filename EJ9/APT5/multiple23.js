// Lógica para calcular los múltiplos de 23 y su suma
let suma = 0;
let listaMultiples = document.getElementById('lista-multiples');

// Calcular los múltiplos de 23 menores que 1000
for (let i = 23; i < 1000; i += 23) {
    let li = document.createElement('li');
    li.textContent = i;
    listaMultiples.appendChild(li);
    suma += i;
}

// Mostrar la suma de los múltiplos de 23
document.getElementById('suma').textContent = `La suma de los múltiplos de 23 es: ${suma}`;
