const container = document.querySelector(".container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");

btnSignIn.addEventListener("click",()=>{
    container.classList.remove("toggle");
});
btnSignUp.addEventListener("click",()=>{
    container.classList.add("toggle");
});

document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault();

      const correoIngresado = document.getElementById("correoLogin").value.trim();
      const claveIngresada = document.getElementById("claveLogin").value;

      const correoRegistrado = localStorage.getItem("correoRegistrado");
      const claveRegistrada = localStorage.getItem("claveRegistrada");

      const error = document.getElementById("errorLogin");

      if (correoIngresado === correoRegistrado && claveIngresada === claveRegistrada) {
        error.textContent = "";
        window.location.href = "../MENU.html";
      } else {
        error.textContent = "Correo o contraseña incorrectos.";
      }
    });

    document.getElementById("registroForm").addEventListener("submit", function(e) {
      e.preventDefault(); 

      const nombre = document.getElementById("nombre").value.trim();
      const correo = document.getElementById("correo").value.trim();
      const clave = document.getElementById("clave").value;

      // Validación básica
      if (!nombre || !correo || !clave || !confirmar) {
        error.textContent = "Todos los campos son obligatorios.";
        return;
      }

      if (!correo.includes("@") || !correo.includes(".")) {
        error.textContent = "El correo electrónico no es válido.";
        return;
      }

      if (clave.length < 6) {
        error.textContent = "La contraseña debe tener al menos 6 caracteres.";
        return;
      }

      if (clave !== confirmar) {
        error.textContent = "Las contraseñas no coinciden.";
        return;
      }

      error.textContent = "";
      localStorage.setItem("correoRegistrado", correo);
      localStorage.setItem("claveRegistrada", clave);
      
      window.location.href = "../login.html";
    });