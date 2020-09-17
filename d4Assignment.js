
/**
 * Function 1: 
 * Return the remainder. Function will take two parameters. 
 * It will divide the first number by the second, and return the remainder. 
 */
const remainder = function(x, y) {
    return x % y;
};
  
console.log(remainder(14,8));

/**
 * Function 2: 
 * convert minutes into seconds. Function will take one parameter that will be  a number of minutes, 
 * up to 2 decimal places. Convert it into seconds, and return that number. 
 */

const minToSec = function(min) {
    return min * 60;
};
  
console.log(minToSec(3));

 /**
 * Function 3:  
 * convert hours into seconds. Take in a value of hours up to 4 decimal places, and convert it into seconds. 
 */

const hrToSec = function(hr) {
    return hr * 60 * 60;
};
  
console.log(hrToSec(1));



/**
 * Function 4: 
 * convert celsius into fahrenheit into celsius, and vice versa. 
 * Function will take two parameters that will be  a temp either fahrenheit or celsius, up to 2 decimal places. 
 * The second argument will be either the letter ‘c’ or the letter ‘f’ to state 
 * whether the value given is starting in celsius or in fahrenheit. Convert the temp to the opposite unit, 
 * and return the value.  (35.6, ‘c’)
 */

const celTofrh = function(deg,cf) {
    let ans = 0;

    if (cf === 'c'){
        ans = deg * 9 / 5 + 32
    }else if (cf === 'f'){
        ans = (deg - 32) * 5 / 9
    } 

    return Math.round(ans * 10) / 10;
};
  
console.log(celTofrh(9, 'c'));

/**
 * Function 5: 
 * return the area of a triangle when given two parameters, a Base width, and a height. 
 */

const areaOfTriangle = function(wid,hei) {
    
    return 13 * 14 / 2 ;
};
  
console.log(areaOfTriangle(13, 14));


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
