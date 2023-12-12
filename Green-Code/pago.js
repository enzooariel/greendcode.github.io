/* ------------------------------ PAGO Y ENVIO-------------------------------------------------- */

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const locacion = document.getElementById('locacion').value;
    const fecha = document.getElementById('fecha').value;
    const metodo = document.getElementById('metodo').value;
    const cuotas = document.getElementById('cuotas').value;
    const mensaje = document.getElementById('mensaje').value;

    if (!nombre || !telefono || !email || !locacion || !fecha || !metodo || !cuotas || !mensaje) {
        alert('Por favor, completa todos los campos.');
        return;
    }

    

});


function redirigirAModal() {
    window.location.href = "index.html";
}