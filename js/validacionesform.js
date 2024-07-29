document.addEventListener("DOMContentLoaded", () => {
    formValidatorInit();
});

function formValidatorInit() {
    const txtNombre = document.getElementById("txtNombre");
    const txtApellido = document.getElementById("txtNombre");
    const txtCorreo = document.getElementById("txtCorreo");
    const txtTelefono = document.getElementById("txtTelefono");
    const txtMen = document.getElementById("txtMen");

    const btnProcesar = document.getElementById("btnProcesar");

    const contactForm = document.getElementById("contactForm");

    const isEmpty = /^\s*$/gm;
    const isValidEmail = /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gm;
    const isValidHonduranCelPhone = /^\+?\(?(504)?\)?\s?[389]\d{3}[\-\s]?\d{4}$/gm;

    btnProcesar.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();

        let hasErrors = false;

        if (isEmpty.test(txtNombre.value)) {
            alert("Error: El Nombre no es valido");
            hasErrors = true;
        }

        if (isEmpty.test(txtApellido.value)) {
            alert("Error: El Apellido no es valido");
            hasErrors = true;
        }

        if (!isValidEmail.test(txtCorreo.value)) {
            alert("Error: EL Correo no es valido");
            hasErrors = true;
        }

        if (!isValidHonduranCelPhone.test(txtTelefono.value)) {
            alert("Error: Escribe un Telefono hondureño valido")
            hasErrors = true
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