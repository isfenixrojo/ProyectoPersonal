let miImage = document.querySelector('img');
miImage.onclick = function() {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'assets/images/simon.jpg') {
        miImage.setAttribute('src', 'assets/images/animal.jpg');
    } else {
        miImage.setAttribute('src', 'assets/images/simon.jpg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if (!miNombre) {
        estableceNombreUsuario();
    } else {
        localStorage.setItem('nombre', miNombre);
        miTitulo.innerHTML = 'Mozilla is genial, ' + miNombre;
    }
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}