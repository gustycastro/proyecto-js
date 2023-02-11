
/* -------------------------------- VARIABLES ------------------------------- */
let botonComenzar = document.getElementById("btnComenzar")
let opcion0 = document.getElementById("op0")
let opcion1 = document.getElementById("op1")
let opcion2 = document.getElementById("op2")
let botonVolverInicio = document.getElementById("btnVolverInicio")

//Test de personajes
//cargo en un array las imganes de los personajes. Este sera el orden que se mostrarán
let personajes = ["bladeMaster.jpg", "grandMaster.jpg", "fairyElf.jpg", "duelMaster.jpg", "lordEmperor.jpg", "summoner.jpg"]

//array que guardara la opcion correcta
let correcta = [2,2,1,1,0,0]

//array que guardara los personajes a mostrar en cada jugada
let opciones = []
//cargo en el array opciones las opciones a mostrar en cada jugada
opciones.push(["BLADE KNIGHT", "DARK KNIGHT", "BLADE MASTER"])
opciones.push(["DARK WIZARD", "SOUL MASTER", "GRAND MASTER"])
opciones.push(["MUSE ELF", "FAIRY ELF", "HIGH ELF"])
opciones.push(["MAGIC GLADIADOR", "DUEL MASTER", "MAGIC KNIGHT"])
opciones.push(["LORD EMPEROR", "DARK LORD", "EMPIRE LORD"])
opciones.push(["SUMMONER", "DIMENSION MASTER", "BLOODY SUMMONER"])

//variable que guarda la posicion actual
let posActual = 0
//variable que guarda la cantidad acertadas hasta el momento
let cantidadAcertadas = 0

/* -------------------------------- FUNCIONES ------------------------------- */
function comenzarJuego(){
    //reseteamos las variables
    posActual = 0
    cantidadAcertadas = 0
    //activamos las pantallas necesarias
    document.getElementById("pantalla__inicial").style.display = "none"
    document.getElementById("pantalla__juego").style.display = "block"
    cargarPersonaje()
}

//funcion que carga el siguiente personaje y sus opciones
function cargarPersonaje(){
    //controlo si se acabaron los personajes
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
    document.getElementById("pantalla__juego").style.display = "none"
    document.getElementById("pantalla__final").style.display = "block"
    //agreamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas
    document.getElementById("numIncorrectas").innerHTML = personajes.length - cantidadAcertadas
}

function volverAlInicio(){
    //ocultamos las pantallas y activamos la inicial
    document.getElementById("pantalla__final").style.display = "none"
    document.getElementById("pantalla__inicial").style.display = "block"
    document.getElementById("pantalla__juego").style.display = "none"
}

/* --------------------------------- EVENTOS -------------------------------- */
//test personajes
botonComenzar.addEventListener("click", ()=>{
    comenzarJuego()
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

botonVolverInicio.addEventListener("click", ()=>{
    volverAlInicio()
})