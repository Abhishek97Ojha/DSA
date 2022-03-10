let found=(arr,target)=>{

    let low=0;
    let high=arr.length-1;
    while(low<=high){
        let mid =Math.floor(low+(high-low)/2)
        if(arr[mid]===target){
            return mid
        }else if(target>arr[mid]){
            low=mid+1
        }else{
            high=mid-1
        }
    }
    return low
}

console.log(found([1,3,5,6],7));
