// Definición de una función llamada generarCodigo
function generarCodigo() {
    // Obtener el valor del elemento con el id "horas" en el documento HTML y asignarlo a la variable 'horas'
    var horas = document.getElementById("horas").value;
    
    // Obtener el valor del elemento con el id "minutos" en el documento HTML y asignarlo a la variable 'minutos'
    var minutos = document.getElementById("minutos").value;

    // Crear una cadena de texto que representa el comando de apagado programado (shutdown) con los valores de horas y minutos calculados
    var codigo = "shutdown -s -t " + (horas * 3600 + minutos * 60);
    
    // Asignar el valor de la cadena de texto 'codigo' al elemento con el id "codigo" en el documento HTML
    document.getElementById("codigo").value = codigo;
}
