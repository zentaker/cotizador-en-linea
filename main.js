

var regalo  = document.getElementById('regalo');
// campo datos usuario 
var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var email = document.getElementById('email');

//campo pases 
var pase_dia = document.getElementById('pase_dia');
var pase_dosdias = document.getElementById('pase_dosdias');
var pase_completo = document.getElementById('pase_completo');

// botones y divs
var calcular = document.getElementById('calcular'); // para aceder al valor del boton calcular
var errorDiv = document.getElementById('error');
var botonregistro = document.getElementById('btnRegistro');
var lista_productos = document.getElementById('lista-productos');
var suma = document.getElementById('suma-total');

// Extras
var camisas = document.getElementById('camisa_evento');
var etiquetas = document.getElementById('etiquetas');

calcular.addEventListener('click', cacularMontos ); //cuando escuche un click va a calcular un funcion 

pase_dia.addEventListener('blur', mostrarDias); //add event listener escucha muchos tipos de eventos `
pase_dosdias.addEventListener('blur', mostrarDias);
pase_completo.addEventListener('blur', mostrarDias);




function cacularMontos(event) {
    event.preventDefault(); // cancela el evento si es cacelable el resto del funcionamiento del evento, es decir, puede ser llamado denuevo
    if(regalo.value === '') {
    	alert("deves de elegir un regalo");
    	regalo.focus();
    } else {
    	var boletosDias = parseInt(pase_dia.value, 10) || 0, // Convierte (parsea) un argumento de tipo cadena y devuelve un entero de la base especificada
    		boletos2Dias = parseInt(pase_dosdias.value, 10) || 0, //parseInt(string, base); string > una cadena que representa el valor
    		boletoCompleto = parseInt(pase_completo.value, 10) || 0; // base > un entero que representa la base mencionada cadena
            cantCamisas = parseInt(camisas.value, 10) || 0; // pares int es para asegurarte que np halla erores que no pàsara algo extraño
            cantEtiquetas = parseInt(etiquetas.value, 10) || 0;

    	var totalPagar = (boletosDias * 30) + (boletos2Dias * 45) + 
                         (boletoCompleto * 50) + ((cantCamisas * 10) * .93) 
                         + (cantEtiquetas * 2);

        var listadoProductos = []; // corchetes es para asegurarnos que etamos usando una forma de array

        //validacion para que solo si el valor es mayor a 1 este se muestre
        //si es mayor a 1 solo se va a mostrar
        if(boletosDias >= 1){
            listadoProductos.push(boletosDias + ' Pases por dia'); // usar push para llenar el array e introducion elementos 
        };
        if (boletos2Dias >= 1) {
            listadoProductos.push(boletos2Dias + ' Pases por 2 dias');
        };
        if (boletoCompleto >= 1) {
            listadoProductos.push(boletoCompleto + ' Pases Completos');
        };
        if (cantCamisas >= 1) {
            listadoProductos.push(cantCamisas + ' Camisas');
        };
        if (cantEtiquetas >= 1) {
            listadoProductos.push(cantEtiquetas + ' Etiquetas');
        };


        //para quitar el cuadro plomo del fondo de la lista de productos 
        lista_productos.style.display = "block"; // en la hoja de estilos comocar display: none; entonces el java escript lo va a ctivar cuando este tenga informacion


        //secion en donde se va a mostrar el resultado de lo que haz pedido 
        lista_productos.innerHTML = ''; // va vacio asi si tu cambies un valor se pueda actualizar

        //sentencia for son pasos que son ejecutados hasta una condicion sea falsa
        for(var i = 0; i< listadoProductos.length; i++) { // hacer un recorrido de los objetos en listado 
            lista_productos.innerHTML += listadoProductos[i] + '<br/>'; // imprimir los productos concatenado el lostado de productos con forme valla recorreindo el arreglo 
        }

        //para poder imprimri el total a pagar 
        suma.innerHTML = "$ " + totalPagar.toFixed(2); //innerHTML va aimprimir lo que tienes en javascript a hatml
        // toFixed > es para que te salga un numero de decimales establecidos.
        
        

        
    }
    console.log('haz echo click en calcular'); // corroboracion de funcionamiento 
};

function mostrarDias() {
    var boletosDia = parseInt(pase_dia.value, 10)|| 0,
     	boletos2Dias = parseInt(pase_dosdias.value, 10)|| 0,
     	boletoCompleto = parseInt(pase_completo.value, 10)|| 0;

     	var diasElegidos = [];

     	if (boletosDia > 0) {
     		diasElegidos.push('viernes');
     	}
     	if (boletos2Dias > 0) {
     		diasElegidos.push('viernes', 'sabado');
     	}
     	if (boletoCompleto > 0) {
     		diasElegidos.push('viernes', 'sabado', 'domingo');
     	}
     	for(var i = 0; i < diasElegidos.length; i++) {  //para que recorra todo el array 
     		document.getElementById(diasElegidos[i]).style.display = 'block'; //dpendiendo de los dias elegidos se va a mostrar en el display
     	} 

}









