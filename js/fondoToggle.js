let btnToggle = document.getElementById("fondoToggle")

if(localStorage.getItem("fondoNuevo")){

}else{
    localStorage.setItem("fondoNuevo", false)
}

btnToggle.addEventListener("click", ()=>{
    document.body.classList.toggle("fondo__toggle")
    if(JSON.parse(localStorage.getItem("fondoNuevo")) == false){
        btnToggle.innerText = `Fondo Original`
        localStorage.setItem("fondoNuevo", true)
    }else{
        btnToggle.innerText = `Cambiar Fondo`
        localStorage.setItem("fondoNuevo", false)
    }
})