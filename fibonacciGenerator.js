function fibonacciGenerator (n) {
    if (n > 0) {
        var fArray = [];
        fArray.push(0);
        if (n >= 2) {
            fArray.push(1);
        }
 
        for (var i = 2; i < n; i++) {
            fArray.push(fArray[i - 1] + fArray[i - 2]);
        }
 
        //Return an array of fibonacci numbers.
        return fArray;
    }
}
