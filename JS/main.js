let capitalInicial = Number(prompt("Ingrese el capital que desea invertir"));
if (isNaN(capitalInicial)) {
    console.log("Ingrese un valor numérico");
    prompt("Ingrese el capital que desea invertir");
} else {
    console.log("El valor ingresado es: " + capitalInicial);
}



console.log("Elija una de las siguientes opciones");
console.log("1. Calcular a interés compuesto");
console.log("2. Calcular a interés simple");


let opcionInteres = prompt("Elija la opcion");
switch (opcionInteres) {
    case "1":
        console.log("Has elegido calcular a interés compuesto");
        break;
    case "2":
        console.log("Has elegido calcular a interés simple");
        break;
    default:
        console.log("No has elegido una opcion correcta");
      
} 


