function Unidad(marca, modelo, precio, km, color, cuotas, anio, patente, vendido)
{
    this.marca=marca
    this.modelo=modelo
    this.precio=precio
    this.km=km
    this.color=color
    this.cuotas=cuotas
    this.anio=anio
    this.patente=patente
    this.vendido=vendido
}

let autos = [{marca:"Ford", modelo:"Fiesta", precio:150000, km:200, color:"Azul", cuotas:12, anio:2019, patente:"APL123", vendido:false},
{marca:"Toyota", modelo:"Corolla", precio:100000, km:0, color:"Blanco", cuotas:14, anio:2019, patente:"JJK116", vendido:false}
];

autos.push (autos)
console.log(autos)
module.exports=autos