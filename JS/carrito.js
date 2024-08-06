let carrito = JSON.parse(localStorage.getItem("carrito")) ?? [];


const actualizarTotal = () => {
    let total = carrito.reduce((acc, juego) => {
        let precio = parseFloat(juego.price);
        return acc + (isNaN(precio) ? 0 : precio);
    }, 0);

    let footer = document.getElementById("footer");
    if (carrito.length === 0) {
        footer.innerHTML = "<h2>El carrito está vacío.</h2>";
    } else {
        footer.innerHTML = `
            <h2>El Total es: $${total.toFixed(2)}</h2>
            <a class="comeback" href="../HTML/compraexitosa.html" id="finalizar-compra">Finalizar</a>
        `;
        document.getElementById("finalizar-compra").addEventListener("click", finalizarCompra);
    }
};

const renderProducts = () => {
    let contenedorCarrito = document.getElementById("container-carrito");
    contenedorCarrito.innerHTML = "";

    if (carrito.length === 0) {
        document.getElementById("footer").innerHTML = "<h2>El carrito está vacío.</h2>";
    } else {
        carrito.forEach((juego) => {
            let juegoTarjeta = document.createElement("div");
            juegoTarjeta.className = "juego";
            juegoTarjeta.innerHTML = `
            <img src=${juego.image}/>
            <h3>${juego.title}</h3>
            <p>$${juego.price}</p>
            <button onclick="eliminarDelCarrito(${juego.id})">Eliminar</button>
            `;
            contenedorCarrito.appendChild(juegoTarjeta);
        });
        actualizarTotal();
    }
};


const eliminarDelCarrito = (id) => {
    let index = carrito.findIndex((element) => element.id === id);
    if (index !== -1) {
        carrito.splice(index, 1);
        localStorage.setItem("carrito", JSON.stringify(carrito));
        renderProducts(); 
    } else {
        console.log(`El juego con id ${id} no se encuentra en el carrito.`);
    }
};

const finalizarCompra = () => {
    carrito = [];
    localStorage.setItem("carrito", JSON.stringify(carrito))
};

renderProducts();
