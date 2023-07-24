// PRIMER PROGRAMADO

//let nombre;
//let apellido;
let usuario = []
//let capitalInicial;
let beneficio;
//let tiempo;
//let capitalFinal;

// FUNCIONES


// Funcion Ingreso Usuario
/* function ingresoUsuario() {
    nombre = prompt("Ingresar nombre: ");
    apellido = prompt("Ingresar apellido: ");
    usuario = []
    usuario.push(nombre, apellido)
} */

// Funcion Ingreso Capital
/* function ingresarCapital() {
    capitalInicial = Number(prompt("Ingrese el capital que desea invertir"));
    if (isNaN(capitalInicial)) {
        console.log("Ingrese un valor numérico");
        ingresarCapital();
    } else {
        console.log("El valor ingresado es: " + capitalInicial);
        usuario.push(capitalInicial)
    }
} */

// Funcion Ingreso Interes
/* function tasaBeneficio() {
    beneficio = Number(prompt("Ingrese el interes de la operacion: "))
    usuario.push(beneficio);
} */

// Funcion Ingreso Plazo de Tiempo
/* function plazoTiempo() {
    tiempo = Number(prompt("Ingrese el plazo de tiempo en meses de la operacion: "))
    usuario.push(tiempo);
}
 */
// Funcion Seleccionar Opcion
/* function seleccionarOperacion() {
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
} */

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
/*
ingresoUsuario();
ingresarCapital();
tasaBeneficio();
plazoTiempo();
seleccionarOperacion();
//finalizacion();
console.log(usuario.join("-"));
*/


// FIN PRIMER PROGRAMADO




// SEGUNDO PROGRAMADO

// DOM
contenedor = document.querySelector(".contenedor"); 


contenedor.innerHTML += `


<div>
    <h2>Nombre</h2>
    <input type="text" class="input-nombre"> <button class="btn-nombre">Enviar</button>
</div>

<div>
    <h2>Apellido</h2>
    <input type="text" class="input-apellido"> <button class="btn-apellido">Enviar</button>
</div>

<div>
    <h2>Capital a invertir</h2>
    <input type="number" class="input-capital"> <button class="btn-capital">Enviar</button>
</div>


<div>
    <h2>Duración de la inversión en meses</h2>
    <input type="number" class="input-meses"> <button class="btn-meses">Enviar</button>
</div>


<div>
    <h2>Interés mensual</h2>
    <input type="number" class="input-interes"> <button class="btn-interes">Enviar</button>
</div>


<nav class="contenedor-opciones">
    <button class="btn-calculo btn-calculo-compuesto">Calcular a interés compuesto</button>
    <button class="btn-calculo btn-calculo-simple">Calcular a interés simple</button>
</nav>

`
// Fin DOM



// Eventos

/* Ingreso del Nombre */
const nombre = document.querySelector(".input-nombre");
const nombrePush = document.querySelector('.btn-nombre');
nombrePush.addEventListener('click', respuestaClickNombre)
function respuestaClickNombre() {
    usuario.push(nombre);
}

 /* Ingreso del Apellido */
 const apellido = document.querySelector(".input-apellido");
 const apellidoPush = document.querySelector('.btn-apellido');
 apellidoPush.addEventListener('click', respuestaClickApellido)
function respuestaClickApellido() {
    usuario.push(apellido);
 }

 /* Ingreso del Capital */
 const capital = document.querySelector(".input-capital");
 const capitalPush = document.querySelector('.btn-apellido');
 capitalPush.addEventListener('click', respuestaClickCapital)
function respuestaClickCapital() {
    usuario.push(capital);
 }

 /* Ingreso de Meses */
 const meses = document.querySelector(".input-meseS");
 const mesesPush = document.querySelector('.btn-meses');
 mesesPush.addEventListener('click', respuestaClickMeses)
 function respuestaClickMeses() {
     usuario.push(meses);
 }

 /* Ingreso de Interes */
 const interes = document.querySelector(".input-interes");
 const interesPush = document.querySelector('.btn-interes');
 interesPush.addEventListener('click', respuestaClickInteres)
 function respuestaClickInteres() {
     usuario.push(interes);
 }

 /* Calculo Interes Compuesto */
 const interesCompuesto = document.querySelector('.btn-calculo-compuesto');
 interesCompuesto.addEventListener('click', () => {
     compuesto();
 })

 /* Calculo Interes Simple */
 const interesSimple = document.querySelector('.btn-calculo-simple');
 interesSimple.addEventListener('click', () => {
     simple();
 })

// Fin Eventos


// JSON Y STORAGE
localStorage.setItem("nombre", nombre);
localStorage.setItem("apellido", apellido);
localStorage.setItem("capital", capital);
localStorage.setItem("meses", meses);
localStorage.setItem("beneficio", beneficio);
localStorage.setItem("usuario", usuario);







// FIN SEGUNDO PROGRAMADO


