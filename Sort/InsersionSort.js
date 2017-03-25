/*** Insertion Sort ***/

/***

7 2 4 1 5 3

2 will be compared with 7
2 7 4 1 5 3

Next 4 will be compared with 2 7
2 4 7 1 5 3

Next 1 will be compared with 2 4 7
1 2 4 7 5 3

Next 5 will be compared with 1 2 4 7
1 2 4 5 7 3

Next 3 will be compared to 1 2 4 5 7
1 2 3 4 5 7

Array is sorted now

Best case O(n)
Average case O(n2)
Worst case O(n2)

***/


function InsertionSort(arr, len) {
    
    for (i=1; i<n; i++) {
        
        var imin = i;
        
        for (j=0; j<i; j++) {
            
            if (arr[j] > arr[imin]) {
                var temp = arr[imin];
                arr[imin] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}


var arr = [7, 2, 4, 1, 5, 3];

alert(InsertionSort(arr, arr.length));



/**** OR ****/

function InsertionSort(arr, len) {
    
    for (i=1; i<len; i++) {
        
        var value = arr[i];
        var hole = i;
        
        while(hole > 0 && arr[hole-1] > value) {
        		arr[hole] = arr[hole-1];
            hole = hole-1;
        }
        arr[hole] = value;
    }
    return arr;
}


var arr = [7, 2, 4, 1, 5, 3];

alert(InsertionSort(arr, arr.length))