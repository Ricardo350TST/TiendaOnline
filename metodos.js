// Problema: Filtro y Orden de Productos de una Tienda Online 
// Eres el encargado de gestionar los datos de una tienda online. Tienes un listado de productos con información como nombre, 
// precio y categoría. Tu tarea será filtrar los productos por precio, ordenarlos alfabéticamente y generar una lista con los nombres.

// Arreglo con Objetos con 5 productos.
const productos = [];

// Referencias al DOM
const formulario = document.getElementById('formulario-producto');
const nombreInput = document.getElementById('nombre');
const precioInput = document.getElementById('precio');
const categoriaInput = document.getElementById('categoria');

const listaBaratos = document.getElementById('productos-baratos');
const listaOrdenados = document.getElementById('productos-ordenados');
const listaNombres = document.getElementById('productos-nombres');
const listaCategorias = document.getElementById('categorias');

function actualizarListas() {
    // Limpiar todas las listas
    listaBaratos.innerHTML = '';
    listaOrdenados.innerHTML = '';
    listaNombres.innerHTML = '';
    listaCategorias.innerHTML = '';

    // 1. Obtener los productos que cuesten menos de $100.
    const productosPrecio = productos.filter(producto => producto.precio < 100);

    // Mostrar los productos filtrados en la lista
    productosPrecio.forEach(producto => {
        const item = document.createElement('li');
        item.textContent = `🔥 ${producto.nombre} - $${producto.precio}`;
        listaBaratos.appendChild(item);
    });

    // *************************

    // 2. Ordenar esos productos alfabéticamente por su nombre.
    const productosOrdenados = [...productos].sort((a, b) => a.nombre.localeCompare(b.nombre));

    // Mostrar los productos ordenados en la lista.
    productosOrdenados.forEach(productos => {
        const item = document.createElement('li');
        item.textContent = `🟢 ${productos.nombre} cuesta $${productos.precio} y está en la categoría: "${productos.categoria}".`;
        listaOrdenados.appendChild(item);
    });

    // *************************

    // 3. Generar un nuevo arreglo que contenga solo los nombres de los productos.
    const nombresProductos = productos.map(producto => producto.nombre);

    // Mostrar los nombres de los productos
    nombresProductos.forEach(nombre => {
        const item = document.createElement('li');
        item.textContent = `▶️ ${nombre}.`
        listaNombres.appendChild(item);
    });

    // 4. Imprime el nombre de las categorías.
    const nombresCategorias = productos.map(producto => producto.categoria);

    // Mostrar las categorías
    nombresCategorias.forEach(categoria => {
        const item = document.createElement('li');
        item.textContent = `🚀 ${categoria}.`
        listaCategorias.appendChild(item);
    })
}

// Manejador del formulario
formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener valores
    const nombre = nombreInput.value.trim();
    const precio = parseFloat(precioInput.value);
    const categoria = categoriaInput.value.trim();

    // Validamos campos
    if (nombre === '' || isNaN(precio) || precio < 0 || categoria === '') {
        alert('Por favor, agrega la información solicitada.');
        return;
    }

    // Agregar producto al arreglo
    const nuevoProduco = { nombre, precio, categoria};
    productos.push(nuevoProduco);

    // Limpiar inputs para el usuario
    formulario.reset();

    // Actualizar las listas visuales
    actualizarListas();
});



