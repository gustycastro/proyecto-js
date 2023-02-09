
/* -------------------------------- VARIABLES ------------------------------- */

let personajes = ""
let inputBuscador = document.getElementById("buscar")
let testBtn = document.getElementById("testBtn")
let shopDiv = document.getElementById("shop")
let menorPrecio = document.getElementById("menorPrecio")
let modalbBodyCarrito = document.getElementById("modal__bodyCarrito")
let btnCarrito = document.getElementById("btnCarrito")
let precioTotal = document.getElementById("precioTotal")


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

//Preguntas iteractivas para el usuario (mas agregados en proceso)
//Dark Knight
function preguntas1(){
    let preguntas1 = false
    let contador1 = 1
        do{
            personajes = prompt(`¿Como se llama su ultima evolucion? Chance N° ${contador1}`)
            if(personajes.toLowerCase() == "blade master"){
                alert(`Felicitaciones, tu respuesta es correcta y es Blade Master`)
                preguntas1 = true
            }
            else{
                alert(`Tu respuesta es incorrecta. Siga intentado`)
                contador1++
                if(contador1 == 4){
                    alert(`Has perdido. La respuesta correcta era Blade Master`)
                }
            }
        }while(!preguntas1 && contador1 < 4)
    preguntas1 = false
    contador1 = 1
        do{
            personajes = prompt(`¿De que color es su pelo? Chance N° ${contador1}`)
            if(personajes.toLowerCase() == "marron"){
                alert(`Felicitaciones, tu respuesta es correcta y es marron`)
                preguntas1 = true
            }else{
                alert(`Tu respuesta es incorrecta. Siga intentado`)
                contador1++
                if(contador1 == 4){
                    alert(`Has perdido. La respuesta correcta es marron`)
                }
            }
        }while(!preguntas1 && contador1 < 4)
}
//Dark Wizard
function preguntas2(){
    let preguntas2 = false
    let contador2 = 1
        do{
            personajes = prompt(`¿Como se llama su ultima evolucion? Chance N° ${contador2}`)
            if(personajes.toLowerCase() == "grand master"){
                alert(`Felicitaciones, tu respuesta es correcta y es Grand Master`)
                preguntas2 = true
            }
            else{
                alert(`Tu respuesta es incorrecta. Siga intentado`)
                contador2++
                if(contador2 == 4){
                    alert(`Has perdido. La respuesta correcta era Grand Master`)
                }
            }
        }while(!preguntas2 && contador2 < 4)
    preguntas2 = false
    contador2 = 1
        do{
            personajes = prompt(`¿De que color es su pelo? Chance N° ${contador2}`)
            if(personajes.toLowerCase() == "gris"){
                alert(`Felicitaciones, tu respuesta es correcta y es gris`)
                preguntas2 = true
            }else{
                alert(`Tu respuesta es incorrecta. Siga intentado`)
                contador2++
                if(contador2 == 4){
                    alert(`Has perdido. La respuesta correcta es gris`)
                }
            }
        }while(!preguntas2 && contador2 < 4)
}
//Fairy Elf
function preguntas3(){
    let preguntas3 = false
    let contador3 = 1
        do{
            personajes = prompt(`¿Como se llama su ultima evolucion? Chance N° ${contador3}`)
            if(personajes.toLowerCase() == "high elf"){
                alert(`Felicitaciones, tu respuesta es correcta y es High Elf`)
                preguntas3 = true
            }
            else{
                alert(`Tu respuesta es incorrecta. Siga intentado`)
                contador3++
                if(contador3 == 4){
                    alert(`Has perdido. La respuesta correcta es High Elf`)
                }
            }
        }while(!preguntas3 && contador3 < 4)
    preguntas3 = false
    contador3 = 1
        do{
            personajes = prompt(`¿De que color es su pelo? Chance N° ${contador3}`)
            if(personajes.toLowerCase() == "amarillo"){
                alert(`Felicitaciones, tu respuesta es correcta y es amarillo`)
                preguntas3 = true
            }else{
                alert(`Tu respuesta es incorrecta. Siga intentado`)
                contador3++
                if(contador3 == 4){
                    alert(`Has perdido. La respuesta correcta es amarillo`)
                }
            }
        }while(!preguntas3 && contador3 < 4)
}
//Magic Gladiator
function preguntas4(){
    let preguntas4 = false
    let contador4 = 1
        do{
            personajes = prompt(`¿Como se llama su ultima evolucion? Chance N° ${contador4}`)
            if(personajes.toLowerCase() == "duel master"){
                alert(`Felicitaciones, tu respuesta es correcta y es Duel Master`)
                preguntas4 = true
            }
            else{
                alert(`Tu respuesta es incorrecta. Siga intentado`)
                contador4++
                if(contador4 == 4){
                    alert(`Has perdido. La respuesta correcta es Duel Master`)
                }
            }
        }while(!preguntas4 && contador4 < 4)
    preguntas4 = false
    contador4 = 1
        do{
            personajes = prompt(`¿De que color es su pelo? Chance N° ${contador4}`)
            if(personajes.toLowerCase() == "rojo"){
                alert(`Felicitaciones, tu respuesta es correcta y es rojo`)
                preguntas4 = true
            }else{
                alert(`Tu respuesta es incorrecta. Siga intentado`)
                contador4++
                if(contador4 == 4){
                    alert(`Has perdido. La respuesta correcta es rojo`)
                }
            }
        }while(!preguntas4 && contador4 < 4)
}
//Dark Lord
function preguntas5(){
    let preguntas5 = false
    let contador5 = 1
        do{
            personajes = prompt(`¿Como se llama su ultima evolucion? Chance N° ${contador5}`)
            if(personajes.toLowerCase() == "lord emperor"){
                alert(`Felicitaciones, tu respuesta es correcta y es Lord Emperor`)
                preguntas5 = true
            }
            else{
                alert(`Tu respuesta es incorrecta. Siga intentado`)
                contador5++
                if(contador5 == 4){
                    alert(`Has perdido. La respuesta correcta es Lord Emperor`)
                }
            }
        }while(!preguntas5 && contador5 < 4)
    preguntas5 = false
    contador5 = 1
        do{
            personajes = prompt(`¿De que color es su pelo? Chance N° ${contador5}`)
            if(personajes.toLowerCase() == "blanco"){
                alert(`Felicitaciones, tu respuesta es correcta y es blanco`)
                preguntas5 = true
            }else{
                alert(`Tu respuesta es incorrecta. Siga intentado`)
                contador5++
                if(contador5 == 4){
                    alert(`Has perdido. La respuesta correcta es blanco`)
                }
            }
        }while(!preguntas5 && contador5 < 4)
}
//Summoner
function preguntas6(){
    let preguntas6 = false
    let contador6 = 1
        do{
            personajes = prompt(`¿Como se llama su ultima evolucion? Chance N° ${contador6}`)
            if(personajes.toLowerCase() == "dimension master"){
                alert(`Felicitaciones, tu respuesta es correcta y es Dimension Master`)
                preguntas6 = true
            }
            else{
                alert(`Tu respuesta es incorrecta. Siga intentado`)
                contador6++
                if(contador6 == 4){
                    alert(`Has perdido. La respuesta correcta es Dimension Master`)
                }
            }
        }while(!preguntas6 && contador6 < 4)
    preguntas6 = false
    contador6 = 1
        do{
            personajes = prompt(`¿De que color es su pelo? Chance N° ${contador6}`)
            if(personajes.toLowerCase() == "violeta"){
                alert(`Felicitaciones, tu respuesta es correcta y es violeta`)
                preguntas6 = true
            }else{
                alert(`Tu respuesta es incorrecta. Siga intentado`)
                contador6++
                if(contador6 == 4){
                    alert(`Has perdido. La respuesta correcta es violeta`)
                }
            }
        }while(!preguntas6 && contador6 < 4)
}

//Menu de preguntas
function menuPj(){
    let salirMenu = false
    do{
        salirMenu = preguntarPersonajes(salirMenu)
    }while(!salirMenu)
}

function preguntarPersonajes(salir){
    let opcionMenu = prompt(`Elegi tu personaje favorito (Presiona el numero que corresponda)
        1 - Dark Knight
        2 - Dark Wizard
        3 - Fairy Elf
        4 - Magic Gladiator
        5 - Dark Lord
        6 - Summoner
        0 - Salir del menu`)

    switch(opcionMenu){
        case "1":
            preguntas1()
        break
        case "2":
            preguntas2()
        break
        case "3":
            preguntas3()
        break
        case "4":
            preguntas4()    
        break
        case "5":
            preguntas5()    
        break
        case "6":
            preguntas6()
        break
        case "0":
            alert("Gracias por participar en el test de preguntas")
            salir = true
            return salir 
        break
        default:
            alert("Ingrese una opcion, en el caso de salir precionar 0")
        break             
    }
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
//test preguntas
testBtn.onclick = function(){
    menuPj(preguntarPersonajes)
}

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
