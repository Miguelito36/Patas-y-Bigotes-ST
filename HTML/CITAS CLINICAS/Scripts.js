// Configurar la fecha mínima del calendario a hoy
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('appointment-date').setAttribute('min', today);

    // Función para manejar el envío del formulario
    document.getElementById('appointment-form').addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Aquí normalmente enviarías los datos al servidor
      // Simulamos un pequeño retraso para dar sensación de procesamiento
      setTimeout(() => {
        // Ocultar formulario y mostrar mensaje de confirmación
        document.getElementById('appointment-form').style.display = 'none';
        document.getElementById('confirmation-message').style.display = 'block';
      }, 1000);
    });

    // Función para resetear el formulario
    function resetForm() {
      document.getElementById('appointment-form').reset();
      document.getElementById('appointment-form').style.display = 'block';
      document.getElementById('confirmation-message').style.display = 'none';
    }