// Función para mostrar detalles de la mascota
        function showPetDetails(name, breed, age, gender, personality, imgSrc) {
            document.getElementById('modal-pet-name').textContent = name;
            document.getElementById('modal-pet-breed').textContent = breed;
            document.getElementById('modal-pet-age').textContent = age;
            document.getElementById('modal-pet-gender').textContent = gender;
            document.getElementById('modal-pet-personality').textContent = personality;
            document.getElementById('modal-pet-image').src = imgSrc;
            
            document.getElementById('pet-modal').style.display = 'flex';
        }
        
        // Función para cerrar el modal
        function closeModal() {
            document.getElementById('pet-modal').style.display = 'none';
        }
        
        // Función para cambiar entre secciones (gatos/perros)
        function toggleSection(section) {
            if (section === 'cats') {
                document.getElementById('cats-section').style.display = 'block';
                document.getElementById('dogs-section').style.display = 'none';
                document.getElementById('cats-btn').classList.add('active');
                document.getElementById('dogs-btn').classList.remove('active');
            } else {
                document.getElementById('cats-section').style.display = 'none';
                document.getElementById('dogs-section').style.display = 'block';
                document.getElementById('cats-btn').classList.remove('active');
                document.getElementById('dogs-btn').classList.add('active');
            }
        }
        
        // Función para procesar la adopción
        function adoptPet() {
            const petName = document.getElementById('modal-pet-name').textContent;
            alert(`¡Felicidades! Has iniciado el proceso de adopción para ${petName}. Un representante se pondrá en contacto contigo pronto.`);
            closeModal();
        }
        
        // Cerrar modal si se hace clic fuera del contenido
        window.onclick = function(event) {
            const modal = document.getElementById('pet-modal');
            if (event.target === modal) {
                closeModal();
            }
        };
        