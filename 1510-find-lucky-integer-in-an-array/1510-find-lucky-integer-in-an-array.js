/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let frequency = {};
    for (let num of arr){
        frequency[num] = (frequency[num] || 0) + 1;
    }
    console.log(frequency)

    let lucky = -1;
    
    for(let keys in frequency){
        const value = parseInt(keys)
        if(frequency[keys] === value){
            lucky = Math.max(lucky, value)        
        }
    }
    return lucky;
};


const arr = [1, 2, 2, 3, 3, 3];
findLucky(arr)