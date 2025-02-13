import saludar from "./saludador"; 

const nombreInput = document.querySelector("#nombre");
const form = document.querySelector("#saludar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();


  const nombre = nombreInput.value.trim();
  const saludo = saludar(nombre);

  div.innerHTML = `<p>${saludo}</p>`;
});




