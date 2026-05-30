
// Botones personalizados
function handleJoin() {
  alert('Gracias por unirte a RegulusFit 💪');
}

function handleContact() {
  alert('Escríbenos a contacto@regulusfit.com');
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) section.scrollIntoView({ behavior: 'smooth' });
}
