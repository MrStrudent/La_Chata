document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form-contacto");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Formulario enviado correctamente");
        form.reset();
    });
});
