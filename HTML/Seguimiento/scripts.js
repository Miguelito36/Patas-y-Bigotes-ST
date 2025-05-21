document.querySelector('form').addEventListener('SUB', function(e) {
            e.preventDefault();
            alert('Seguimiento registrado correctamente.');
            
            this.reset();
        });