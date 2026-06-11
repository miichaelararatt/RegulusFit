// Obtener parámetros de la URL
const params = new URLSearchParams(window.location.search);

// Obtener el plan
const plan = params.get("plan");

// Mostrarlo en pantalla
const textoPlan = document.getElementById("planSeleccionado");

if (plan) {
  textoPlan.textContent = "Has elegido el plan: " + plan.toUpperCase();
} else {
  textoPlan.textContent = "No has seleccionado un plan";
}

const form = document.getElementById("registroForm");

/* Cuando el usuario envía el formulario */
form.addEventListener("submit", function(e) {

  e.preventDefault(); // evita que la página se recargue

  /* Si existe un plan seleccionado */
  if(plan){

    window.location.href =
      "bienvenida.html?plan=" + plan;

  } else {

    window.location.href =
      "bienvenida.html";

  }

});
