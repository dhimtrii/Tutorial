/*** Quick Sort ***/



function Partition(arr, start, end) {
    var pivot = arr[end];
    
    var pIndex = start;
    
    for (i=start; i<end; i++) {
        if(arr[i] <= pivot) {
            var temp = arr[pIndex];
            arr[pIndex] = arr[i];
            arr[i] = temp;
            pIndex = pIndex + 1;
        }
    }
    var temp = arr[pIndex];
    arr[pIndex] = arr[end];
    arr[end] = temp;
    
    return pIndex;
    
}



function QuickSort(arr, start, end) {
    
    /*if (start >= end) {
        return;
    }*/
    
    if (start < end) {
        var pIndex = Partition(arr, start, end);
        QuickSort(arr, start, pIndex-1);
        QuickSort(arr, pIndex+1, end);
    }
}



var arr = [7, 6, 4, 5, 3, 2, 0, 1];

alert(QuickSort(arr, 0, arr.length-1))