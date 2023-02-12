
/* -------------------------------- VARIABLES ------------------------------- */

let inputBuscador = document.getElementById("buscar")
let shopDiv = document.getElementById("shop")
let menorPrecio = document.getElementById("menorPrecio")
let modalbBodyCarrito = document.getElementById("modal__bodyCarrito")
let btnCarrito = document.getElementById("btnCarrito")
let precioTotal = document.getElementById("precioTotal")
let btnScroll = document.getElementById("btnScroll")

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
if(localStorage.getItem("carrito")){
    itemsEnCarrito = JSON.parse(localStorage.getItem("carrito"))
}else{
    itemsEnCarrito = []
    localStorage.getItem("carrito")
}
function agregarAlCarrito(items){
    let itemAgregado = itemsEnCarrito.find((elem)=>elem.id == items.id)
    if(itemAgregado == undefined){
        alert(`${items.nombre} ha sido agregado al carrito`)
        itemsEnCarrito.push(items)
        localStorage.setItem("carrito", JSON.stringify(itemsEnCarrito))
    }else{
        alert("Ya se encuentra en el carrito")
    }
    
}

function compraTotal(array){
    let sumaTotal = 0
    for(let items of array){
        sumaTotal = sumaTotal + items.precio
    }
    precioTotal.innerHTML= `El precio total es: ${sumaTotal} cash`
}

//agregar items en carrito
function agregarItemsCarrito(array){
    modalbBodyCarrito.innerHTML = ""
    array.forEach((itemsCarrito) => {
        modalbBodyCarrito.innerHTML +=`
        <div class="card border-primary mb-3" id ="itemsCarrito${itemsCarrito.id}" style="max-width: 300px;">
            <img class="card-img-top" height="300px" src="./css/img/${itemsCarrito.imagen}" alt="${itemsCarrito.nombre}">
            <div class="card-body">
                    <h4 class="card-title">${itemsCarrito.nombre}</h4>
                    <p class="card-text">$${itemsCarrito.precio}</p> 
                    <button class= "btn btn-danger" id="botonEliminar${itemsCarrito.id}"><i class="fas fa-trash-alt"></i></button>
            </div>    
        </div>`
        
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
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        document.getElementById("btnScroll").style.display = "block"
    }else{
        document.getElementById("btnScroll").style.display = "none"
    }
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
    if(menorPrecio.value == "1"){
        ordenarMenorMayor(webShop)
    }else{
        verWebShop(webShop)
    }
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