class Items{
    constructor (id, personaje, nombre, precio, imagen){
        this.id = id,
        this.personaje = personaje,
        this.nombre = nombre,
        this.precio = precio,
        this.imagen = imagen
    }
}

const wing1 = new Items(1, "Dark Knight", "Wing of Strom", 500, "wingOfStrom.jpg" )
const wing2 = new Items(2, "Dark Wizard", "Wing of Eternal", 500, "wingOfEternal.jpg")
const wing3 = new Items(3, "Fairy Elf", "Wing of Ilusion", 500, "wingOfIlusion.jpg")
const wing4 = new Items(4, "Magic Gladiator", "Wing of Destruction", 500, "wingOfDestruction.jpg")
const wing5 = new Items(5, "Dark Lord", "Cloak of Emperor", 500, "cloakOfEmperor.jpg")
const wing6 = new Items(6, "Summoner", "Wing of Dimension", 500, "wingOfDimension.jpg")
const set1 = new Items(7, "Dark Knight", "Set Brave", 1000, "setBrave.jpg")
const set2 = new Items(8, "Dark Wizard", "Set Hades", 1000, "setHades.jpg")
const set3 = new Items(9, "Fairy Elf", "Set Divine", 1000, "setDivine.jpg")
const set4 = new Items(10, "Magic Gladiator", "Set Phantom", 1000, "setPhatom.jpg")
const set5 = new Items(11, "Dark Lord", "Set Royal", 1000, "setRoyal.jpg")
const set6 = new Items(12, "Summoner", "Set Queen", 1000, "setQueen.jpg")
const arma1= new Items(13, "Dark Knight", "Sword Breaker", 300, "swordBreaker.jpg")
const arma2= new Items(14, "Dark Wizard", "Staff Imberial", 300, "imberialStaff.jpg")
const arma3= new Items(15, "Fairy Elf", "Dark Stinger", 300, "darkStringer.jpg")
const arma4= new Items(16, "Magic Gladiator", "Rune Bastard Sword", 300, "runeBastardSword.jpg")
const arma5= new Items(17, "Dark Lord", "Absolute Scepter", 300, "scepter.jpg")
const arma6= new Items(18, "Summoner", "Demonic Stick", 300, "stick.jpg")
const shield1= new Items(19, "Dark Knight", "Crimson Glory", 350, "crymsonGlory.jpg")
const shield2= new Items(20, "Dark Wizard", "Guardian Shield", 350, "guardianShield.jpg")
const shield3= new Items(21, "Magic Gladiator", "Salamander Shield", 350, "salamanderShield.jpg")
const shield4= new Items(22, "Dark Lord", "Cross Shield", 350, "crossShield.jpg")
const shield5= new Items(23, "Summoner", "Book of Lagle", 350, "book.jpg")
const ring1= new Items(24, " ", "Ring of Wind", 50, "ringOfWind.jpg")
const ring2= new Items(25, " ", "Ring of Fire", 50, "ringOfFire.jpg")
const ring3= new Items(26, " ", "Ring of Ice", 50, "ringOfIce.jpg")
const pendant1= new Items(27, " ", "Pendant of Wind", 50, "pendantOfWind.jpg")
const pendant2= new Items(28, " ", "Pendant of Fire", 50, "pendantOfFire.jpg")
const pendant3= new Items(29, " ", "Pendant of Ice", 50, "pendantOfIce.jpg")
const fenrir=new Items(30, " ", "Fenrir Gold", 450, "fenrirGold.jpg")

let webShop = []
if(localStorage.getItem("webShop")){
    for(e of JSON.parse(localStorage.getItem("webShop"))){
        let classItem = new Items(e.id, e.personaje, e.nombre, e.precio, e.imagen)
        webShop.push(classItem)
    }
}else{
    webShop.push(wing1, wing2, wing3, wing4, wing5, wing6, set1, set2, set3, set4, set5, set6, arma1, arma2, arma3, arma4, arma5, arma6, shield1, shield2, shield3, shield4, shield5, ring1, ring2, ring3, pendant1, pendant2, pendant3, fenrir)
    localStorage.setItem("webShop", JSON.stringify(webShop))
}
