// Two Sum

function twoSum(arr,target){
    let seen= {}
    for(let i=0;i<arr.length;i++){
        let complement=target-arr[i]
        if (complement in seen){
            return [seen[complement],i]

        }
        seen[arr[i]]=i
    }
    return []

}
const twoSumExpressive= (arr,target)=>{
    let map=new Map();
    for (let i=0;i<arr.length;i++){
        let complement= target - arr[i]
        if (map.has(complement)){
            return [map.get(complement),i]
        }
        map.set(arr[i],i)
    }
    return []
}
let arr=[2,7,11,15]
console.log(twoSumExpressive(arr,9))

// Best Time to Buy and Sell Stock
function bestProfit(prices){
    let maxProfit=0
   let minProfit=prices[0]
    for (let i=1;i<prices.length;i++){
        minProfit= Math.min(minProfit,prices[i])
        maxProfit=Math.max(maxProfit,prices[i]-minProfit)
    }
    return maxProfit
}

const maxProfit= (prices)=>{
    let maxProfit=0
    let buy = prices[0]

    for(let i=1;i<prices.length;i++){
        if (prices[i]<buy){
            buy=prices[i]
        }
        if (prices[i]-buy>maxProfit){
            maxProfit=prices[i]-buy
        }
    }
    return maxProfit
}
let prices = [7,1,5,3,6,4]

console.log(maxProfit(prices))

// Maximum Subarray
function maxSubArray(arr){
    let currentSum=0
    let maxSum=0
    for (let i=0;i<arr.length;i++){
        currentSum = Math.max(arr[i], currentSum+arr[i])
        maxSum=Math.max(maxSum,currentSum)
    }
    return maxSum;
}

const maxSubArrayExpressive = (arr)=>{
    let currentSum=arr[0]
    let maxSum=arr[0]
    for (let i=1;i<arr.length;i++){
        const combined = currentSum + arr[i];
        
        currentSum=arr[i]>combined ? arr[i] :combined   
        if (currentSum>maxSum){
            maxSum=currentSum
        }
    }
    return maxSum

}
console.log(maxSubArrayExpressive([-2,1,-3,4,-1,2,1,-5,4]))

// Contains Duplicate
function hasDuplicate(arr){
    let seen={}
    for (let i =0;i<arr.length;i++){
        if (arr[i] in seen){
            return true;
        }
        seen[arr[i]]++
    }
    return false
}
console.log(hasDuplicate([1,2,3,5]))