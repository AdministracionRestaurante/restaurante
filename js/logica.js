const modal = document.getElementById("modal-carrito");
const btnCerrar = document.getElementById("btn-cerrar-modal");
const btnCarrito = document.getElementById("btn-carrito");

btnCarrito.addEventListener("click", () => {
    modal.showModal();
});

btnCerrar.addEventListener("click", () => {
    modal.close();
});