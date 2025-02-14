function saludar(nombre,genero,edad,idioma) {

    const fecha = new Date();
    const hora=fecha.getHours();

    if((idioma==='espanol')){

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
  
  else {
    if((genero==='masculino')&&(edad<30 && edad >0)){
        saludo='Young Man';
    }else if((genero ==='masculino')&&(edad >30)){
        saludo='Sir.';  
    }
    if((genero ==='femenino')&&(edad<30 && edad >0)){
        saludo = 'Young Lady';
    }else if((genero ==='femenino')&&(edad >30)){
        saludo ='Miss.';
    }
   

    if(hora > 6 && hora < 12){
        return `Good Morning   ${saludo} ${nombre}`;
    }
    else if(hora>12 && hora<18 ){
        return `Good Afternoon  ${saludo} ${nombre}`;
    }
    else{
        return `Good Evening  ${saludo} ${nombre}`;
    }
  } 
}
  export default saludar;