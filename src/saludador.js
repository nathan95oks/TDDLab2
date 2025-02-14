function saludar(nombre,genero) {

    const fecha = new Date();
    const hora=fecha.getHours();

    if((nombre)){

        let saludo='';
    if(genero==='masculino'){
        saludo='Amigo';
    }else if(genero ==='femenino'){
        saludo='Amiga'  
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