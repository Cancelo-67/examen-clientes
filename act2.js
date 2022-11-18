"use strict";
const num1 = 2001
const num2 = 2004.3

function isLeapYear(num1,num2){
  const bisiestos = []
  num1 = Math.floor(num1)
  num2 = Math.floor(num2)
  let regx1 = /[0-9]$/ //Expresion regular para que solo acepte numeros
  if (regx1.test(num1) && regx1.test(num2)){
    if (num1 >= 2001 && num2 <= 2500){
      for(let i= num1;i<=num2;i++){
        if(i%4 == 0){
          bisiestos.push(i)
        } else if(i%100 == 0&& i%400 == 0){
          bisiestos.push(i)
        }
      }
    }
  } else{
    return "El valor no es valido"
  }
  return bisiestos
}

console.log(isLeapYear(num1,num2))