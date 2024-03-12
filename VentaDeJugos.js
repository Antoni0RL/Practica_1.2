const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let lista_jugos = ["pure strawberry joy", "energizer", "green garden", "tropical island", "all or nothing", "oferta especial"];
let lista_tiempo = [0.5, 1.5, 1.5, 3, 5, 2.5];
let tiempoTotalPreparacion = 0;

rl.question('¿Qué bebida va a pedir?: ', (jugo) => {
  jugo = jugo.toLowerCase();
  let index = lista_jugos.indexOf(jugo);
  if (index !== -1) {
    console.log(jugo + " tardará " + lista_tiempo[index] + " minutos");
    tiempoTotalPreparacion += lista_tiempo[index];
  } else {
    console.log("El jugo ingresado no está en la lista.");
  }

  console.log("-----------------");

  rl.question("¿Cuántas rodajas de lima necesitas?: ", (neededSlices) => {
    rl.question('Introduce el tamaño de las limas (separadas por comas): ', (limasStr) => {
      const limes = limasStr.split(',');
      let totalSlices = 0;

      for (let i = 0; i < limes.length; i++) {
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
      }

      console.log(`Se necesitan ${totalSlices} limas para obtener ${neededSlices} rodajas.`);

      console.log("-----------------");

      rl.question("¿Cuántos minutos quedan en el turno?: ", (minutesLeft) => {
        rl.question('Introduce los jugos que faltan por preparar (separados por comas): ', (jugosPendientes) => {
          let jugosPreparables = [];
          let jugosRestantes = [];
          const pendientes = jugosPendientes.split(',');

          for (let i = 0; i < pendientes.length; i++) {
            let index = lista_jugos.indexOf(pendientes[i].trim());
            if (index !== -1) {
              if (tiempoTotalPreparacion + lista_tiempo[index] <= minutesLeft) {
                tiempoTotalPreparacion += lista_tiempo[index];
                jugosPreparables.push(pendientes[i]);
              } else {
                jugosRestantes.push(pendientes[i]);
              }
            } else {
              console.log(`El jugo "${pendientes[i]}" no está en la lista.`);
            }
          }

          console.log("Jugos preparables:", jugosPreparables.join(''));
          console.log("Jugos restantes:", jugosRestantes.join(''));
          console.log("Tiempo total de preparación:", tiempoTotalPreparacion, "minutos");

          rl.close();
        });
      });
    });
  });
});
