function join(imput) {
    try{
        let join = ""
        if (imput.length > 0){
            for (i=0; i<imput.length; i++){             
                join = join + " " + imput[i];                
            }

        }
        return join
   
    }catch(e){
        console.log(e);
    }
    
  }

  console.log(join(["Hola", "Mundo"])) // "Hola Mundo"
  console.log(join(["Make", "It", "Real"])) // "Make It Real"
  console.log(join([])) // ""