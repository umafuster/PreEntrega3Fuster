// DEFINICIONES

let nombre;
let apellido;
let usuario = []
let capitalInicial;
let beneficio;
let tiempo;
let capitalFinal;



// FUNCIONES


// Funcion Ingreso Usuario
function ingresoUsuario() {
    nombre = prompt("Ingresar nombre: ");
    apellido = prompt("Ingresar apellido: ");
    usuario = []
    usuario.push(nombre, apellido)
}

// Funcion Ingreso Capital
function ingresarCapital() {
    capitalInicial = Number(prompt("Ingrese el capital que desea invertir"));
    if (isNaN(capitalInicial)) {
        console.log("Ingrese un valor numérico");
        ingresarCapital();
    } else {
        console.log("El valor ingresado es: " + capitalInicial);
        usuario.push(capitalInicial)
    }
}

// Funcion Ingreso Interes
function tasaBeneficio() {
    beneficio = Number(prompt("Ingrese el interes de la operacion: "))
    usuario.push(beneficio);
}

// Funcion Ingreso Plazo de Tiempo
function plazoTiempo() {
    tiempo = Number(prompt("Ingrese el plazo de tiempo en meses de la operacion: "))
    usuario.push(tiempo);
}

// Funcion Seleccionar Opcion
function seleccionarOperacion() {
    console.log("Elija una de las siguientes opciones");
    console.log("1: Calcular a interés compuesto");
    console.log("2: Calcular a interés simple");

    let op = prompt("Ingrese la opcion");

    switch (op) {
        case "1":
            compuesto();
            break;
        case "2":
            simple();
            break;
        default:
            console.log("Operacion invalida")
    }
}

// Funcion Interes Compuesto
function compuesto(){
    beneficio = beneficio / 100;
    capParcial = (1 + beneficio);
    capitalFinal = capitalInicial * Math.pow(capParcial, tiempo);
    usuario.push(capitalFinal);
}

// Funcion Interes Simple
function simple() {
    beneficio = beneficio / 100;
    capitalFinal = capitalInicial * (1 + (beneficio / 100));
    usuario.push(capitalFinal)  
}



// Funcion para Finalizar
function finalizacion() {
    console.log(usuario)
}



// LLAMADOS 

ingresoUsuario();
ingresarCapital();
tasaBeneficio();
plazoTiempo();
seleccionarOperacion();
finalizacion();

console.log(typeof capitalFinal);