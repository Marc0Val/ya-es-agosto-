function pruebaButtonClick() {
    var fechaActual = new Date();
    var mesActual = fechaActual.getMonth();

    if (mesActual === 0) {
        document.body.classList.add('agostoo');
        document.querySelector('h1').textContent = '¡YA ES AGOSTO!';
        pruebaButton.classList.add('oculto');
        document.getElementById('gif').style.display = 'none';
        document.getElementById('titulo').classList.add('slide');
        document.getElementById('gif').classList.add('bounce');
        document.getElementById('footer').classList.add('wobble');
    } else {
        document.querySelector('h1').textContent = 'No es Agosto XD';
        setTimeout(recargarPagina, 1500);
    }
}

var pruebaButton = document.getElementById('pruebaButton');
pruebaButton.addEventListener('click', pruebaButtonClick);

function recargarPagina() {
    window.location.reload();
}