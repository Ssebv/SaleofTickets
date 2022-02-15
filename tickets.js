class Ticket {
    constructor(origin, destiny, date) {
      this.ciudadDeOrigen = origin;
      this.ciudadDeDestino = destiny;
      this.fechaDeViaje = date;
    }
  }
  class Cliente {
    constructor(name, email, pay) {
      this.nombre = name;
      this.email = email;
      this.formaDePago = pay;
    }
  }
  
  let capacidadDelBus =7;
  //let capacidadBusEnTransito=
  let n =0;
  let capacidadBusEnTransito= 1
  while (n  < Math.floor(Math.random()*(capacidadDelBus ))){
    capacidadBusEnTransito= Math.floor(Math.random()*(capacidadDelBus-1)+1);

    n+=1;
    if (n== capacidadBusEnTransito){
        break
    };

  };
    //Math.floor(Math.random()*(capacidadDelBus-1)+1);
  // Componente botón.
  var sendData = document.getElementById("enviar");
  sendData.addEventListener("click", capturarFormulario);
  
  // Componente Formulario.
  var ciudadOrigen = document.getElementById("origen");
  var ciudadDestino = document.getElementById("destino");
  var fechaDeViaje = document.getElementById("fecha");
  
  // Componente Formulario del Cliente.
  var nombreDeCliente = document.getElementById("nombre");
  var correoElectronico = document.getElementById("correo");
  var suFormaDePago = document.getElementById("pago");
  
  // Logica y captura de datos del formulario
  function capturarFormulario() {
    nuevoTicket = new Ticket(
      ciudadOrigen.value,
      ciudadDestino.value,
      fechaDeViaje.value
    );
    clienteRegistrado = new Cliente(
      nombreDeCliente.value,
      correoElectronico.value,
      suFormaDePago.value
    );
    numeroDeTickets.push(1);
    comprandoBoleto()
  }
  
  // Tickets comprados
  let numeroDeTickets = [];
  //Array.from({length: capacidadBusEnTransito});
  //let numeroDeTickets =[];
  
  function comprandoBoleto() {
    if (capacidadBusEnTransito < numeroDeTickets.length) {
      alert("Debe esperar el siguiente bus, no quedan asientos disponibles");
      
    } else {
      alert(`Gracias! tu numero de asiento es ${numeroDeTickets.length}`);
      
    }
  }