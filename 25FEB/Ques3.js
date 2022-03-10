let smallMissing=(arr)=>{
    let low=0;
    let high=arr.length-1;

    while(low<=high){
    let mid=Math.floor(low + (high-low)/2)
        
        if(arr[mid]===mid){

            low=mid+1

        }else{
            high=mid-1
        }

    }
    return low
}

console.log(smallMissing([0, 1, 2, 3, 4, 5, 6]))
