function sum(imput) {
    try{
        let suma = 0
        if (imput.length > 0){
            for (i=0; i<imput.length; i++){             
                suma = suma + imput[i];                
            }

        }
        return suma
   
    }catch(e){
        console.log(e);
    }
    
  }

console.log(sum([1, 2, 3])) // 6
console.log(sum([10, 8, 12, 5])) // 35
console.log(sum([])) // 0