window.addEventListener( // NO TOCAR
  'load',  // NO TOCAR
  function() // NO TOCAR
  { // NO TOCAR


    // 10.1)
    let Producto = {
      nombre : "laptop",
      codigo : "123abc",
      tieneDescuento : true,
      descuento : 0.1,
      especificacionesTecnicas : ["procesador i9 9th","32gb ram ddr5","ssd 1tb","usb tipo c"],
      encender : function() {
        let resultado = "el " + Producto.nombre + " esta encendido";
        return resultado;
      },
      nuevaEspecificacionTecnica : function(especificacionTecnica) {
        this.especificacionesTecnicas.push(especificacionTecnica);
      }
    }





    // 10.2)
    // ESCRIBIR AQUI




    // 10.3)
    // ESCRIBIR AQUI





    // 10.4)
    // ESCRIBIR AQUI
    Producto.nuevaEspecificacionTecnica("Placa de video 2080 MaxQ");
    mostrarProducto(Producto, true);












  }// NO TOCAR
);// NO TOCAR
