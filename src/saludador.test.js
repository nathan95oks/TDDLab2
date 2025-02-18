import saludar from "./saludador.js"

describe("Saludar", () => {
    it("deberia devolver un saludo ", ()=>{
        expect(saludar("Juan","masculino",22,"espanol")).toEqual("Buenos Dias   Joven Juan");    });
});