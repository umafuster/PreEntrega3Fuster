/*
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
    capitalFinal = capitalFinal.toFixed(2);
    usuario.push(capitalFinal);
}

// Funcion Interes Simple
function simple() {
    beneficio = beneficio / 100;
    capitalFinal = capitalInicial * (1 + beneficio * tiempo);
    capitalFinal = capitalFinal.toFixed(2);
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
//finalizacion();
console.log(usuario.join("-"));
*/


// DOM
contenedor = document.querySelector(".contenedor"); 


contenedor.innerHTML += `


<div>
    <h2>Nombre</h2>
    <input type="text">
</div>

<div>
    <h2>Apellido</h2>
    <input type="text">
</div>

<div>
    <h2>Capital a invertir</h2>
    <input type="number">
</div>


<div>
    <h2>Duración de la inversión en meses</h2>
    <input type="number">
</div>


<div>
    <h2>Interés mensual</h2>
    <input type="number">
</div>


<nav class="contenedor-opciones">
    <button class="btn-calculo">Calcular a interés compuesto</button>
    <button class="btn-calculo">Calcular a interés simple</button>
</nav>



`