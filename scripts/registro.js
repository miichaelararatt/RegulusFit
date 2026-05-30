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

form.addEventListener("submit", function(e) {
  e.preventDefault(); // evita recargar la página

  alert("Registro exitoso 💪 Bienvenido a RegulusFit");

  form.reset(); // limpia el formulario
});
