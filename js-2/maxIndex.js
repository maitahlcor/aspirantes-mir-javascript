function maxIndex(imput) {
    try{
        let max = 0
        let maxIndex = 0;
        if (imput.length > 0){
            for (i=0; i<imput.length; i++){             
                 
                if(i==0){
                    max = imput[i]
                    maxIndex = i
                }else{
                    if(imput[i]>max){
                        max = imput[i]
                        maxIndex = i
                    }
                }               
            }

        }else{
            maxIndex = -1
        }
        return maxIndex
   
    }catch(e){
        console.log(e);
    }
    
  }

  console.log(maxIndex([1, 3, 2])) // 3
  console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 10
  console.log(maxIndex([])) // undefined