def twoSum(arr,target):
    seen={}
    for i,num in enumerate(arr):
        complement=target-num
        if complement in seen:
            return [arr[complement],i]
        seen[num]=i
    []

arr=[1,2,3,4,9,7]
print(twoSum(arr,9))