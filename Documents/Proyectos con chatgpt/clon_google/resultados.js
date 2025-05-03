// Leer los parámetros de la URL
const parametros = new URLSearchParams(window.location.search);

// Obtener el texto de búsqueda
const texto = parametros.get("query");

// Mostrarlo en la página
if (texto) {
  document.getElementById("busqueda-realizada").textContent = `Mostrando resultados para: "${decodeURIComponent(texto)}"`;
} else {
  document.getElementById("busqueda-realizada").textContent = "No se escribió nada en la búsqueda.";
}