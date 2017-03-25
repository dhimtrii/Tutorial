/***
* For Binary Search array needs to be sorted
* Binary search follows divide and conquere to search the value

* For example [1, 9, 14, 15, 25, 30, 39, 48] and we need to search 14

* First we devide the array into two halves

* So middle element is 25

* Now we compare if 14 > 25 || 14 <= 25

* If 14 <= 25 we remove the other half of the array

*  We continue the same process until we find the element

***/


function BinarySearch(arr, size, target) {
    var low = 0,
        high = size;
    
    while (low + 1 < high) {
        var test = (low + high)/2;
        if (arr[test] > target) {
            high = test;
        } else {
            low = test;
        }
    }
        
    if (arr[low] == target) {
        return low;
    }

    return -1;
}


var arr = [1, 9, 14, 15, 25, 30, 39, 48];
console.log(BinarySearch(arr, arr.length, 92));