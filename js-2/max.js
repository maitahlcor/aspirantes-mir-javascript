function max(imput) {
    try{
        let max = 0
        if (imput.length > 0){
            for (i=0; i<imput.length; i++){             
                 
                if(i==0){
                    max = imput[i]
                }else{
                    if(imput[i]>max){
                        max = imput[i]
                    }
                }               
            }

        }else{
            max = undefined
        }
        return max
   
    }catch(e){
        console.log(e);
    }
    
  }

  console.log(max([1, 3, 2])) // 3
  console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
  console.log(max([])) // undefined