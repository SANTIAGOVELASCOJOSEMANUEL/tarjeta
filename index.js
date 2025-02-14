function abrirRegalo() {
    // Oculta la pantalla de inicio
    document.querySelector('.inicio').style.display = 'none';

    // Muestra el contenido
    document.querySelector('.contenido').style.display = 'block';

    // Crea corazones animados
    setInterval(crearCorazon, 300);
}

function crearCorazon() {
    const corazon = document.createElement('div');
    corazon.classList.add('corazon');
    corazon.style.left = Math.random() * 100 + 'vw';
    corazon.style.animationDuration = Math.random() * 3 + 2 + 's';
    corazon.style.opacity = Math.random();
    document.body.appendChild(corazon);

    // Elimina los corazones después de que termina la animación
    setTimeout(() => {
        corazon.remove();
    }, 5000);
}