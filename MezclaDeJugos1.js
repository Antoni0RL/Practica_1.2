let jugo1 = window.prompt("Que bebida va pedir: ")
let jugo = jugo1.toLowerCase()
let lista_jugos = ["pure strawberry joy", "energizer", "green garden", "tropical island", "all or nothing", "oferta especial"]
let lista_tiempo = [0.5, 1.5, 1.5, 3, 5, 2.5]
let coin = 0
let i = 0

function timeToMixJuice(jugo){
    while(coin == 0){
        if(jugo === lista_jugos[i]){
            coin = 1
            console.log(jugo + " tardara " + lista_tiempo[i] + "minutos")
        }
        i += 1
    }
}

timeToMixJuice(jugo)