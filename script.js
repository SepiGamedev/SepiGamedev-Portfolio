document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("FORM").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var name = document.getElementById("name").value;
    if(name.length == 0) {
      alert("I need to know your name.");
      return;
    }

    var mail = document.getElementById("mail").value;
    
    if (!(/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(mail))){
        alert("Incorrect mail format.");
        return;
       }

    this.submit();
  }

