//Definiciones
let usuario = [];
let tablaUsuarios;


// Funcion Interes Compuesto
function compuesto() {
    interes = interes / 100;
    capParcial = (1 + interes);
    capitalFinal = capitalInicial * Math.pow(capParcial, tiempo);
    capitalFinal = capitalFinal.toFixed(2);
    usuario.push(capitalFinal);
}

// Funcion Interes Simple
function simple() {
    interes = interes / 100;
    capitalFinal = capitalInicial * (1 + interes * tiempo);
    capitalFinal = capitalFinal.toFixed(2);
    usuario.push(capitalFinal)
}

// Funcion Mostrar Usuario
function mostrarUsuario(){
    tablaUsuarios.innerHTML = "";
    usuario.forEach(usuario => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
        <td>${usuario.nombre}</td>
        <td>${usuario.apellido}</td>
        <td>${usuario.capitalInicial}</td>
        <td>${usuario.tiempo}</td>
        <td>${usuario.interes}</td>
        <td>${usuario.capitalFinal}</td>
        `;
        tablaUsuarios.appendChild(fila);
    });
}

// Funcion Envio Formulario
function envioFormulario(event){
    event.preventDefault();
    const nombre = document.querySelector(".input-nombre").value;
    const apellido = document.querySelector(".input-apellido").value;
    const capitalInicial = parseFloat(document.querySelector(".input-capital").value);
    const tiempo = parseInt(document.querySelector(".input-meses").value);
    const interes = parseFloat(document.querySelector(".input-interes").value*100);

    if (isNaN(capitalInicial) || isNaN(tiempo) || isNaN(interes) || capitalInicial <= 0 || tiempo <= 0 || interes <= 0) {
        alert("Ingrese valores válidos para capital inicial, tiempo e interés.");
        return;
    }

    if (document.querySelector(".btn-calculo-compuesto").disabled) {
        capitalFinal = compuesto(capitalInicial, tiempo, interes);
    } else {
        capitalFinal = simple(capitalInicial, tiempo, interes);
    }

    const nuevoUsuario = {
        nombre: nombre,
        apellido: apellido,
        capitalInicial: capitalInicial,
        tiempo: tiempo,
        interes: interes,
        capitalFinal: capitalFinal
    };

    usuario.push(nuevoUsuario);

    mostrarUsuario();

    // Lo convierto a JSON y lo guardo en LocalStorage
    localStorage.setItem("usuario", JSON.stringify(usuario));
}

// Evento para que el DOM cargue antes
document.addEventListener("DOMContentLoaded", () => {
    tablaUsuarios = document.querySelector(".tabla-usuario");

    // Evento Envio Formulario
    document.querySelector(".ingreso-datos").addEventListener("submit", envioFormulario);

    document.querySelector('.btn-calculo-compuesto').addEventListener('click', () => {
        document.querySelector(".btn-calculo-compuesto").disabled = true;
        document.querySelector(".btn-calculo-simple").disabled = false;
    });
    document.querySelector('.btn-calculo-simple').addEventListener('click', () => {
        document.querySelector(".btn-calculo-simple").disabled = true;
        document.querySelector(".btn-calculo-compuesto").disabled = false;
    });

});















// DOM
/* contenedor = document.querySelector(".ingreso-datos"); 


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

` */
// Fin DOM

/* Calculo Interes Compuesto */
/*  const interesCompuesto = document.querySelector('.btn-calculo-compuesto');
interesCompuesto.addEventListener('click', () => {
    compuesto();
}) */

/* Calculo Interes Simple */
/* const interesSimple = document.querySelector('.btn-calculo-simple');
interesSimple.addEventListener('click', () => {
    simple();
}) */


 

// JSON Y STORAGE
/* localStorage.setItem("nombre", nombre);
localStorage.setItem("apellido", apellido);
localStorage.setItem("capital", capital);
localStorage.setItem("meses", meses);
localStorage.setItem("beneficio", beneficio);
localStorage.setItem("usuario", usuario); */

