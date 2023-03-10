function sum(imput) {
    try{
        let suma = 0
        if (imput > 0){
            for (i=1; i<=imput; i++){
                suma = suma + i
            }

        }else{
            console.log("el numero debe ser posirivo") 
        }
        return console.log("La suma es " + suma)
   
    }catch(e){
        console.log(e);
    }
    
  }

  sum(4) ;
  sum(10) ;
  sum(15) ;