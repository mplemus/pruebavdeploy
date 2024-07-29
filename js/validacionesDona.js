document.addEventListener("DOMContentLoaded", () => {
    formValidatorInit();
});

function formValidatorInit() {
    const txtNombre = document.getElementById("txtNombre");
    const txtApellido = document.getElementById("txtApellido");
    const txtCorreo = document.getElementById("txtCorreo");
    const txtTelefono = document.getElementById("txtTelefono");
    const txtCantidad = document.getElementById("txtCantidad");
    const txtMen = document.getElementById("txtMen");
    const txtMen2 = document.getElementById("txtMen2");

    const btnProcesar = document.getElementById("btnProcesar");
    const contactForm = document.getElementById("contactForm");

    const isEmpty = /^\s*$/;
    const isValidEmail = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    const isValidHonduranCelPhone = /^(\+504)?\s?[389]\d{3}[-\s]?\d{4}$/;

    btnProcesar.addEventListener("click", (e) => {
        e.preventDefault();

        let hasErrors = false;

        if (isEmpty.test(txtNombre.value)) {
            alert("Error: El Nombre no es válido");
            hasErrors = true;
        }

        if (isEmpty.test(txtApellido.value)) {
            alert("Error: El Apellido no es válido");
            hasErrors = true;
        }

        if (!isValidEmail.test(txtCorreo.value)) {
            alert("Error: El Correo no es válido");
            hasErrors = true;
        }

        if (!isValidHonduranCelPhone.test(txtTelefono.value)) {
            alert("Error: Escribe un teléfono hondureño válido");
            hasErrors = true;
        }

        // Validación para la cantidad de donación que asegura que sea un número positivo
        if (txtCantidad.value <= 0 || isNaN(txtCantidad.value)) {
            alert("Error: La cantidad a donar debe ser un número positivo");
            hasErrors = true;
        }

        if (isEmpty.test(txtMen.value)) {
            alert("Error: Escribe un mensaje para enviar");
            hasErrors = true;
        }

        if (!hasErrors) {
            contactForm.submit();
        }
    });
}