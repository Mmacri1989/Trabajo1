const autos = require('./autos');

const concesionaria = {
    autos:[],
    setAutos: function(parametro){
        this.autos=parametro;
    },


    buscarAuto:function(patente){
        for (let i= 0; i<this.autos.length; i++){
            if (autos[i].patente === patente){
                return autos[i]
            }
        }
    },

    venderAuto:function(patente){
        //console.log ("concesionaria.venderAuto()");
        // Buscar Automovil
        let auto = this.buscarAuto(patente)
       
        // Asignar estado de vendido al automovil
        if (auto != null)
            auto.vendido = true;
        
        return auto;
    },

      autosParaLaVenta : function(auto){
      // Listar autos
      let sinVender = this.autos
      // Filtrar autos y devolver solo los que estan a la venta
      let autoFiltrado = sinVender.filter (function(sinVender){
         return (sinVender.vendido === false)
      })
   return autoFiltrado
},

autosNuevos: function(auto){
        let autos0km = this.autosParaLaVenta()
        //console.log(autos0km);
        let nuevos =autos0km.filter (function(autos0km){
            return (autos0km.km < 100)
            })
            //console.log(nuevos);
        return nuevos;
    },

listaDeVentas: function(ventas){
    let totalvar = this.autos
    let vendidos = totalvar.filter (function(auto){
        return (auto.vendido === true)
    })
    let ventasTotal = []
    vendidos.forEach(function(auto){
       ventasTotal.push (auto.precio)
    })
    return ventasTotal
},

totalDeVentas: function(ventas){
    let ventasTotal = this.listaDeVentas()
    let sumatoria =  0
    if (ventasTotal.length != 0){
        sumatoria = ventasTotal.reduce(function(valorAnterior, ventasTotal){ 
            return valorAnterior + ventasTotal
        }) 
    }
    return sumatoria
},

puedeComprar: function(auto, objLiteral){
        let valorcuotasAuto = auto.precio/auto.cuotas
        return (objLiteral.capacidadDePagoEnCuotas>=valorcuotasAuto && objLiteral.capacidadDePagoTotal>auto.precio)
},

autosQuePuedeComprar: function(objLiteral){
        let autosParaVender= this.autosParaLaVenta()
        let verificarCompra= autosParaVender.filter(auto=>this.puedeComprar(auto,objLiteral))
        return verificarCompra
     }
};


concesionaria.setAutos(autos);
//console.log (concesionaria.autos);
console.log (concesionaria.autosNuevos());
console.log (concesionaria.venderAuto("JJK116"));
console.log (concesionaria.autos);
