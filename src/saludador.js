function saludar(nombre,genero,edad) {

    const fecha = new Date();
    const hora=fecha.getHours();

    if((nombre)){

        let saludo='';
    if((genero==='masculino')&&(edad<30 && edad >0)){
        saludo='Joven';
    }else if((genero ==='masculino')&&(edad >30)){
        saludo='Sr.';  
    }
    if((genero ==='femenino')&&(edad<30 && edad >0)){
        saludo = 'Senorita';
    }else if((genero ==='femenino')&&(edad >30)){
        saludo ='Sra.';
    }
   

    if(hora > 6 && hora < 12){
        return `Buenos Dias   ${saludo} ${nombre}`;
    }
    else if(hora>12 && hora<18 ){
        return `Buenas Tardes   ${saludo} ${nombre}`;
    }
    else{
        return `Buenas Noches  ${saludo} ${nombre}`;
    }
  } 
}
  export default saludar;