// Toggle sidebar on mobile
document.getElementById("toggleMenu").addEventListener("click", function () {
  document.getElementById("sidebar").classList.toggle("active");
});

// User dropdown menu
document.getElementById("userDropdown").addEventListener("click", function () {
  document.getElementById("dropdownMenu").style.display =
    document.getElementById("dropdownMenu").style.display === "block"
      ? "none"
      : "block";
});

// Close dropdown when clicking outside
window.addEventListener("click", function (e) {
  if (!document.getElementById("userDropdown").contains(e.target)) {
    document.getElementById("dropdownMenu").style.display = "none";
  }
});

// Function to show different sections
function showSection(sectionName) {
  // Hide all sections
  const sections = document.querySelectorAll(".content section");
  sections.forEach((section) => {
    section.style.display = "none";
  });

  document.getElementById(sectionName + "-section").style.display = "block";

  const menuItems = document.querySelectorAll(".menu-item");
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });

  const clickedItem = document.querySelector(
    `.menu-item[onclick="showSection('${sectionName}')"]`
  );
  if (clickedItem) {
    clickedItem.classList.add("active");
  }
}
//Formulario de Citas
function showCitasForm() {
  document.getElementById("product-form").style.display = "block";
  document.getElementById("form-title").textContent = "Agregar Nuevo Producto";
  document.getElementById("add-product-form").reset();
}
// formulario de Productos
function showProductForm() {
  document.getElementById("product-form").style.display = "block";
  document.getElementById("form-title").textContent = "Agregar Nuevo Producto";
  document.getElementById("add-product-form").reset();
}

function editProduct(id) {
  document.getElementById("product-form").style.display = "block";
  document.getElementById("form-title").textContent = "Editar Producto";

  document.getElementById("product-name").value = "Nombre del Producto " + id;
  document.getElementById("product-category").value = "Alimentos";
  document.getElementById("product-price").value = "45000";
  document.getElementById("product-stock").value = "35";
  document.getElementById("product-description").value =
    "Descripción del producto " + id;
}

function cancelProductForm() {
  document.getElementById("product-form").style.display = "none";
}

document
  .getElementById("add-product-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Producto guardado");
    document.getElementById("product-form").style.display = "none";
  });

  
// Funcion de los detalles de ordenes
const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const boton5 = document.getElementById("boton5");
const recuadro1 = document.getElementById("recuadro1");
const recuadro2 = document.getElementById("recuadro2");
const recuadro3 = document.getElementById("recuadro3");
const recuadro4 = document.getElementById("recuadro4");
const recuadro5 = document.getElementById("recuadro5");

boton1.addEventListener("click", function(){
  recuadro1.style.display = "block";
  recuadro2.style.display = "none";
  recuadro3.style.display = "none";
  recuadro4.style.display = "none";
  recuadro5.style.display = "none";
});
boton2.addEventListener("click", function(){
  recuadro1.style.display = "none";
  recuadro2.style.display = "block";
  recuadro3.style.display = "none";
  recuadro4.style.display = "none";
  recuadro5.style.display = "none";
});
boton3.addEventListener("click", function(){
  recuadro1.style.display = "none";
  recuadro2.style.display = "none";
  recuadro3.style.display = "block";
  recuadro4.style.display = "none";
  recuadro5.style.display = "none";
});
boton4.addEventListener("click", function(){
  recuadro1.style.display = "none";
  recuadro2.style.display = "none";
  recuadro3.style.display = "none";
  recuadro4.style.display = "block";
  recuadro5.style.display = "none";
});
boton5.addEventListener("click", function(){
  recuadro1.style.display = "none";
  recuadro2.style.display = "none";
  recuadro3.style.display = "none";
  recuadro4.style.display = "none";
  recuadro5.style.display = "block";
});
function closeOrderModal() {
  recuadro1.style.display = "none";
  recuadro2.style.display = "none";
  recuadro3.style.display = "none";
  recuadro4.style.display = "none";
  recuadro5.style.display = "none";
}

// Configuracion de Formulario
document
  .getElementById("general-settings-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Configuración guardada (simulado)");
  });

  
//Eliminar Admins
const deleteAdmin = document.querySelectorAll('.delete-admin');

deleteAdmin.forEach(button => {
  button.addEventListener('click', function() {
    const adminId = this.getAttribute('admin-id');
    
    if (confirm('¿Está seguro que desea eliminar este Admin?')) {
      const adminAEliminar = document.getElementById(adminId);

      if (adminAEliminar) {
        adminAEliminar.remove();
        alert('El admin ha sido eliminada exitosamente.');
      }
    }
  });
});

//Eliminar Productos
const deleteProduct = document.querySelectorAll('.delete-btn');

deleteProduct.forEach(button => {
  button.addEventListener('click', function() {
    const proId = this.getAttribute('pro-id');
    
    if (confirm('¿Está seguro que desea eliminar este producto?')) {
      const proAEliminar = document.getElementById(proId);

      if (proAEliminar) {
        proAEliminar.remove();
        alert('El producto ha sido eliminada exitosamente.');
      }
    }
  });
});

//eliminar Citas
const deleteButtons = document.querySelectorAll('.delete-cita');

deleteButtons.forEach(button => {
  button.addEventListener('click', function() {
    const citaId = this.getAttribute('data-id');
    
    if (confirm('¿Está seguro que desea eliminar esta cita?')) {
      const filaAEliminar = document.getElementById(citaId);

      if (filaAEliminar) {
        filaAEliminar.remove();
        alert('La cita ha sido eliminada exitosamente.');
      }
    }
  });
});