let formulario = document.querySelector('.form');
formulario.addEventListener('click', function(e){
  let element = e.target;
  let isButtonNext = element.classList.contains('step__button--next');
  let isButtonBack = element.classList.contains('step__button--back');
  if (isButtonNext || isButtonBack){
    let currentStep = document.getElementById('step-' + element.dataset.step);
    let jumpStep = document.getElementById('step-' + element.dataset.to_step);
    currentStep.classList.remove('active');
    jumpStep.classList.add('active');
    if (isButtonNext) {
      currentStep.classList.add('to-left');
    } else {
      jumpStep.classList.remove('to-left');
    }
    currentStep.classList.add('inactive');
    jumpStep.classList.remove('inactive');
  }
})

window.addEventListener("load", function () {
  console.log("Hola mundo");
});

function mostrarFeedback() {
  var step = document.getElementById("step-6")
  var seccionFormulario = document.getElementById("formulario");

  seccionFormulario.classList.add("no-mostrar");
  step.classList.remove("no-mostrar");
  step.classList.add("mostrar")
}

function recolectarDatos() {
  var inputNombre = document.getElementById("fname");
  var nombre = inputNombre.value;

  var inputMail = document.getElementById("mail");
  var mail = inputMail.value;

  var spanNombre = document.getElementById("nombre-usuario");
  var spanEmail = document.getElementById("mail-usuario");

  spanNombre.innerText = nombre;
  spanEmail.innerText = mail;
}

function enviarFormulario(e) {
  recolectarDatos();
  mostrarFeedback();
  resetearFormulario();
}

function resetearFormulario() {
  var inputNombre = document.getElementById("fname");
  var inputMail = document.getElementById("mail");
  inputNombre.value = "";
  inputMail.value = "";
}
