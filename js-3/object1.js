let pedro = {
    nombre: 'Pedro Perez',
    edad: 30,
    activo: true,
    hobbies: ["programar","squash" ,"piano"]
}

console.log("la edad es " + pedro.edad);
pedro.estatura = 1.8;
delete pedro.activo;
for (const property in pedro) {
    console.log(`${property}: ${pedro[property]}`);
  }

  function saluda(pedro) {
    console.log("Hola, me llamo " + pedro.nombre )
  }

  saluda(pedro);