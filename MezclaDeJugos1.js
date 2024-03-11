const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('¿Qué bebida va a pedir?: ', (jugo1) => {
  let jugo = jugo1.toLowerCase();
  let lista_jugos = ["pure strawberry joy", "energizer", "green garden", "tropical island", "all or nothing", "oferta especial"];
  let lista_tiempo = [0.5, 1.5, 1.5, 3, 5, 2.5];
  let coin = 0;
  let i = 0;

  function timeToMixJuice(jugo) {
    while (coin === 0) {
      if (jugo === lista_jugos[i]) {
        coin = 1;
        console.log(jugo + " tardará " + lista_tiempo[i] + " minutos");
        break; 
      }
      i++;
    }
  }
  timeToMixJuice(jugo);

rl.question("¿Cuántas rodajas de lima necesitas?: ", (neededSlices) => {  
  rl.question('Introduce el tamaño de las limas (separadas por comas): ', (limasStr) => {
    const limes = limasStr.split(',');
      function limesToCut(neededSlices, limes) {
        let totalSlices = 0;
        let i = 0;
    
        while (totalSlices < neededSlices && i < limes.length) {
          switch (limes[i]) {
            case "pequeña":
              totalSlices += 6;
              break;
            case "mediana":
              totalSlices += 8;
              break;
            case "grande":
              totalSlices += 10;
              break;
          }
    
          i++;
        }
    
        return i;
      }
    let minutesLeft;
    
    rl.question('¿Cuántos minutos quedan en el turno?: ', (inputMinutesLeft) => {
      minutesLeft = parseInt(inputMinutesLeft); 
      rl.question('Introduzca una lista de jugos pendientes (separados por comas): ', (jugoStr) => {
        const jugosPendientes = jugoStr.split(',');
        const remainingOrdersResult = remainingOrders(minutesLeft, jugosPendientes);
          function remainingOrders(minutesLeft, jugosPendientes) {
            let pedidosNoTerminados = [];
            let i = 0;
            
          
            do {
              const tiempoPreparacion = timeToMixJuice(jugosPendientes[i]);
              minutesLeft -= tiempoPreparacion;
          
              if (minutesLeft < 0) {
                pedidosNoTerminados.push(jugosPendientes[i]);
              }
          
              i++;
            } while (i < jugosPendientes.length);
          
            return pedidosNoTerminados;
          }
        
          const limesToCutResult = limesToCut(neededSlices, limes);
          console.log(`Se necesitan ${limesToCutResult} limas para obtener ${neededSlices} rodajas.`);
          
          const remainingOrders = PedidosRestantes(minutesLeft, [jugo]);
    
          if (remainingOrders.length > 0) {
            console.log(`Los siguientes pedidos no se podrán completar: ${remainingOrders.join(', ')}`);
          } else {
            console.log("¡Todos los pedidos se podrán completar!");
          }
          
          rl.close();
        });
      });
    });
  });
});
