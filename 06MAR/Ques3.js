// Write a recursive code to find the factorial of a user defined N 
// example : N = 5 => 5! => 120 must be printed on screen. 
function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}
let num = 5;
document.write("Factorial of " + num + " is " + factorial(num));
 
