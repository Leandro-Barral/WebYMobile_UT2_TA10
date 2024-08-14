function getSum(nums){
    const sum = nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log(sum);
    return sum;
}

getSum([1,2,3,4]);