/*** Selection Sort

2 7 4 1 5 3

Compare 2 with 7 4 1 5 3. Here 1 is minimum, so swap 2 and 1
1 7 4 2 5 3 //After first Pass

Compare 2 with 4 7 5 3. Here 2 is minimum, so swap 2 and 7
1 2 4 7 5 3 //After second Pass

Compare 4 with 7 5 3. Here 3 is minimum, so swap 4 and 3
1 2 3 7 5 4 //After third Pass

Compare 7 with 5 4. Here 4 is minimum, so swap 7 and 4
1 2 3 4 5 7 //After fourth Pass our array is sorted

***/


function SelectionSort(arr, n) {
    for(i = 0; i < n-2; i++) {
        var imin = i;
        for(j = i+1; j < n-1; j++) {
            if(arr[imin] > arr[j]) {
                imin = j;
            }
        }
        var temp = arr[imin];
        arr[imin] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

var arr = [2, 7, 4, 1, 3, 5, 8];

alert(SelectionSort(arr, arr.length))









function SelSort(arr, n) {
    for(var i = 0; i< n-2; i++) {
        var imin = i;
        for(var j = i+1; j<n-1; j++) {
            if(arr[imin] > arr[j]) {
                imin = j;
            }
        }
        var tmp = arr[imin];
        arr[imin] = arr[i];
        arr[i] = tmp;
    }
}