
/* -------------------------------- VARIABLES ------------------------------- */
//Menu
let salirMenu 
let personajes = ""

/* ---------------------------- FUNCIONES --------------------------- */
//Cartel Bienvenida
function bienvenidaUser(){
    alert(`Hola, Bienvenido/a a nuestro sitio de test MuOnline Season 4`)
}
bienvenidaUser()

//en proceso
//function restablecerPj (){}

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
            let preguntas1 = false
            let contador1 = 1
            do{
                personajes = prompt(`¿Como se llama su ultima evolucion? Chance N° ${contador1}`)
                if(personajes.toLowerCase() == "blade master"){
                    alert(`Felicitaciones, tu respuesta es correcta y es ${personajes}`)
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
                    alert(`Felicitaciones, tu respuesta es correcta y es ${personajes}`)
                    preguntas1 = true
                }else{
                    alert(`Tu respuesta es incorrecta. Siga intentado`)
                    contador1++
                    if(contador1 == 4){
                        alert(`Has perdido. La respuesta correcta es marron`)
                    }
                }
            }while(!preguntas1 && contador1 < 4)    
        break

        case "2":
            let preguntas2 = false
            let contador2 = 1
            do{
                personajes = prompt(`¿Como se llama su ultima evolucion? Chance N° ${contador2}`)
                if(personajes.toLowerCase() == "grand master"){
                    alert(`Felicitaciones, tu respuesta es correcta y es ${personajes}`)
                    preguntas2 = true
                }
                else{
                    alert(`Tu respuesta es incorrecta. Siga intentado`)
                    contador2++
                    if(contador2 == 4){
                        alert(`Has perdido. La respuesta correcta era grand master`)
                    }
                }
            }while(!preguntas2 && contador2 < 4)
            preguntas2 = false
            contador2 = 1
            do{
                personajes = prompt(`¿De que color es su pelo? Chance N° ${contador2}`)
                if(personajes.toLowerCase() == "gris"){
                    alert(`Felicitaciones, tu respuesta es correcta y es ${personajes}`)
                    preguntas2 = true
                }else{
                    alert(`Tu respuesta es incorrecta. Siga intentado`)
                    contador2++
                    if(contador2 == 4){
                        alert(`Has perdido. La respuesta correcta es gris`)
                    }
                }
            }while(!preguntas2 && contador2 < 4)
            break

        case "3":
            let preguntas3 = false
            let contador3 = 1
            do{
                personajes = prompt(`¿Como se llama su ultima evolucion? Chance N° ${contador3}`)
                if(personajes.toLowerCase() == "high elf"){
                    alert(`Felicitaciones, tu respuesta es correcta y es ${personajes}`)
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
                    alert(`Felicitaciones, tu respuesta es correcta y es ${personajes}`)
                    preguntas3 = true
                }else{
                    alert(`Tu respuesta es incorrecta. Siga intentado`)
                    contador3++
                    if(contador3 == 4){
                        alert(`Has perdido. La respuesta correcta es amarillo`)
                    }
                }
            }while(!preguntas3 && contador3 < 4)
            break

        case "4":
            let preguntas4 = false
            let contador4 = 1
            do{
                personajes = prompt(`¿Como se llama su ultima evolucion? Chance N° ${contador4}`)
                if(personajes.toLowerCase() == "duel master"){
                    alert(`Felicitaciones, tu respuesta es correcta y es ${personajes}`)
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
                    alert(`Felicitaciones, tu respuesta es correcta y es ${personajes}`)
                    preguntas4 = true
                }else{
                    alert(`Tu respuesta es incorrecta. Siga intentado`)
                    contador4++
                    if(contador4 == 4){
                        alert(`Has perdido. La respuesta correcta es rojo`)
                    }
                }
            }while(!preguntas4 && contador4 < 4)
            break

        case "5":
            let preguntas5 = false
            let contador5 = 1
            do{
                personajes = prompt(`¿Como se llama su ultima evolucion? Chance N° ${contador5}`)
                if(personajes.toLowerCase() == "lord emperor"){
                    alert(`Felicitaciones, tu respuesta es correcta y es ${personajes}`)
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
                    alert(`Felicitaciones, tu respuesta es correcta y es ${personajes}`)
                    preguntas5 = true
                }else{
                    alert(`Tu respuesta es incorrecta. Siga intentado`)
                    contador5++
                    if(contador5 == 4){
                        alert(`Has perdido. La respuesta correcta es blanco`)
                    }
                }
            }while(!preguntas5 && contador5 < 4)
            break

        case "6":
            let preguntas6 = false
            let contador6 = 1
            do{
                personajes = prompt(`¿Como se llama su ultima evolucion? Chance N° ${contador6}`)
                if(personajes.toLowerCase() == "dimension master"){
                    alert(`Felicitaciones, tu respuesta es correcta y es ${personajes}`)
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
                    alert(`Felicitaciones, tu respuesta es correcta y es ${personajes}`)
                    preguntas6 = true
                }else{
                    alert(`Tu respuesta es incorrecta. Siga intentado`)
                    contador6++
                    if(contador6 == 4){
                        alert(`Has perdido. La respuesta correcta es violeta`)
                    }
                }
            }while(!preguntas6 && contador6 < 4)

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

