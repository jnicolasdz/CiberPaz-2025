
const textarea = document.querySelector('textarea');
const botones = document.querySelectorAll('.botones button');


function convertirACuento() {
  const texto = textarea.value.trim();
  if (texto) {
    alert(`Convertir a cuento:\n\n${texto}`);
  } else {
    alert("Por favor, escribe algo en el cuadro de texto primero.");
  }
}

function convertirAAudio() {
  const texto = textarea.value.trim();
  if (texto) {
    alert(`Convertir a audio:\n\n${texto}`);
  } else {
    alert("Por favor, escribe algo en el cuadro de texto primero.");
  }
}

function convertirAPictogramas() {
  const texto = textarea.value.trim();
  if (texto) {
    alert(`Convertir a pictogramas:\n\n${texto}`);
  } else {
    alert("Por favor, escribe algo en el cuadro de texto primero.");
  }
}

// Asignamos eventos a los botones
botones[0].addEventListener('click', convertirACuento);
botones[1].addEventListener('click', convertirAAudio);
botones[2].addEventListener('click', convertirAPictogramas);
