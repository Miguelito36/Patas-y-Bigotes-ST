// Funcionalidad para las pestañas de categorías
const tabs = document.querySelectorAll(".category-tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Eliminar la clase active de todas las pestañas
    tabs.forEach((t) => t.classList.remove("active"));
    // Agregar la clase active a la pestaña clicada
    tab.classList.add("active");
    // Aquí se añadiría la lógica para filtrar los productos según la categoría
  });
});

// Funcionalidad para botones de favoritos
const wishlistButtons = document.querySelectorAll(".btn-wishlist");

wishlistButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const icon = this.querySelector("i");
    if (icon.classList.contains("far")) {
      icon.classList.remove("far");
      icon.classList.add("fas");
    } else {
      icon.classList.remove("fas");
      icon.classList.add("far");
    }
  });
});
