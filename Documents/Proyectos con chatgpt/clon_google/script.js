function buscar() {
    // Tomamos el valor del input
    const valor = document.getElementById("busqueda").value;
  
    // Codificamos el texto para que funcione en la URL
    const textoCodificado = encodeURIComponent(valor);
  
    // Redirigimos a resultados.html con el texto como parámetro
    window.location.href = `resultados.html?query=${textoCodificado}`;
  }
 