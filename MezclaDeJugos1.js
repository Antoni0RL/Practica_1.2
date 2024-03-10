const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('¿Qué bebida va a pedir?: ', (jugo1) => {
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

function limesToCut(neededSlices, limes) {
    let totalSlices = 0;
    let i = 0;

    while (totalSlices < neededSlices && i < limes.length) {
      switch (limes[i]) {
        case "small":
          totalSlices += 6;
          break;
        case "medium":
          totalSlices += 8;
          break;
        case "large":
          totalSlices += 10;
          break;
      }

      i++;
    }

    return i;
  }

  function PedidosRestantes(minutesLeft, orders) {
    let remainingOrders = [];
    let i = 0;

    do {
      const orderTime = timeToMixJuice(orders[i]);
      minutesLeft -= orderTime;

      if (minutesLeft < 0) {
        remainingOrders.push(orders[i]);
      }

      i++;
    } while (i < orders.length && minutesLeft > 0);

    return remainingOrders;
  }

  timeToMixJuice(jugo);

  rl.close();
});
