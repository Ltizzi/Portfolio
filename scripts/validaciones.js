let submit = document.querySelector("#submit");
let foto = document.querySelector("#fotoTel");
let form = document.querySelector("#form");

let mensaje = fetchFormData(form);

let regex = /^[a-zA-Z]+$/g;
let validMail =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submit.addEventListener("click", (event) => {
  event.preventDefault();
  let form = document.querySelector("#form");

  let mensaje = fetchFormData(form);

  var errores = formValidator(mensaje);

  if (errores.length > 0) {
    showErrores(errores);

    return;
  }

  submitForm(mensaje);

  form.reset();
  let msgError = document.querySelector("#errores");
  setTimeout(() => {
    msgError.innerHTML = "";
  }, 2000);
  foto.classList.remove("hide");
});

function fetchFormData(form) {
  var mensaje = {
    nombre: form.nombre.value,
    mail: form.mail.value,
    asunto: form.asunto.value,
    mensaje: form.mensaje.value,
  };
  return mensaje;
}

function checkEmptyiness(mensaje) {
  mensaje.forEach((msg) => {
    if (msg.length == 0) return false;
  });
  return true;
}

function formValidator(mensaje) {
  var errores = [];

  if (
    mensaje.nombre.length == 0 ||
    mensaje.mail.length == 0 ||
    mensaje.asunto.length == 0 ||
    mensaje.mensaje.length == 0
  ) {
    errores.push("Ningún campo del formulario puede estar vacío");
    return errores;
  }

  //   errores.push("El nombre no puede estar vacío");
  // if (mensaje.mail.length == 0) errores.push("El mail no puede estar vacío");
  // if (mensaje.asunto.length == 0)
  //   errores.push("El asunto no puede estar vacío");
  // if (mensaje.mensaje.length == 0)
  //   errores.push("El mensaje no puede estar vacío");

  if (!nameValidator(mensaje.nombre)) errores.push("Ingrese un nombre válido");
  if (mensaje.nombre.length > 50)
    errores.push("El nombre no puede tener más de 50 caracteres");

  if (!mailValidator(mensaje.mail)) errores.push("Ingrese un mail válido");
  if (!nameValidator(mensaje.asunto)) errores.push("Ingrese un asunto válido");

  if (mensaje.asunto.length > 50)
    errores.push("El asunto no puede tener más de 50 caracteres");

  if (mensaje.mensaje.length > 300)
    errores.push("El mensaje no puede tener más de 300 caracteres");
  return errores;
}

function nameValidator(nombre) {
  if (nombre.match(regex)) {
    return true;
  } else return false;
}

function mailValidator(mail) {
  if (mail.match(validMail)) return true;
  else return false;
}

function showErrores(errores) {
  let msgError = document.querySelector("#errores");

  foto.classList.add("hide");
  msgError.innerHTML = "";
  errores.forEach((error) => {
    let errorP = document.createElement("p");
    errorP.textContent = error;
    errorP.classList.add("error");
    msgError.appendChild(errorP);
  });

  setTimeout(() => {
    msgError.innerHTML = "";
    foto.classList.remove("hide");
  }, 2000);
}

function formVacio() {
  var msgError = document.querySelector("#errores");
  foto.classList.add("hide");
  msgError.innerHTML = "";
  var msg = "Los campos no pueden estar vacíos";
  var errorP = document.createElement("p");
  errorP.textContent = msg;
  errorP.classList.add("error");
  msgError.appendChild(errorP);
  setTimeout(() => {
    msgError.innerHTML = "";
    foto.classList.remove("hide");
  }, 2000);
}

function submitForm(mensaje) {
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://ltizzi-api-portfolio.herokuapp.com/contacto/new");
  xhr.setRequestHeader("Accept", "application/json");
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onload = () => console.log(xhr.responseText);
  xhr.send(mensaje);
}
