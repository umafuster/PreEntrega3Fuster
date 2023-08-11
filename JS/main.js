// DEFINICIONES
let usuario = [];
let capitalFinal;
let monedas;
let capitalConvertido;

// Funcion para cargar las monedas del JSON
async function cargarMonedas(){
    try{
        const response = await fetch('monedas.json');
        monedas = await response.json();
    }catch(error){
        console.error('Error al cargar las monedas:', error);
    }
}

// Llamado a la funcion
cargarMonedas();

// DOM
contenedor = document.querySelector(".contenedor");
contenedor.innerHTML += `


<div class="completar-container">
<h2>Nombre</h2>
<input type="text" class="input-nombre">
</div>

<div class="completar-container">
<h2>Apellido</h2>
<input type="text" class="input-apellido">
</div>

<div class="completar-container">
<h2>Capital a invertir</h2>
<input type="number" class="input-capital">
</div>


<div class="completar-container">
<h2>Duración de la inversión en meses</h2>
<input type="number" class="input-meses">
</div>


<div class="completar-container">
<h2>Interés mensual</h2>
<input type="number" class="input-interes">
</div>



<nav class="contenedor-opciones">
<button class="btn-calculo btn-calculo-compuesto">Calcular a interés compuesto</button>
<button class="btn-calculo btn-calculo-simple">Calcular a interés simple</button>
</nav>

`
// Fin DOM

// Funcion Obtencion de Datos
const obtenerDatos = function () {
    const nombre = document.querySelector(".input-nombre").value;
    const apellido = document.querySelector(".input-apellido").value;
    const capital = document.querySelector(".input-capital").value;
    const meses = document.querySelector(".input-meses").value;
    const interes = document.querySelector(".input-interes").value;
    usuario.push(nombre, apellido, capital, meses, interes);
}



/* Calculo Interes Compuesto */
const interesCompuesto = function () {
    let capital = document.querySelector(".input-capital").value;
    const meses = document.querySelector(".input-meses").value;
    let interes = document.querySelector(".input-interes").value;
    interes = interes / 100;
    let capParcial = 1 + interes;
    capitalFinal = capital * Math.pow(capParcial, meses);
    capitalFinal = capitalFinal.toFixed(2);
    localStorage.setItem("capitalFinal", capitalFinal);
}



/* Calculo Interes Simple */
const interesSimple = function () {
    let capital = document.querySelector(".input-capital").value;
    const meses = document.querySelector(".input-meses").value;
    let interes = document.querySelector(".input-interes").value;
    interes = interes / 100;
    capitalFinal = capital * (1 + interes * meses);
    capitalFinal = capitalFinal.toFixed(2);
    localStorage.setItem("capitalFinal", capitalFinal);
}

// JSON Y STORAGE
function almacenarDatos() {
    localStorage.setItem("nombre", document.querySelector(".input-nombre").value);
    localStorage.setItem("apellido", document.querySelector(".input-apellido").value);
    localStorage.setItem("capital", document.querySelector(".input-capital").value);
    localStorage.setItem("meses", document.querySelector(".input-meses").value);
    localStorage.setItem("interes", document.querySelector(".input-interes").value);
    localStorage.setItem("capitalFinal", capitalFinal);
    localStorage.setItem("usuario", usuario);
}
// FIN JSON Y STORAGE

// Calcular a Dolares
function convertirADolar(){
   const usdMoneda = monedas.USD.exchangeRate;
   capitalConvertido = capitalFinal / usdMoneda;
   localStorage.setItem("capitalConvertido", capitalConvertido);
   mostrarResultadosConvertidos();   
}

// Calcular a Euros
function convertirAEuro(){
    const eurMoneda = monedas.EUR.exchangeRate;
    capitalConvertido = capitalFinal / eurMoneda;
    localStorage.setItem("capitalConvertido", capitalConvertido);   
    mostrarResultadosConvertidos();
 }
// FIN calcular monedas


// MOSTRAR LOS DATOS
function mostrarResultados() {
    const nombre = localStorage.getItem('nombre');
    const apellido = localStorage.getItem('apellido');
    const capital = localStorage.getItem('capital');
    const meses = localStorage.getItem('meses');
    const interes = localStorage.getItem('interes');
    const capitalFinal = localStorage.getItem('capitalFinal');
    const datos = `
    Nombre: ${nombre}
    Apellido: ${apellido}
    Capital: ${capital}
    Meses: ${meses}
    Interes: ${interes}
    Capital Final: ${capitalFinal}`;
    

    Swal.fire({
        html: `<pre>${datos}</pre>`,
        position: "top",
        confirmButtonText: "Volver"
    });
}

function mostrarResultadosConvertidos(){
    const capitalConvertido = localStorage.getItem("capitalConvertido");
    const capitalConvertidoShow = `
    Capital Convertido: ${capitalConvertido}`;
    Swal.fire({
        html: `<pre>${capitalConvertidoShow}</pre>`,
        position: "top",
        confirmButtonText: "Volver"
    });
}

// FIN MOSTRAR LOS DATOS


// EVENTO PARA QUE APAREZCAN LOS RESULTADOS
document.querySelector(".btn-calculo-compuesto").addEventListener("click", function () {
    obtenerDatos();
    interesCompuesto();
    mostrarResultados();
});

document.querySelector(".btn-calculo-simple").addEventListener("click", function () {
    obtenerDatos();
    interesSimple();
    mostrarResultados();
});


// Agrego un Ciclo para que el usuario pueda hacer otro calculo sin hacer reload
function realizarOtroCalculo() {
    do {
        refresh = document.querySelector('.refresh');
        refresh.addEventListener('click', location.reload());
    }

    while (document.querySelector(".refresh").addEventListener("click"));
}

/* FIN */
