
/* -------------------------------- VARIABLES ------------------------------- */

let inputBuscador = document.getElementById("buscar")
let shopDiv = document.getElementById("shop")
let menorPrecio = document.getElementById("menorPrecio")
let modalBodyCarrito = document.getElementById("modalBodyCarrito")
let btnCarrito = document.getElementById("btnCarrito")
let precioTotal = document.getElementById("precioTotal")
let btnScroll = document.getElementById("btnScroll")
let fecha = document.getElementById("fecha")

/* ------------- FECHA ---------------- */
const DateTime = luxon.DateTime
const fechaHoy = DateTime.now()
let fechaActual = fechaHoy.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
fecha.innerHTML = `${fechaActual}`

/* ---------------------------- FUNCIONES --------------------------- */

//buscador input
function buscarInfo(buscado, array){
    let busqueda = array.filter(
        (items)=> items.personaje.toLowerCase().includes(buscado.toLowerCase()) || items.nombre.toLowerCase().includes(buscado.toLowerCase())
    )
    verWebShop(busqueda)
}

//carrito de compras
let itemsEnCarrito

localStorage.getItem("carrito") ? itemsEnCarrito = JSON.parse(localStorage.getItem("carrito")) : (itemsEnCarrito = [], localStorage.getItem("carrito"))

function agregarAlCarrito(items){
    let itemAgregado = itemsEnCarrito.find((elem)=>elem.id == items.id)

    itemAgregado == undefined ? (Swal.fire({
        icon: 'success',
        title: `${items.nombre} agregado a tus compras`,
        showConfirmButton: false,
        timer: 2500
        }), itemsEnCarrito.push(items), localStorage.setItem("carrito", JSON.stringify(itemsEnCarrito))) : Swal.fire({
            icon: 'warning',
            title: 'Ya se encuentra en tus compras',
            showConfirmButton: false,
            timer: 2500
            })
}

function compraTotal(array){
    let sumaTotal = array.reduce((acc, itemsCarrito)=> acc + itemsCarrito.precio, 0)
    sumaTotal == 0 ? 
    precioTotal.innerHTML=`No hay items agregados` :
    precioTotal.innerHTML= `Precio total: ${sumaTotal} cash`
    return sumaTotal
}

//agregar items en carrito
function agregarItemsCarrito(array){
    modalBodyCarrito.innerHTML = ""
    array.forEach((itemsCarrito) => {
        modalBodyCarrito.innerHTML +=`
        <div class="card border-primary mb-3" id ="itemsCarrito${itemsCarrito.id}" style="max-width: 250px;">
            <img class="card-img-top " height="250px" src="./css/img/${itemsCarrito.imagen}" alt="${itemsCarrito.nombre}">
            <div class="card-body ">
                    <h4 class="card-title">${itemsCarrito.nombre}</h4>
                    <p class="card-text">$${itemsCarrito.precio}</p> 
                    <button class= "btn btn-danger" id="botonEliminar${itemsCarrito.id}"><i class="fas fa-trash-alt"></i></button>
            </div>    
        </div>`
    })
    array.forEach((itemsCarrito)=>{
        document.getElementById(`botonEliminar${itemsCarrito.id}`).addEventListener("click", ()=>{
            let cardItems = document.getElementById(`itemsCarrito${itemsCarrito.id}`)
            cardItems.remove()
            let itemsEliminar = array.find(item => item.id == itemsCarrito.id)
            let posicion = array.indexOf(itemsEliminar)
            array.splice(posicion, 1)
            localStorage.setItem("carrito", JSON.stringify(array))
            compraTotal(array)
        })
    })
    compraTotal(array)
}

//ordenar precio (de menor a mayor)
function ordenarMenorMayor(array){
    const menorMayor = [].concat(array)
    menorMayor.sort((parametro1, parametro2) => parametro1.precio - parametro2.precio)
    verWebShop(menorMayor)
}

//WebShop
//Dom WebShop
function verWebShop(array){
    shopDiv.innerHTML = ""
    for(let items of array){
        let nuevoItemShop = document.createElement("div")
        nuevoItemShop.innerHTML = `
        <div id="${items.id}" class="row shop">
            <div class="shop__border">
                <img src="./css/img/${items.imagen}" alt="">
                <p>${items.nombre}</p>
                <p>${items.precio} cash</p>
                <button id="agregarBtn${items.id}" type="button" class="btn btn-primary">Comprar</button>
            </div>
        </div>
        `
        shopDiv.appendChild(nuevoItemShop)
        let agregarBtn = document.getElementById(`agregarBtn${items.id}`)
        agregarBtn.onclick = ()=>{
            agregarAlCarrito(items)
        }
    }
}
verWebShop(webShop)

//boton scroll

function scrollFunction(){
    document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ? document.getElementById("btnScroll").style.display = "block" : document.getElementById("btnScroll").style.display = "none"
}

function scrollUp(){
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

/* --------------------------------- EVENTOS -------------------------------- */
//buscador
inputBuscador.addEventListener("input", ()=>{
    buscarInfo(inputBuscador.value, webShop)
})

//ordenar precio
menorPrecio.addEventListener("change", ()=>{
    menorPrecio.value == "1" ? ordenarMenorMayor(webShop) : verWebShop(webShop)
})

//boton carrito
btnCarrito.addEventListener("click", ()=>{
    agregarItemsCarrito(itemsEnCarrito)
})

//boton scroll
btnScroll.addEventListener("click", ()=>{
    scrollUp()
})
document.addEventListener("scroll", ()=>{
    scrollFunction()
})

