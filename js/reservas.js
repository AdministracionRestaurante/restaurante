const formulario = document.querySelector(".frm-cont");
const inputNombre = document.getElementById("nombre");
const inputTelefono = document.getElementById("telefono");
const inputEmail = document.getElementById("email");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    if (inputNombre.value.trim() === "" ||inputTelefono.value.trim() === "" ||inputEmail.value.trim() === "") {
        alert("Debe completar todos los campos");
        return;
    }

    if (!/^9[0-9]{8}$/.test(inputTelefono.value.trim()) || !/^[a-zA-Z0-9+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/.test(inputEmail.value.trim())) {
        alert("Debe ingresar un telefono y correo valido");
        return;
    }

    alert("¡Datos enviados correctamente!");
    formulario.reset();
});