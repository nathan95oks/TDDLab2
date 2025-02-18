import saludar from "./saludador.js"

describe("Saludar", () => {
    it("deberia devolver un saludo ", ()=>{
        const saludo = saludar("Juan", "masculino", 22, "espanol").trim().replace(/\s+/g, " ");
        expect(saludo).toBe("Buenos Dias Joven Juan");

});
});