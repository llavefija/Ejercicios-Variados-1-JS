// Función para cambiar la imagen basada en la opción seleccionada
function cambiarImagen() {
    const opcion = document.querySelector('select').value;
    const imagen = document.getElementById('imagen');

    if (opcion === 'img1') {
        imagen.src = 'https://via.placeholder.com/300/FF0000/FFFFFF?text=Imagen+1';
    } else if (opcion === 'img2') {
        imagen.src = 'https://via.placeholder.com/300/00FF00/FFFFFF?text=Imagen+2';
    } else if (opcion === 'img3') {
        imagen.src = 'https://via.placeholder.com/300/0000FF/FFFFFF?text=Imagen+3';
    }
}
