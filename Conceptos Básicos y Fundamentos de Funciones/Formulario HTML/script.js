// 1. OBTENER REFERENCIAS DEL DOM
const formulario = document.getElementById("formulario");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");

// Referencias a los SPAN para mostrar los errores
const errorName = document.getElementById("error-name");
const errorEmail = document.getElementById("error-email");
const errorPassword = document.getElementById("error-password");

// 2. EXPRESIONES REGULARES (RegExp) - La lógica central

// Email: Patrón básico (algo@algo.dominio)
// Aunque hay patrones más complejos, este es suficiente para la práctica
const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

// Contraseña: Mínimo 8 caracteres, al menos 1 mayúscula, 1 minúscula y 1 número.
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
//

// 3. FUNCIONES DE VALIDACIÓN ESPECÍFICAS

function validarNombre(nombre) {
  if (nombre.length < 3) {
    mostrarError(errorName, "El nombre debe tener al menos 3 caracteres.");
    return false;
  }
  mostrarError(errorName, ""); // Limpiar error
  return true;
}

function validarEmail(email) {
  if (!emailRegex.test(email)) {
    mostrarError(errorEmail, "El formato del email no es válido.");
    return false;
  }
  mostrarError(errorEmail, "");
  return true;
}

function validarPassword(password) {
  if (!passwordRegex.test(password)) {
    mostrarError(
      errorPassword,
      "Mínimo 8 caracteres: al menos 1 mayúscula, 1 minúscula y 1 número."
    );
    return false;
  }
  mostrarError(errorPassword, "");
  return true;
}

// Función auxiliar para manipular el DOM
function mostrarError(elementoError, mensaje) {
  elementoError.textContent = mensaje;
  elementoError.style.color = mensaje ? "red" : "transparent";
}

// 4. MANEJO DE EVENTO SUBMIT (Validación al Enviar)

formulario.addEventListener("submit", function (event) {
  // 1. Detener el envío automático
  event.preventDefault();

  // 2. Obtener los valores (los datos están frescos en este punto)
  const nombre = inputName.value.trim();
  const email = inputEmail.value.trim();
  const password = inputPassword.value;

  // 3. Ejecutar todas las validaciones
  const isNameValid = validarNombre(nombre);
  const isEmailValid = validarEmail(email);
  const isPasswordValid = validarPassword(password);

  // 4. Decidir si se envía
  if (isNameValid && isEmailValid && isPasswordValid) {
    alert("¡Formulario validado con éxito! Listo para enviar.");
    // Aquí iría el código para enviar los datos (ej. fetch)
    // formulario.reset(); // Opcional: Limpiar el formulario
  } else {
    alert("Por favor, corrige los errores antes de enviar.");
  }
});

// 5. MANEJO DE EVENTO BLUR (Validación Justo a Tiempo)

// Aplicamos la validación específica cuando el usuario sale del campo
inputName.addEventListener("blur", () => validarNombre(inputName.value.trim()));
inputEmail.addEventListener("blur", () =>
  validarEmail(inputEmail.value.trim())
);
inputPassword.addEventListener("blur", () =>
  validarPassword(inputPassword.value)
);
