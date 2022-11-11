function fibonacciGenerator (n) {

    
    //Write your code here:
    if (n===1){
        return output = [0];
    } else if (n===2) {
        return output = [0,1];
    } else {
        while (output.length<=n){
                var value1 =output.length-1;
                value1 = output[value1];
                var value2 = output.length-2;
                value2 = output[value2];
                var value3 = value1 + value2;
          output.push(value3);
              n++; 
            return output;
        }
      
    }
