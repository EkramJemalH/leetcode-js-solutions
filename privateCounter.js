/*Private Counter

Make a function called createCounter() that returns two things:

a function to increment the counter

a function to get the current value*/
function createCounter(){
  let counter=0;
  function increment(){
    counter ++;
    console.log(counter);
  }
  function getvalue(){
      console.log(counter);
    }
  return {
    increment,
    getvalue
  }
}
let count=createCounter();
count.increment();
count.increment();
count.getvalue();