const juegos = [
    {
        id:1,
        title: "League of Legends", 
        price: "0.00 - gratis", 
        multiplayer: true, 
        image: "https://via.placeholder.com/150", 
        platform: 1,
    },
    {
        id:2,
        title: "Valorant", 
        price: "0.00 - gratis", 
        multiplayer: true, 
        image: "https://via.placeholder.com/150", 
        platform: 1
    },
    {
        id:3,
        title: "NieR Automata", 
        price: "34.99", 
        multiplayer: false, 
        image: "https://via.placeholder.com/150", 
        platform: 3
    },
    {
        id:4,
        title: "Dark Souls", 
        price: "20.00", 
        multiplayer: true, 
        image: "https://via.placeholder.com/150", 
        platform: 3
    },
    {
        id:5,
        title: "Minecraft", 
        price: "25.00", 
        multiplayer: true, 
        image: "https://via.placeholder.com/150", 
        platform: 3
    },
    {
        id:6,
        title: "Five Nights At Freddy's", 
        price: "5.00", 
        multiplayer: false, 
        image: "https://via.placeholder.com/150", 
        platform: 1
    },
    {
        id:7,
        title: "Bloodborne", 
        price: "20.00", 
        multiplayer: true, 
        image: "https://via.placeholder.com/150", 
        platform: 2
    },
    {
        id:8,
        title: "Super Smash Bros", 
        price: "50.00", 
        multiplayer: true, 
        image: "https://via.placeholder.com/150", 
        platform: 2
    },
    {
        id:9,
        title: "The Legend Of Zelda", 
        price: "20.00", 
        multiplayer: false, 
        image: "https://via.placeholder.com/150", 
        platform: 2
    },
    {
        id:10,
        title: "Honkai Star Rail", 
        price: "0.00 - gratis", 
        multiplayer: true, 
        image: "https://via.placeholder.com/150", 
        platform: 3
    },
];
// Platforms: 1(PC), 2(Console), 3(Both)


let carrito= JSON.parse(localStorage.getItem("carrito")) ?? [];

const renderProducts = (arraydeJuegos) => {
    let contenedorJuegos = document.getElementById("container-juegos");
    contenedorJuegos.innerHTML = "";

    arraydeJuegos.forEach((juego) =>{
        let juegoTarjeta = document.createElement("div");
        juegoTarjeta.className = "juego";
        juegoTarjeta.innerHTML = `
        <img src=${juego.image}/>
        <h3>${juego.title}</h3>
        <p>$${juego.price}</p>
        <button onclick="agregarAlCarrito(${juego.id})">
        Agregar al carrito</button>
        `
        contenedorJuegos.appendChild(juegoTarjeta);
    });
};

renderProducts(juegos);

const agregarAlCarrito = (id) =>{
    let juego = juegos.find( (element) => element.id === id);
    carrito.push(juego);
    localStorage.setItem("carrito",JSON.stringify(carrito));
}


const inputBusqueda = document.getElementById("search");
if (inputBusqueda){
    inputBusqueda.addEventListener("input", (event)=>{
        let value = event.target.value.toLowerCase();
        let arrayFiltrado = juegos.filter((juego)=> 
            juego.title.toLowerCase().includes(value)
        );
        renderProducts(arrayFiltrado);
    });

}