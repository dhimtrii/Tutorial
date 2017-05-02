

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

//Using Iterative method
function BinarySearch(arr, size, target) {
    var low = 0,
        high = size - 1;
    
    while (low <= high) {
        var mid = parseInt((low + high)/2);
        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
        
    return -1;
}

//Using Recursion method
function BinarySearchRec(arr, low, high, target) {
    
    if(low > high) {
        return -1;
    }
    var mid = parseInt((low + high)/2);
    if (arr[mid] == target) {
        return mid;
    } else if (arr[mid] > target) {
        high = mid - 1;
        return BinarySearchRec(arr, low, high, target);
    } else {
        low = mid + 1;
        return BinarySearchRec(arr, low, high, target);
    }

}


var arr = [1, 9, 14, 15, 25, 30, 39, 48];
console.log(BinarySearch(arr, arr.length, 92));
console.log(BinarySearchRec(arr, 0, arr.length, 92));