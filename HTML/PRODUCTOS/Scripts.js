const productos = [
      {
        nombre: "Alimento para perro",
        descripcion: "Bolsa de 2kg, NutreCan Adulto",
        precio: 45000,
        imagen: "alimento perro.jpg"
      },
      {
        nombre: "Collar antipulgas",
        descripcion: "Protección hasta por 8 meses",
        precio: 30000,
        imagen: "imagenes/collar_antipulgas.jpg"
      },
      {
        nombre: "Shampoo",
        descripcion: "Aroma natural y sin químicos",
        precio: 18000,
        imagen: "../PRODUCTOS/shampoo.jpg"
      },
      {
        nombre: "Pelota de juguete",
        descripcion: "Ideal para perros medianos",
        precio: 12000,
        imagen: "../PRODUCTOS/descarga (1).jpeg"
      },
      {
        nombre: "Arenero para gatos",
        descripcion: "Con cubierta y filtro de olor",
        precio: 52000,
        imagen: "../PRODUCTOS/descarga.jpeg"
      }
    ];

    const lista = document.getElementById("listaProductos");

    productos.forEach((p, i) => {
      const div = document.createElement("div");
      div.className = "producto";
      div.innerHTML = `
        <img src="${p.imagen}" alt="${p.nombre}">
        <h3>${p.nombre}</h3>
        <p>${p.descripcion}</p>
        <p><strong>$${p.precio.toLocaleString()}</strong></p>
        <button onclick="agregarAlCarrito(${i})">Agregar al carrito</button>
      `;
      lista.appendChild(div);
    });

    function agregarAlCarrito(index) {
      const producto = productos[index];
      let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
      carrito.push(producto);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      alert(`${producto.nombre} ha sido agregado al carrito.`);
    }