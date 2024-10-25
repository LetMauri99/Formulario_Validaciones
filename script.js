document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); //Esto evitara que se mande por defecto

    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const generoHombre = document.getElementById('hombre').checked;
    const generoMujer = document.getElementById('mujer').checked;
    const terminos = document.getElementById('terminos').checked;
    if (nombre === '') {
        alert('Es necesario llenar el campo "Nombre"');
        return;
    }

    if (apellido === '') {
        alert('Es necesario llenar el campo "Apellido"');
        return;
    }

    if (!generoHombre && !generoMujer) {
        alert('Es necesario seleccionar el género');
        return;
    }

    if (!terminos) {
        alert('Debes aceptar los Términos y Condiciones');
        return;
    }
    alert('Formulario enviado con éxito');
});
