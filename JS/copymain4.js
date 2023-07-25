// DEFINICIONES
let usuario = [];
let capitalFinal = true;


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
    document.querySelector(".resultado-capital").textContent = `Capital Final: $${capitalFinal}`;
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
    document.querySelector(".resultado-capital").textContent = `Capital Final: $${capitalFinal}`;
}

// JSON Y STORAGE
function almacenarDatos() {
    localStorage.setItem("nombre", document.querySelector(".input-nombre").value);
    localStorage.setItem("apellido", document.querySelector(".input-apellido").value);
    localStorage.setItem("capital", document.querySelector(".input-capital").value);
    localStorage.setItem("meses", document.querySelector(".input-meses").value);
    localStorage.setItem("beneficio", document.querySelector(".input-interes").value);
    localStorage.setItem("capitalFinal", capitalFinal);
    localStorage.setItem("usuario", usuario);
}
// FIN JSON Y STORAGE


// MOSTRAR LOS DATOS

function mostrarResultados() {
    const nombre = localStorage.getItem('nombre')
    const apellido = localStorage.getItem('apellido')
    const capital = localStorage.getItem('capital')
    const meses = localStorage.getItem('meses')
    const interes = localStorage.getItem('interes')
    const capitalFinal = localStorage.getItem('capitalFinal')

    const datos = `Nombre: ${nombre}\nApellido: ${apellido}\nCapital: ${capital}\nMeses: ${meses}\nInteres: ${interes}\nCapital Final: ${capitalFinal}`;
    alert(datos);
}

// FIN MOSTRAR LOS DATOS