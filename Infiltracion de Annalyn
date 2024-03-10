const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let opc = 0; // Variable para controlar la salida del ciclo
let ciclo=0
let prisionera
let caballero
let arquero
let perro
perro=Math.random()
caballero=Math.random()
prisionera=Math.random()
arquero=Math.random()
function pregunta(ciclo) {
    console.log("[1] Ataque Rapido! ")
    console.log("[2] Espia! ")
    console.log("[3] Señal al prisionero! ")
    console.log("[4] Prisionero Libre! ")
    rl.question('Selecciona una opcion: ', (respuesta) => {
        console.log(`Ingresaste: ${respuesta}`);
        
        if(ciclo==3){
            console.log("Ha pasado mucho tiempo, el ciclo del dia cambia...")
            perro=Math.random()
            caballero=Math.random()
            prisionera=Math.random()
            arquero=Math.random()
        }
        
        if(respuesta==1){
            ///Solo sirve si esta dormido el caballero
            if(caballero >= 0.5){
                console.log("Ha funcionado!, rescataste a tu amiga!")
                console.log("Fin del juego")
                opc=1
            } else {
                console.log("Oh no!, el caballero esta despierto, intentalo otro dia...")
                ciclo=3
            }
        }
    
        if(respuesta==2){
            //Solo es util cuando uno de ellos esta despierto
            if((arquero && caballero) >= 0.5){
                console.log("Ambos estan despiertos!")
            } else if(caballero >= 0.5){
                console.log("Parece que el caballero esta despierto...")
            } else if(arquero >= 0.5){
                console.log("Parece que el arquero esta despierto...")
            } else {
                console.log("Nadie esta despierto... ")
            }

            ciclo=ciclo+1
        }
    
        
        if(respuesta==3){
            //Solo sirve si el arquero esta dormido y la prisionera esta despierta
            if(arquero<=0.5){
                if(prisionera>=0.5){
                    console.log("Ha funcionado!!, tu y tu amiga se escapan...")
                    console.log("Fin del juego")
                    opc=1
                } else {
                    console.log("La prisionera esta dormida... no escucha tu mensaje")
                    ciclo=ciclo+1
                }
            } else {
                console.log("El arquero esta despierto... ha escuchado tu mensaje... intentalo otro dia")
                ciclo=3
            }
        }

        
        if(respuesta==4){
            //Si esta el perro, solo sirve si el arquero esta dormido y caballero esta dormido o despierto (le tiene miedo)
            //Si no esta el perro, Solo puede funcionar cuando el caballero y el arquero estan dormidos Y la prisionera libre, pues de despertarla, despertaria a los demas
            if(perro>=0.5){
                if(arquero<=0.5){
                    console.log("Tu perro te ayuda a rescatar a la prisionera!!!")
                    console.log("Fin del juego")
                    opc=1
                } else {
                    console.log("El arquero asusto a tu perro! intentalo otro dia")
                    ciclo=3
                }
            } else {
                if(caballero<=0.5){
                    if(arquero<=0.5){
                        if(prisionero>=0.5){
                            console.log("Funciono! Se escapan!")
                            console.log("Fin del juego")
                            opc=1
                        } else {
                            console.log("La prisionera despierta a los guardias de la sorpresa... parece que estaba dormida...")
                            ciclo=3
                        }
                    } else {
                        console.log("El arquero esta despierto.. intentalo otro dia...")
                        ciclo=3
                    }
                } else {
                    console.log("El caballero esta despierto... intentalo otro dia...")
                    ciclo=3
                }
            }
        }

        // Si no se ha alcanzado la condición de salida, llama recursivamente a la función pregunta()
        if (opc !== 1) {
            pregunta();
        } else {
            rl.close(); // Cierra la interfaz readline si se cumple la condición de salida
        }
    });
}

// Llama a la función pregunta() por primera vez para iniciar el ciclo
pregunta(ciclo);
