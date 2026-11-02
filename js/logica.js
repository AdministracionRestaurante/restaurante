let carrito = [];
const modal = document.getElementById("modal-carrito");
const btnCerrar = document.getElementById("btn-cerrar-modal");
const btnCarrito = document.getElementById("btn-carrito");
const reporteCarrito = document.getElementById("reporte-carrito");
const totalPagarTxt = document.getElementById("total-pagar");
const formCompra = document.getElementById("form-compra");
const inputDireccion = document.getElementById("direccion-cliente");
const btnAgregar = document.querySelectorAll(".btn-agregar");

function agregarProducto(nombre, precio) {
    const itemExistente = carrito.find(i => i.nombre === nombre);
    if (itemExistente) itemExistente.cantidad += 1;
    else carrito.push({ nombre, precio, cantidad: 1 });
    alert(`¡Se agregó ${nombre} al carrito con éxito!`);
}

function mostrarReporte() {
    reporteCarrito.innerHTML = "";
    if (carrito.length === 0) {
        reporteCarrito.innerHTML = "<p style='text-align:center;'>El carrito está vacío actualmente.</p>";
    }

    let sumaTotal = 0;

    carrito.forEach(i => {
        const subtotal = i.precio * i.cantidad;
        sumaTotal += subtotal;

        const divItem = document.createElement("div");
        divItem.className = "item-reporte";
        divItem.innerHTML = `
            <span>${i.nombre} x ${i.cantidad}</span>
            <span>S/ ${subtotal.toFixed(2)}</span>
        `;
        reporteCarrito.appendChild(divItem);
    });

    totalPagarTxt.textContent = `Total a pagar: S/ ${sumaTotal.toFixed(2)}`;
    
}


btnCarrito.addEventListener("click", () => {
    mostrarReporte();
    modal.showModal();
});

btnCerrar.addEventListener("click", () => {
    modal.close();
});

btnAgregar.forEach(btn => {
    btn.addEventListener("click", (e) => {
        const nombre = e.target.getAttribute("data-name");
        const precio = parseFloat(e.target.getAttribute("data-price"));
        agregarProducto(nombre, precio);
    });
});

document.querySelectorAll('input[name="tipo-entrega"]').forEach(i => {
    i.addEventListener('change', (e) => {
        if (e.target.value.toLowerCase() === "recojo"){
            inputDireccion.required = false;
            inputDireccion.style.display = "none";
        }
            
        else{
            inputDireccion.required = true;
            inputDireccion.style.display = "block";
        } 
        
    });
});


formCompra.addEventListener("submit", (e) => {
    e.preventDefault();

    if (carrito.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    modal.close();

    alert(`¡Compra Registrada Exitosamente!\n¡Muchas gracias por elegir a Rincón del Sabor!\n\nHaga click en aceptar para volver al menú`);

    carrito = [];
    formCompra.reset();
    inputDireccion.style.display = "block";
});

console.log(carrito);