//The first parameter should be the weight and the second should be the height.
function bmiCalculator(weight,height){
var bmi = (weight)/Math.pow(height,2);
return (bmi);
console.log(bmi)
}






// /* function call

var bmi = bmiCalculator(65, 1.8); 
bmi=Math.round(bmi);


// bmi should equal 20 when it's rounded to the nearest whole number.

// */
