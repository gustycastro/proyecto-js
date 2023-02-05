class Items{
    constructor (id, personaje, nombre, precio){
        this.id = id,
        this.personaje = personaje,
        this.nombre = nombre,
        this.precio = precio
    }
}

const wing1 = new Items(1, "Dark Knight", "Wing of Strom", 500 )
const wing2 = new Items(2, "Dark Wizard", "Wing of Eternal", 500)
const wing3 = new Items(3, "Fairy Elf", "Wing of Ilusion", 500)
const wing4 = new Items(4, "Magic Gladiator", "Wing of Destruction", 500)
const wing5 = new Items(5, "Dark Lord", "Cloak of Emperor", 500)
const wing6 = new Items(6, "Summoner", "Wing of Dimension", 500)
const set1 = new Items(7, "Dark Knight", "Set Brave", 1000)
const set2 = new Items(8, "Dark Wizard", "Set Hades", 1000)
const set3 = new Items(9, "Fairy Elf", "Set Divine", 1000)
const set4 = new Items(10, "Magic Gladiator", "Set Phantom", 1000)
const set5 = new Items(11, "Dark Lord", "Set Royal", 1000)
const set6 = new Items(12, "Summoner", "Set Queen", 1000)
const arma1= new Items(19, "Dark Knight", "Sword Breaker", 300)
const arma2= new Items(20, "Dark Wizard", "Staff Imberial", 300)
const arma3= new Items(21, "Fairy Elf", "Dark Stinger", 300 )
const arma4= new Items(22, "Magic Gladiator", "Rune Bastard Sword", 300 )
const arma5= new Items(23, "Dark Lord", "Absolute Scepter", 300)
const arma6= new Items(24, "Summoner", "Demonic Stick", 300 )
const shield1= new Items(19, "Dark Knight", "Crimson Glory", 350)
const shield2= new Items(20, "Dark Wizard", "Guardian Shield", 350)
const shield3= new Items(22, "Magic Gladiator", "Salamander Shield", 350)
const shield4= new Items(23, "Dark Lord", "Cross Shield", 350)
const shield5= new Items(24, "Summoner", "Book of Lagle", 350)
const ring1= new Items(13, " ", "Ring of Wind", 50)
const ring2= new Items(14, " ", "Ring of Fire", 50)
const ring3= new Items(15, " ", "Ring of Ice", 50)
const pendant1= new Items(16, " ", "Pendant of Wind", 50)
const pendant2= new Items(17, " ", "Pendant of Fire", 50)
const pendant3= new Items(18, " ", "Pendant of Ice", 50)

const webShop = []
webShop.push(wing1, wing2, wing3, wing4, wing5, wing6, set1, set2, set3, set4, set5, set6, arma1, arma2, arma3, arma4, arma5, arma6, shield1, shield2, shield3, shield4, shield5, ring1, ring2, ring3, pendant1, pendant2, pendant3)
