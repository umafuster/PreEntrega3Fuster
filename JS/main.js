// DEFINICIONES
//let nombre;
//let apellido;
let usuario = [];
//let capital;
//let interes;
//let meses;
//let capitalFinal;

// DOM
contenedor = document.querySelector(".contenedor"); 
contenedor.innerHTML += `


<div>
<h2>Nombre</h2>
<input type="text" class="input-nombre">
</div>

<div>
<h2>Apellido</h2>
<input type="text" class="input-apellido">
</div>

<div>
<h2>Capital a invertir</h2>
<input type="number" class="input-capital">
</div>


<div>
<h2>Duración de la inversión en meses</h2>
<input type="number" class="input-meses">
</div>


<div>
<h2>Interés mensual</h2>
<input type="number" class="input-interes">
</div>

<button class="btn-enviar" onClick="obtenerDatos()">Enviar</button>

<nav class="contenedor-opciones">
<button class="btn-calculo btn-calculo-compuesto" onClick="interesCompuesto()">Calcular a interés
    compuesto</button>
<button class="btn-calculo btn-calculo-simple" onClick="interesSimple()">Calcular a interés simple</button>
</nav>

`
// Fin DOM


// Funcion para tener los datos

const obtenerDatos = function () {
    const nombre = document.querySelector(".input-nombre").value;
    const apellido = document.querySelector(".input-apellido").value;
    const capital = document.querySelector(".input-capital").value;
    const meses = document.querySelector(".input-meses").value;
    const interes = document.querySelector(".input-interes").value;
    usuario.push(nombre, apellido, capital, meses, interes);
    console.log(usuario);
}



/* Calculo Interes Compuesto */
const interesCompuesto = function () {
    let capital = document.querySelector(".input-capital").value;
    const meses = document.querySelector(".input-meses").value;
    let interes = document.querySelector(".input-interes").value;
    interes = interes / 100;
    let capParcial = 1 + interes;
    let capitalFinal = capital * Math.pow(capParcial, meses);
    capitalFinal = capitalFinal.toFixed(2);
    usuario.push(capitalFinal);
    console.log(usuario);
}



/* Calculo Interes Simple */
const interesSimple = function () {
    let capital = document.querySelector(".input-capital").value;
    const meses = document.querySelector(".input-meses").value;
    let interes = document.querySelector(".input-interes").value;
    interes = interes / 100;
    capitalFinal = capital * (1 + interes * meses);
    capitalFinal = capitalFinal.toFixed(2);
    usuario.push(capitalFinal)
    console.log(usuario);
}
