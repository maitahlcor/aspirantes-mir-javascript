let receta = {};
receta.nombre = "Sandwich";
receta.ingredientes = [];
receta.ingredientes.push({nombre:"Pan", cantidad:2});
receta.ingredientes.push({nombre:"Queso", cantidad:1});
console.log(receta.ingredientes[0].nombre);
let suma =0;
receta.ingredientes.forEach(ingredientes =>  {
    suma = ingredientes.cantidad +suma 
});
console.log(suma);