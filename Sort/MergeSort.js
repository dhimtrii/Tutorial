/*** Merge Sort ***/

/***

2 4 1 6 8 5 3 7

2 4 1 6      8 5 3 7                          Make the Half
   L            R

2 4    1 6    8 5    3 7                      Make Half again
 L      R      L      R

2    4    1    6    8    5    3    7          Make half until sub arrays are sorted order
L    R    L    R    L    R    L    R


2 4    1 6    5 8    3 7                      Now start merging by comparing L and R
 L      R      L      R
 
1 2 4 6    3 5 7 8                            Again start merging by comparing L and R
   L          R
   
1 2 3 5 5 6 7 8                               Now we got the sorted array



***/





function Merge(left, right, arr) {
    
    var nl = left.length;
    var nr = right.length;
    var i = j = k = 0;
    
    while (i < nl && j < nr) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i = i + 1;
        } else {
            arr[k] = left[j];
            j = j + 1;
        }
        k = k + 1;
    }
    
    while (i < nl) {
        arr[k] = left[i];
        i = i + 1;
        k = k + 1;
    }
    
    while (j < nr) {
        arr[k] = left[j];
        j = j + 1;
        k = k + 1;
    }
    
    return arr;
}


function DivideArr(arr) {
    var n = arr.length;
    if (n < 2) {
        return;
    }
    var mid = n / 2;
    var left = [];
    var right = [];
    
    for (i=0; i< mid; i++) {
        left[i] = arr[i];
    }
    
    for (i=mid; i< n; i++) {
        right[i-mid] = arr[i];
    }
    
    DivideArr(left);
    DivideArr(right);
    Merge(left, right, arr);
    
}



var arr = [2, 4, 1, 6, 8, 5, 3, 7];
alert(DivideArr(arr));