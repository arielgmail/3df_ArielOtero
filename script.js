// Cambios en eventos y validación de formulario
document.getElementById('open-popup-btn').addEventListener('click', function() {
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.popup').style.display = 'block';
});

document.getElementById('close-popup-btn').addEventListener('click', function() {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.popup').style.display = 'none';
});

document.getElementById('subscribe-btn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        alert('SUSCRIPTO CON ÉXITO');
        document.querySelector('.overlay').style.display = 'none';
        document.querySelector('.popup').style.display = 'none';
    } else {
        alert('Por favor, ingresa una dirección de correo electrónico válida.');
    }
});

// Abre la ventana emergente al hacer clic en el botón "Abrir Ventana Emergente"
document.getElementById('open-popup-btn').addEventListener('click', function() {
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.popup').style.display = 'block';
});

// Cierra la ventana emergente al hacer clic en el botón "Cerrar"
document.getElementById('close-popup-btn').addEventListener('click', function() {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.popup').style.display = 'none';
});

// Al hacer clic en el botón "Suscribirse"
document.getElementById('subscribe-btn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
        alert('SUSCRIPTO CON ÉXITO');
        document.querySelector('.overlay').style.display = 'none';
        document.querySelector('.popup').style.display = 'none';
    } else {
        alert('Por favor, ingresa una dirección de correo electrónico válida.');
    }
});

function validateForm() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (nombre === "" || email === "") {
        document.getElementById("mensaje").textContent = "Por favor, completa todos los campos.";
        return false;
    } else if (!email.match(emailRegex)) {
        document.getElementById("mensaje").textContent = "Por favor, ingresa una dirección de correo electrónico válida.";
        return false;
    }

    return true;
}

// JavaScript para consumir la API JSONPlaceholder
fetch('c:\Users\Mi Pc\Desktop\curso 3df\Trabajo Final 3dF\apiData.html')
    .then(response => response.json())
    .then(data => {
        // Manipula los datos de la API aquí
        var apiDataElement = document.getElementById('apiData');
        apiDataElement.innerHTML = `
            <h2>${data.title}</h2>
            <p>${data.body}</p>
        `;
    })
    $(document).ready(function(){
        $('#carouselExample').carousel({
          interval: 3000, // Cambia cada 3 segundos (ajusta según sea necesario)
          keyboard: true
        });
      });