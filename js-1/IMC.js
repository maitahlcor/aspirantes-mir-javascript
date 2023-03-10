function bmi(peso, talla) {
    try{
        //let imc = (peso)/(talla*talla)
        let imc = (peso)/(talla^2)
        console.log(`Su IMC es ${imc}`);
        return imc
    }catch(e){
        console.log(e);
    }
    
  }

  bmi(65 , 1.8) ;
  bmi(72, 1.6) ;
  bmi(52, 1.75) ;