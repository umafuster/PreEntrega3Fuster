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
<button class="btn-calculo btn-calculo-compuesto" onclick="mostrarResultados">Calcular a interés compuesto</button>
<button class="btn-calculo btn-calculo-simple" onclick="mostrarResultados">Calcular a interés simple</button>
</nav>

`
// Fin DOM


// JSON Y STORAGE
function almacenarDatos() {
    localStorage.setItem("usuario", JSON.stringify(usuario));
    localStorage.setItem("capitalFinal", capitalFinal);
}
// FIN JSON Y STORAGE



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

// Calcular a Dolares
function convertirADolar(){
   const usdMoneda = monedas.USD.exchangeRate;
   capitalConvertido = capitalFinal / usdMoneda;
   localStorage.setItem("capitalConvertido", capitalConvertido);
   mostrarResultados();   
}

// Calcular a Euros
function convertirAEuro(){
    const eurMoneda = monedas.EUR.exchangeRate;
    capitalConvertido = capitalFinal / eurMoneda;
    localStorage.setItem("capitalConvertido", capitalConvertido);   
    mostrarResultados();
 }
// FIN calcular monedas


// MOSTRAR LOS DATOS
function mostrarResultados() {
    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
    const capitalFinal = localStorage.getItem("capitalFinal");
    const {nombre, apellido, capital, meses, interes} = usuarioGuardado;
    const capitalConvertido = localStorage.getItem("capitalConvertido");
    const datos = `
    Nombre: ${nombre}
    Apellido: ${apellido}
    Capital: ${capital}
    Meses: ${meses}
    Interes: ${interes}
    Capital Final: ${capitalFinal}
    Capital Convertido: ${capitalConvertido}`;

    Swal.fire({
        html: `<pre>${datos}</pre>`,
        position: "top",
        confirmButtonText: "Volver"
    });
}
// FIN MOSTRAR LOS DATOS


// EVENTO PARA QUE APAREZCAN LOS RESULTADOS
document.querySelector(".btn-calculo-compuesto").addEventListener("click", function () {
    interesCompuesto();
    mostrarResultados();
});

document.querySelector(".btn-calculo-simple").addEventListener("click", function () {
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
