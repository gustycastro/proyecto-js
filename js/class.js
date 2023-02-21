class Items{
    constructor (id, personaje, nombre, precio, imagen){
        this.id = id,
        this.personaje = personaje,
        this.nombre = nombre,
        this.precio = precio,
        this.imagen = imagen
    }
}

let webShop = []

const cargarWebShop = async () => {
    const respuesta = await fetch("items.json")
    const data = await respuesta.json()
    for(let item of data){
        let itemActual = new Items(item.id, item.personaje, item.nombre, item.precio, item.imagen)
        webShop.push(itemActual)
    }
    localStorage.setItem("webShop", JSON.stringify(webShop))
}

if(localStorage.getItem("webShop")){
    for(let item of JSON.parse(localStorage.getItem("webShop"))){
        let itemSto = new Items(item.id, item.personaje, item.nombre, item.precio, item.imagen)
        webShop.push(itemSto)
    }    
}else{
    cargarWebShop()  
}
