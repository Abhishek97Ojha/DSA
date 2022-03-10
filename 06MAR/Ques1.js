function min(arr, n)
{
    if (n == 1)
        return arr[0];
         
    return Math.min(arr[n - 1],
        min(arr, n - 1));
}
function max(arr, n)
{
    if (n == 1)
        return arr[0];
     
    return Math.max(arr[n - 1],
        max(arr, n - 1));
}
let arr = [1,-1,0,2,-2,3,-3,4,-4];
let n = arr.length;
document.write(min(arr, n));
document.write(max(arr, n));
