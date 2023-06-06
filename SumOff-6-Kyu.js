/* 
// how to split a number into its digits
// use string(n) to turn the input into a string
// use from() method to make an array of individual digits that comprise the original number
// sum the split digits of the array
// return the sum
// if the returned sum has multiple digits, use string() and from() like before to split it
// then sum the digits
// return the sum
// let digits = Array.from(String(num), Number);

https://www.codewars.com/kata/541c8630095125aba6000c00

/* Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
*/


function summing(n) {
    let digits = Array.from(String(n), Number);
    let summedTotal = 0;
    for (let i=0; i < digits.length; i++) {
      summedTotal = summedTotal + digits[i]
    }
    return summedTotal
  }
  // summing(322)
  // console.log(summedTotal)
  function digitalRoot(nextSum) {
    let result = summing(nextSum)
    while (result >= 10) {
      result = summing(result)
    }
    return result
    }