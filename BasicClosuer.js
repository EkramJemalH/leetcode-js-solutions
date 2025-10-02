/*Create a function called makeMultiplier(factor) that returns another function which multiplies any number by that factor.*/

function makeMultiplier(factor){
  return function(number){
    let multiply=number*factor;
    console.log(multiply);
  }
}
const double=makeMultiplier(2);
double(10)
const triple=makeMultiplier(3);
triple(20);