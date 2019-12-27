function alerta()
    {alert("alerta");}
  
function confirmacion(){
    var respuesta;
        if(confirm("Desea confirmar?"))
        {respuesta="Has pulsado OK";}
        else{respuesta="Has pulsado CANCEL";}
        document.getElementById("mensajeconfirmacion").innerHTML= respuesta;
    }


    
function pideinformacion(){
    var respuesta;
    var person=prompt("Como te llamas?")
        if(person==null||person=="")
        {respuesta="Has pulsado OK";}
        else{respuesta="Hola " + person + " .Como te va?";}
        document.getElementById("mensajeinformacion").innerHTML= respuesta;
    }