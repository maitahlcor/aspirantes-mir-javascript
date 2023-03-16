let persona ={
    nombre: 'Bruce Wayne',
    edad: 36,
    profesion: "js Developer",
    ciudad:"Gotham"
}
console.log(persona);
function presentacion (persona){
console.log("Hola mi nombre es "+ persona.nombre + " tengo "+ persona.edad+" años"+ " y vivo en " +persona.ciudad)
}
presentacion(persona);
persona.hobbies = ["tecnologia", "artes marciales", "empresas","noche", "justicia"]
console.log(persona.hobbies);
persona.hobbies.forEach(hobbies => {
    console.log(hobbies)
});