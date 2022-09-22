/*Ejercicio numero 1 M3U3*/

const medio = ["pie", "bicicleta", "colectivo", "auto","avion"];
const distancia = parseInt(prompt("ingrese la distancia a recorrer"));

if (Number.isNaN(distancia)) {
    document.write("No ingresó un numero válido"), console.log("No ingresó un numero válido");
} else if (distancia <= 1000) {
    document.write("Deberia dirigirse a "+medio[0]+"."), console.log(medio[0]);
} else if (distancia <= 10000) {
    document.write("Se recomienda utilizar "+medio[1]+"."), console.log(medio[1]);
} else if (distancia <= 30000) {
    document.write("Podria desplazarse en "+medio[2]+"."), console.log(medio[2]);
} else if (distancia <= 100000) {
    document.write("Para esta distancia, una opcion recomendable es un "+medio[3]+"."), console.log(medio[3]);
} else if(distancia >= 100000) {
    document.write("Para recorrer esta distancia se recomienda tomar un "+medio[4]+"."), console.log(medio[4])
}

/*Nota : no encuentro una forma facil de solucionar mostrar correctamente palabras con acento*/