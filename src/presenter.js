import saludar from "./saludador"; 

const nombreInput = document.querySelector("#nombre");
const generoSelect = document.querySelector("#genero")  
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();


  const nombre = nombreInput.value.trim();
  const genero = generoSelect.value;
  const saludo = saludar(nombre, genero);
  
  div.innerHTML = `<p>${saludo}</p>`;
});




