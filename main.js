
/* -------------------------------- VARIABLES ------------------------------- */
//Menu
let salirMenu 
let personajes = ""
let preguntas = false
let contador = 1

/* ---------------------------- FUNCIONES --------------------------- */
//Cartel Bienvenida
function bienvenidaUser(){
    alert(`Hola, Bienvenido/a a nuestro sitio de test MuOnline Season 4`)
}
bienvenidaUser()

function establecerPj (){

}


/* ---------------------------------- MENU ---------------------------------- */
salirMenu = true
do{
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
            personajes = prompt(`¿Como se llama su ultima evolucion?`)
            if(personajes.toLowerCase() == "blade master"){
                alert(`Felicitaciones, tu respuesta es correcta y es ${personajes}`)
            }
            else{
                alert(`Tu respuesta es incorrecta. La respuesta es Blade Master`)
            }
            personajes = prompt(`¿De que color es su pelo?`)
            if(personajes.toLowerCase() == "marron"){
                alert(`Felicitaciones, tu respuesta es correcta y es ${personajes}`)
            }else{
                alert(`Tu respuesta es incorrecta. La respuesta es marron`)
            }
        break
        case "2":
            personajes = prompt(`¿Como se llama su ultima evolucion?`)
            if(personajes.toLowerCase() == "grand master"){
                alert(`Felicitaciones, tu respuesta es correcta y es ${personajes}`)
            }
            else{
                alert(`Tu respuesta es incorrecta. La respuesta es Grand Master`)
            }
            personajes = prompt(`¿De que color es su pelo?`)
            if(personajes.toLowerCase() == "gris"){
                alert(`Felicitaciones, tu respuesta es correcta y es ${personajes}`)
            }else{
                alert(`Tu respuesta es incorrecta. La respuesta es gris`)
            }
            break
        case "3":
            personajes = prompt(`¿Como se llama su ultima evolucion?`)
            if(personajes.toLowerCase() == "high elf"){
                alert(`Felicitaciones, tu respuesta es correcta y es ${personajes}`)
            }
            else{
                alert(`Tu respuesta es incorrecta. La respuesta es High Elf`)
            }
            personajes = prompt(`¿De que color es su pelo?`)
            if(personajes.toLowerCase() == "amarillo"){
                alert(`Felicitaciones, tu respuesta es correcta y es ${personajes}`)
            }else{
                alert(`Tu respuesta es incorrecta. La respuesta es amarillo`)
            }
            break
        case "4":
            personajes = prompt(`¿Como se llama su ultima evolucion?`)
            if(personajes.toLowerCase() == "duel master"){
                alert(`Felicitaciones, tu respuesta es correcta y es ${personajes}`)
            }
            else{
                alert(`Tu respuesta es incorrecta. La respuesta es Duel Master`)
            }
            personajes = prompt(`¿De que color es su pelo?`)
            if(personajes.toLowerCase() == "rojo"){
                alert(`Felicitaciones, tu respuesta es correcta y es ${personajes}`)
            }else{
                alert(`Tu respuesta es incorrecta. La respuesta es rojo`)
            }
            break 
        case "5":
            personajes = prompt(`¿Como se llama su ultima evolucion?`)
            if(personajes.toLowerCase() == "lord emperor"){
                alert(`Felicitaciones, tu respuesta es correcta y es ${personajes}`)
            }
            else{
                alert(`Tu respuesta es incorrecta. La respuesta es Lord Emperor`)
            }
            personajes = prompt(`¿De que color es su pelo?`)
            if(personajes.toLowerCase() == "blanco"){
                alert(`Felicitaciones, tu respuesta es correcta y es ${personajes}`)
            }else{
                alert(`Tu respuesta es incorrecta. La respuesta es blanco`)
            }
            break
        case "6":
            personajes = prompt(`¿Como se llama su ultima evolucion?`)
            if(personajes.toLowerCase() == "dimension master"){
                alert(`Felicitaciones, tu respuesta es correcta y es ${personajes}`)
            }
            else{
                alert(`Tu respuesta es incorrecta. La respuesta es Dimension Master`)
            }
            personajes = prompt(`¿De que color es su pelo?`)
            if(personajes.toLowerCase() == "violeta"){
                alert(`Felicitaciones, tu respuesta es correcta y es ${personajes}`)
            }else{
                alert(`Tu respuesta es incorrecta. La respuesta es violeta`)
            }
            break
        case "0":
            console.log("Salir del menu")
            salirMenu = false
            break
        default:
            console.log("Opción no válida")
            break             
    }
}while(salirMenu)

bienvenidaUser()

