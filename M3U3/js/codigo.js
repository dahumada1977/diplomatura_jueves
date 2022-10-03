/*Ejercicio numero 1 M3U3*/

const medio = ["pie", "bicicleta", "colectivo", "auto","avion"];
const distancia = parseInt(prompt("ingrese la distancia a recorrer"));

if (Number.isNaN(distancia)) {
    document.write("Ejercicio 1: no ingresó un numero válido"), console.log("No ingresó un numero válido");
} else if (distancia <= 1000) {
    document.write("Ejercicio 1: deberia dirigirse a "+medio[0]+". <br>"), console.log(medio[0]);
} else if (distancia <= 10000) {
    document.write("Ejercicio 1: se recomienda utilizar " + medio[1] +".<br>"), console.log(medio[1]);
} else if (distancia <= 30000) {
    document.write("Ejercicio 1: podria desplazarse en " + medio[2] +".<br>"), console.log(medio[2]);
} else if (distancia <= 100000) {
    document.write("Ejercicio 1: para esta distancia, una opcion recomendable es un " + medio[3] +".<br>"), console.log(medio[3]);
} else if(distancia >= 100000) {
    document.write("Ejercicio 1: para recorrer esta distancia se recomienda tomar un "+medio[4]+". <br>"), console.log(medio[4])
}

/*Nota : no encuentro una forma facil de solucionar mostrar correctamente palabras con acento*/
/*Ejercicio N°2*/

const elementos = [10, 8090, 1010, 405000, 15347, 1100, 30000, 15415, 345670];
const mayor = 0;
var x
console.log(elementos.length+1)

for (let i = 0; i <elementos.length; i++) {document.write("<br> Ejercicio 2 - item: "+elementos[i]+"<br>")
    for (let j = 0; j<elementos.length; j++) {
        if (elementos[i] < elementos[j]) { x = elementos[j]}
    }
}
document.write("<br> Ejercicio 2 - El mayor numero del array es : " + x + "<br>")

/* ejemplo dictado por la profesora, no es necesario utilizar 2 bucles, sino uno solo*/
for (let i = 0; i < elementos.length; i++) {
    if (elementos[i]>mayor) {
        mayor=elementos[i]
    }
}
document.write(`<br> Ejercicio 2 - El mayor numero de ${elementos} es :  ${mayor}  <br>`)