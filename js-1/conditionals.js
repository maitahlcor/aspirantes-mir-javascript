function calcuarColor(num) {
    var color;
    if (num === 1) {
      color = "Negro";
    } else if(num == 2) {
      color = "blanco";
    } else if (num == 3) {
      color = "Azul";
    } else {
      color = "verde";
    }
  
    return "El color es " + color;
  }
  
  // código de prueba
  console.log(calcuarColor(1)) // "El color es negro"
  console.log(calcuarColor(2)) // "El color es blanco"
  console.log(calcuarColor(3)) // "El color es azul"
  console.log(calcuarColor(8)) // "El color es verde"

  function calcuarColorSwitch(num) {
    var color;
 
    switch (num) {
        case 1:
            color = "Negro";
          break;
        case 2:
            color = "blanco";
          break;
        case 3:
            color = "Azul";
          break;
        default:
            color = "verde";
          break;
      }
  
    return "El color es " + color + " !";
  }
  
  // código de prueba
  console.log(calcuarColorSwitch(1)) // "El color es negro"
  console.log(calcuarColorSwitch(2)) // "El color es blanco"
  console.log(calcuarColorSwitch(3)) // "El color es azul"
  console.log(calcuarColorSwitch(8)) // "El color es verde"