
/* -------------------------------- VARIABLES ------------------------------- */

let personajes = ""
let inputBuscador = document.getElementById("buscar")
let shopDiv = document.getElementById("shop")
let menorPrecio = document.getElementById("menorPrecio")
let modalbBodyCarrito = document.getElementById("modal__bodyCarrito")
let btnCarrito = document.getElementById("btnCarrito")
let precioTotal = document.getElementById("precioTotal")
let botonComenzar = document.getElementById("btnComenzar")
let botonVolverInicio = document.getElementById("btnVolverInicio")
let opcion0 = document.getElementById("op0")
let opcion1 = document.getElementById("op1")
let opcion2 = document.getElementById("op2")

/* ---------------------------- FUNCIONES --------------------------- */
//Cartel Bienvenida
function bienvenidaUser(){
    alert(`Hola, Bienvenido/a a nuestro sitio de WebShop y Test de MuOnline Season 4`)
}
bienvenidaUser()

//buscador input
function buscarInfo(buscado, array){
    let busqueda = array.filter(
        (items)=> items.personaje.toLowerCase().includes(buscado.toLowerCase()) || items.nombre.toLowerCase().includes(buscado.toLowerCase())
    )
    verWebShop(busqueda)
}

//Test de personajes
//cargo en un array las imganes de los personajes. Este sera el orden que se mostrarán
personajes = ["bladeMaster.jpg", "grandMaster.jpg", "fairyElf.jpg", "duelMaster.jpg", "lordEmperor.jpg", "summoner.jpg"]

//array que guardara la opcion correcta
let correcta = [2,2,1,1,0,0]

//array que guardara los personajes a mostrar en cada jugada
let opciones = []
//cargo en el array opciones las opciones a mostrar en cada jugada
opciones.push(["PEPITO", "DARK KNIGHT", "BLADE MASTER"])
opciones.push(["DARK WIZARD", "GRAND SOUL", "GRAND MASTER"])
opciones.push(["FIRE ELF", "FAIRY ELF", "ELF FAITER"])
opciones.push(["MAGIC GLADIADOR", "DUEL MASTER", "DUEL GLADIADOR"])
opciones.push(["LORD EMPEROR", "DARK LORD", "EMPEROR DARK"])
opciones.push(["SUMMONER", "DIMENSION MASTER", "MASTER VIOLET"])

//variable que guarda la posicion actual
let posActual = 0
//variable que guarda la cantidad acertadas hasta el momento
let cantidadAcertadas = 0

function comenzarJuego(){
    //reseteamos las variables
    posActual = 0
    cantidadAcertadas = 0
    //activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none"
    document.getElementById("pantalla-juego").style.display = "block"
    cargarPersonaje()
}

//funcion que carga la siguiente bandera y sus opciones
function cargarPersonaje(){
    //controlo sis se acabaron las banderas
    if(personajes.length <= posActual){
        terminarJuego()
    }
    else{//cargo las opciones
        //limpiamos las clases que se asignaron
        limpiarOpciones();
        document.getElementById("imgPersonaje").src = "../css/img/" + personajes[posActual]
        document.getElementById("n0").innerHTML = opciones[posActual][0]
        document.getElementById("n1").innerHTML = opciones[posActual][1]
        document.getElementById("n2").innerHTML = opciones[posActual][2]
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre"
    document.getElementById("n1").className = "nombre"
    document.getElementById("n2").className = "nombre"
    document.getElementById("l0").className = "letra"
    document.getElementById("l1").className = "letra"
    document.getElementById("l2").className = "letra"
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
        //agregamos las clases para colocar el color verde a la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada"
        document.getElementById("l" + opElegida).className = "letra letraAcertada"
        cantidadAcertadas++;
    }else{//no acerto
        //agramos las clases para colocar en rojo la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada"
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada"

        //opcion que era correcta
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada"
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada"
    }
    posActual++;
    //Esperamos 1 segundo y pasamos mostrar el siguiente personaje y sus opciones
    setTimeout(cargarPersonaje,1000)
}
function terminarJuego(){
    //ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none"
    document.getElementById("pantalla-final").style.display = "block"
    //agreamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas
    document.getElementById("numIncorrectas").innerHTML = personajes.length - cantidadAcertadas
}

function volverAlInicio(){
    //ocultamos las pantallas y activamos la inicial
    document.getElementById("pantalla-final").style.display = "none"
    document.getElementById("pantalla-inicial").style.display = "block"
    document.getElementById("pantalla-juego").style.display = "none"
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

//ordenar precio
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

//test personajes
botonComenzar.addEventListener("click", ()=>{
    comenzarJuego()
})

botonVolverInicio.addEventListener("click", ()=>{
    terminarJuego()
})

opcion0.addEventListener("click", ()=>{
    comprobarRespuesta(0)
})

opcion1.addEventListener("click", ()=>{
    comprobarRespuesta(1)
})

opcion2.addEventListener("click", ()=>{
    comprobarRespuesta(2)
})