
 /**
  * Function 6: 
  * even or odd?  will take in one parameter ( a number ) and print either even or odd, depending on the number. 
  */

 const evenOrOdd = function(num) {
    let ans = "";

    if (num % 2 === 0){
        ans = "even";
    }else if (num % 2 !== 0){
        ans = "odd";
    } 

    return ans;
};
  
console.log(evenOrOdd(15));
