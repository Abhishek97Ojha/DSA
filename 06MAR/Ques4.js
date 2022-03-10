// Write a recursive code to check if a string is a palindrome or not.[Hint: reverse the string and send both strings into the function and check.]"
function checkPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return checkPalindrome(str.slice(1,-1))
    return false;
}

console.log(checkPalindrome('mom'));
console.log(checkPalindrome('hannah'));
console.log(checkPalindrome('cook'));
 
