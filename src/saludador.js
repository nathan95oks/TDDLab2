function saludar(nombre) {

    const fecha = new Date();
    const hora=fecha.getHours();

    if((nombre)){
    if(hora > 6 && hora < 12){
        return `Buenos Dias , ${nombre}`;
    }
    else if(hora>12 && hora<18 ){
        return `Buenas Tardes , ${nombre}`;
    }
    else{
        return `Buenas Noches,${nombre}`;
    }
    } 
}
  export default saludar;