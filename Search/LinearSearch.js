function LinearSearch(arr, size, target) {
    for(var i=0; i<size; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    
    return -1;
}


var arr = [48, 88, 3, 81, 92, 64, 44, 96];
console.log(LinearSearch(arr, arr.length, 92));