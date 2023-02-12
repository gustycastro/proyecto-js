let btnToggle = document.getElementById("fondoToggle")

let fondo = JSON.parse(localStorage.getItem("fondoNuevo")) || false;

fondo && document.body.classList.add("fondo__toggle")
!fondo && document.body.classList.remove("fondo__toggle")

btnToggle.addEventListener("click", ()=>{
    if(fondo === false){
        document.body.classList.add("fondo__toggle")
        fondo = true;
        btnToggle.innerText = `Fondo Original`
        localStorage.setItem('fondoNuevo', JSON.stringify(fondo));
    }else if(fondo === true) {
        document.body.classList.remove("fondo__toggle");
        fondo = false;
        btnToggle.innerText = `Cambiar Fondo`
        localStorage.setItem('fondoNuevo', JSON.stringify(fondo));
        
    }    
})