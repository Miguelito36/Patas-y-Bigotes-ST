
    // Cargar la información del registro desde localStorage
    window.onload = function() {
      document.getElementById("perfilNombre").value = localStorage.getItem("nombre");
      document.getElementById("perfilSexo").value = localStorage.getItem("sexo");
      document.getElementById("perfilCelular").value = localStorage.getItem("celular");
      document.getElementById("perfilCorreo").value = localStorage.getItem("correo");
      document.getElementById("perfilClave").value = localStorage.getItem("clave");
    };

    // Función para habilitar los campos para edición (si es necesario)
  let modoEdicion = false;

  window.onload = function () {
    // Cargar datos desde localStorage
    document.getElementById("perfilNombre").value = localStorage.getItem("nombre") || "";
    document.getElementById("perfilSexo").value = localStorage.getItem("sexo") || "";
    document.getElementById("perfilCelular").value = localStorage.getItem("celular") || "";
    document.getElementById("perfilCorreo").value = localStorage.getItem("correo") || "";
    document.getElementById("perfilClave").value = localStorage.getItem("clave") || "";
  };

  function editarPerfil() {
    const boton = document.querySelector("button[onclick='editarPerfil()']");

    if (!modoEdicion) {
      // Activar campos para editar
      document.getElementById("perfilNombre").disabled = false;
      document.getElementById("perfilSexo").disabled = false;
      document.getElementById("perfilCelular").disabled = false;
      document.getElementById("perfilCorreo").disabled = false;
      document.getElementById("perfilClave").disabled = false;
      boton.textContent = "Guardar";
      modoEdicion = true;
    } else {
      // Guardar cambios en localStorage
      localStorage.setItem("nombre", document.getElementById("perfilNombre").value);
      localStorage.setItem("sexo", document.getElementById("perfilSexo").value);
      localStorage.setItem("celular", document.getElementById("perfilCelular").value);
      localStorage.setItem("correo", document.getElementById("perfilCorreo").value);
      localStorage.setItem("clave", document.getElementById("perfilClave").value);

      // Desactivar campos después de guardar
      document.getElementById("perfilNombre").disabled = true;
      document.getElementById("perfilSexo").disabled = true;
      document.getElementById("perfilCelular").disabled = true;
      document.getElementById("perfilCorreo").disabled = true;
      document.getElementById("perfilClave").disabled = true;
      boton.textContent = "Editar";
      modoEdicion = false;

      // Mostrar mensaje de éxito
      alert("Cambios guardados correctamente.");

    }
  }