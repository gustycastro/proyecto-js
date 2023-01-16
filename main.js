function bienvenidaUser(){
    alert(`Hola, Bienvenido/a a nuestro sitio de test MuOnline Season 4`)
}
bienvenidaUser()

function menuTest(){
    let salirMenu = true
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
                let preguntaUno = false
                let contadorUno = 1
                do{
                    let personajeUno = prompt(`¿Como se llama su ultima evolucion?`)
                    if(personajeUno.toLowerCase == "blade master"){
                        alert(`Felicitaciones, tu respuesta es correcta y es ${personajeUno}`)
                        preguntaUno = true
                    }else{
                        alert(`Tu respuesta es incorrecta, siga intentadolo`)
                        contadorUno++
                        if(contadorUno == 5){
                            alert(`Has perdido. La respuesta es Blade Master`)
                        }
                    }  
                }while(!preguntaUno && contadorUno < 5)
            break
            case "2":
                let preguntaDos = false
                let contadorDos = 1
                do{
                    let personajeDos = prompt(`¿Como se llama su ultima evolucion?`)
                    if(personajeDos.toLowerCase == "grand master"){
                        alert(`Felicitaciones, tu respuesta es correcta y es ${personajeDos}`)
                        preguntaDos = true
                    }else{
                        alert(`Tu respuesta es incorrecta, siga intentadolo`)
                        contadorDos++
                        if(contadorDos == 5){
                            alert(`Has perdido. La respuesta es Grand Master`)
                        }
                    }  
                }while(!preguntaDos && contadorDos < 5)
                break
            case "3":
                let preguntaTres = false
                let contadorTres = 1
                do{
                    let personajeTres = prompt(`¿Como se llama su ultima evolucion?`)
                    if(personajeTres.toLowerCase == "high elf"){
                        alert(`Felicitaciones, tu respuesta es correcta y es ${personajeTres}`)
                        preguntaTres = true
                    }else{
                        alert(`Tu respuesta es incorrecta, siga intentadolo`)
                        contadorTres++
                        if(contadorTres == 5){
                            alert(`Has perdido. La respuesta es High Elf`)
                        }
                    }  
                }while(!preguntaTres && contadorTres < 5)
                break
            case "4":
                let preguntaCuatro = false
                let contadorCuatro = 1
                do{
                    let personajeCuatro = prompt(`¿Como se llama su ultima evolucion?`)
                    if(personajeCuatro.toLowerCase == "duel master"){
                        alert(`Felicitaciones, tu respuesta es correcta y es ${personajeCuatro}`)
                        preguntaCuatro = true
                    }else{
                        alert(`Tu respuesta es incorrecta, siga intentadolo`)
                        contadorCuatro++
                        if(contadorCuatro == 5){
                            alert(`Has perdido. La respuesta es Duel Master`)
                        }
                    }  
                }while(!preguntaCuatro && contadorCuatro < 5)
                break 
            case "5":
                let preguntaCinco = false
                let contadorCinco = 1
                do{
                    let personajeCinco = prompt(`¿Como se llama su ultima evolucion?`)
                    if(personajeCinco.toLowerCase == "lord emperor"){
                        alert(`Felicitaciones, tu respuesta es correcta y es ${personajeCinco}`)
                        preguntaCinco = true
                    }else{
                        alert(`Tu respuesta es incorrecta, siga intentadolo`)
                        contadorCinco++
                        if(contadorCinco == 5){
                            alert(`Has perdido. La respuesta es Lord Emperor`)
                        }
                    }  
                }while(!preguntaCinco && contadorCinco < 5)
                break
            case "6":
                let preguntaSeis = false
                let contadorSeis = 1
                do{
                    let personajeSeis = prompt(`¿Como se llama su ultima evolucion?`)
                    if(personajeSeis.toLowerCase == "dimension master"){
                        alert(`Felicitaciones, tu respuesta es correcta y es ${personajeSeis}`)
                        preguntaSeis = true
                    }else{
                        alert(`Tu respuesta es incorrecta, siga intentadolo`)
                        contadorSeis++
                        if(contadorSeis == 5){
                            alert(`Has perdido. La respuesta es Dimension Master`)
                        }
                    }  
                }while(!preguntaSeis && contadorSeis < 5)
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
}
menuTest()







