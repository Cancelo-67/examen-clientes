"use strict";

const usuario1 = {
  nombre: "Alfredo",
  apellidos: "Gutierrez",
  nivel: 1,
  puntuacion:1
}

const usuario2 = {
  nombre: "Alberto",
  apellidos: "Mendez",
  nivel: 1,
  puntuacion:1
}


const usuarios = {usuario1,usuario2}
console.log(usuarios.lenght)

function sumarPuntuacion(usuarios){
  for(let i = 0;i<2;i++){
    if(usuarios[i].puntuacion>10){
      usuarios[i].nivel + 1
    }
  }
}
sumarPuntuacion(usuarios)
console.log(usuario1)