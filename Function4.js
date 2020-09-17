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