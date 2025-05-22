document.getElementById('admin-login-form').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      
      // En una aplicación real, estas credenciales deberían verificarse en el servidor
      // Para este ejemplo, usamos credenciales quemadas
      if (username === 'admin' && password === 'admin123') {
        // Login exitoso, redirigir al panel de administración
        window.location.href = '../AD/admin.html';
      } else {
        // Mostrar mensaje de error
        document.getElementById('login-alert').style.display = 'block';
      }
    });

    