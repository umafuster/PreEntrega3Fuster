// DEFINICIONES
let usuario = [];
let capitalFinal;
let tasaDeCambio;
let capitalDolar;

// Tasa de Conversion a Dolares desde una API
function apiTasaDeCambio() {
    fetch('https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=ARG&to=USD', {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '211ab785dfmsh2483a39879c7d27p1182c3jsnad0abb0279a7',
            'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com'
        }
    })


    .then(response => response.json())
    .then(data => {
        tasaDeCambio = data.rates.USD;
        localStorage.setItem("tasaDeCambio", tasaDeCambio);
        })
    .catch (error => {
        console.error(error);
    });
}

// Tener la tasa luego de cargar DOM
document.addEventListener("DOMContentLoaded", apiTasaDeCambio);

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
<button class="btn-calculo btn-calculo-compuesto" onClick="interesCompuesto() mostrarResultados()">Calcular a interés compuesto</button>
<button class="btn-calculo btn-calculo-simple" onClick="interesSimple() mostrarResultados()">Calcular a interés simple</button>
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
    // usuario.push(capitalFinal);
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
    //usuario.push(capitalFinal)
}

// Convertir a Dolares
function convertirADolares() {
    tasaDeCambio = localStorage.getItem("tasaDeCambio");
    if (tasaDeCambio !== "0") {
        capitalDolar = capitalFinal / tasaDeCambio;
        localStorage.setItem("capitalDolar", capitalDolar);
    } else {
        capitalDolar = 0;
    }

}


// MOSTRAR LOS DATOS
function mostrarResultados() {
    const usuarioGuardado = JSON.parse(localStorage.getItem("usuario"));
    const capitalFinal = localStorage.getItem("capitalFinal");
    const capitalDolar = localStorage.getItem("capitalDolar");
    const [nombre, apellido, capital, meses, interes] = usuarioGuardado;
    let mensajeCapitalDolar;
    if (capitalDolar === "Infinity") {
        mensajeCapitalDolar = "Tasa de cambio no disponible";
    } else {
        mensajeCapitalDolar = capitalDolar;
    }
    const datos = `
    Nombre: ${nombre}
    Apellido: ${apellido}
    Capital: ${capital}
    Meses: ${meses}
    Interes: ${interes}
    Capital Final: ${capitalFinal}
    Capital en U$D: ${capitalDolar}`;

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
    convertirADolares();
    mostrarResultados();
});

document.querySelector(".btn-calculo-simple").addEventListener("click", function () {
    interesSimple();
    convertirADolares();
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
