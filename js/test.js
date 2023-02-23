
/* -------------------------------- VARIABLES ------------------------------- */
let botonComenzar = document.getElementById("btnComenzar")
let opcion0 = document.getElementById("op0")
let opcion1 = document.getElementById("op1")
let opcion2 = document.getElementById("op2")
let botonVolverInicio = document.getElementById("btnVolverInicio")
let fecha = document.getElementById("fecha")
let reloj = document.getElementById("reloj")

/* ------------- FECHA ---------------- */
const DateTime = luxon.DateTime
const fechaHoy = DateTime.now()
let fechaActual = fechaHoy.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY)
fecha.innerHTML = `${fechaActual}`

/* ------------- RELOJ ---------------- */
setInterval(()=>{
    let hora = DateTime.now().toLocaleString(DateTime.TIME_24_WITH_SECONDS)
    reloj.innerHTML = `${hora}`
}, 1000)

//Test de personajes
//cargo en un array las imganes de los personajes.
let personajes = ["bladeMaster.jpg", "grandMaster.jpg", "fairyElf.jpg", "duelMaster.jpg", "lordEmperor.jpg", "summoner.jpg"]

//array que guardara la opcion correcta.
let correcta = [2,2,1,1,0,0]

//array que guardara los personajes a mostrar en cada jugada.
let opciones = []
//cargo en el array opciones las opciones a mostrar en cada jugada.
opciones.push(["BLADE KNIGHT", "DARK KNIGHT", "BLADE MASTER"])
opciones.push(["DARK WIZARD", "SOUL MASTER", "GRAND MASTER"])
opciones.push(["MUSE ELF", "FAIRY ELF", "HIGH ELF"])
opciones.push(["MAGIC GLADIADOR", "DUEL MASTER", "MAGIC KNIGHT"])
opciones.push(["LORD EMPEROR", "DARK LORD", "EMPIRE LORD"])
opciones.push(["SUMMONER", "DIMENSION MASTER", "BLOODY SUMMONER"])

//variable que guarda la posicion actual.
let posActual = 0
//variable que guarda la cantidad acertadas hasta el momento.
let cantidadAcertadas = 0

/* -------------------------------- FUNCIONES ------------------------------- */
//comenzar juego.
function comenzarJuego(){
    posActual = 0
    cantidadAcertadas = 0
    //activamos las pantallas necesarias.
    document.getElementById("pantallaInicial").style.display = "none"
    document.getElementById("pantallaJuego").style.display = "block"
    cargarPersonaje()
}

//funcion que carga el siguiente personaje y sus opciones.
function cargarPersonaje(){
    //controlo si se acabaron los personajes.
    if(personajes.length <= posActual){
        terminarJuego()
    }
    else{
        //limpiamos las clases que se asignaron.
        limpiarOpciones();
        document.getElementById("imgPersonaje").src = "../css/img/" + personajes[posActual]
        document.getElementById("n0").innerHTML = opciones[posActual][0]
        document.getElementById("n1").innerHTML = opciones[posActual][1]
        document.getElementById("n2").innerHTML = opciones[posActual][2]
    }
}

//limpiar opciones.
function limpiarOpciones(){
    document.getElementById("n0").className = "nombre"
    document.getElementById("n1").className = "nombre"
    document.getElementById("n2").className = "nombre"
    document.getElementById("l0").className = "letra"
    document.getElementById("l1").className = "letra"
    document.getElementById("l2").className = "letra"
}

//comprobar respuestas.
function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){
        //agregamos las clases para colocar el color verde a la opcion elegida.
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada"
        document.getElementById("l" + opElegida).className = "letra letraAcertada"
        cantidadAcertadas++;
    }else{
        //agramos las clases para colocar en rojo la opcion elegida.
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada"
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada"
        //opcion que era correcta.
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada"
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada"
    }
    posActual++;
    //Esperamos el tiempo asignadoy pasamos mostrar el siguiente personaje y sus opciones.
    setTimeout(()=>{
        cargarPersonaje()
    }, 300)
}

function terminarJuego(){
    //ocultamos las pantallas y mostramos la pantalla final.
    document.getElementById("pantallaJuego").style.display = "none"
    document.getElementById("pantallaFinal").style.display = "block"
    //agreamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas
    document.getElementById("numIncorrectas").innerHTML = personajes.length - cantidadAcertadas
}

function volverAlInicio(){
    //ocultamos las pantallas y activamos la inicial.
    document.getElementById("pantallaFinal").style.display = "none"
    document.getElementById("pantallaInicial").style.display = "block"
    document.getElementById("pantallaJuego").style.display = "none"
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