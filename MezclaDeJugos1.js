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

    console.log("-----------------");

    rl.question("¿Cuántas rodajas de lima necesitas?: ", (neededSlices) => {  
        rl.question('Introduce el tamaño de las limas (separadas por comas): ', (limasStr) => {
          const limes = limasStr.split(',');
            function limesToCut(neededSlices, limes) {
              let totalSlices = 0;
              let i = 0;
          
              while (totalSlices < neededSlices) {
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
            const limesToCutResult = limesToCut(neededSlices, limes);
            console.log(`Se necesitan ${limesToCutResult} limas para obtener ${neededSlices} rodajas.`);
            
            console.log("-----------------");

            rl.question("¿Cuántos minutos quedan en el turno?: ", (minutesLeft) => {  
                rl.question('Introduce los jugos que faltan por preparar (separados por comas): ', (jugosPendientes) => {
                    function splitList(jugosPendientes, minutesLeft) {
                        let tiempoTotalPreparacion = 0;
                        const jugosPreparables = [];
                        const jugosRestantes = [];
                        let indiceActual = 0;
                      
                        while (indiceActual < jugosPendientes.length) {
                          const jugoActual = jugosPendientes[indiceActual];
                          let tiempoPreparacionActual = 0;
                      
                          for (let i = 0; i < lista_jugos.length; i++) {
                            if (jugoActual === lista_jugos[i]) {
                              tiempoPreparacionActual = lista_tiempo[i];
                              break;
                            }
                          }
                      
                          if (tiempoTotalPreparacion + tiempoPreparacionActual <= minutesLeft) {
                            tiempoTotalPreparacion += tiempoPreparacionActual;
                            jugosPreparables.push(jugoActual);
                            indiceActual++;
                          } else {
                            jugosRestantes.push(jugoActual);
                            break;
                          }
                        }
                          return {
                          jugosPreparables,
                          jugosRestantes,
                        };
                      }
          rl.close();
        });
      });
    });
  });
});
