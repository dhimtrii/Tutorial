/*****

2 7 4 1 5 3

compare 2 with 7. 2 in not greater 7 so move on to next position
2 7 4 1 5 3

compare 7 with 4. Here 7 is greater than 4 so we swap 7 and 4
2 4 7 1 5 3

compare 7 with 1. Here 7 is greater than 1 so we swap 7 and 1
2 4 1 7 5 3

compare 7 with 5. Here 7 is greater than 5 so we swap 7 and 5
2 4 1 5 7 3

compare 7 with 3. Here 7 is greater than 3 so we swap 7 and 3
2 4 1 5 3 7 //After first pass

compare 2 with 4. 2 in not greater 4 so move on to next position
2 4 1 5 3 7

compare 4 with 1. Here 4 is greater than 1 so we swap 4 and 1
2 1 4 5 3 7

compare 4 with 5. 4 in not greater 5 so move on to next position
2 1 4 5 3 7

compare 5 with 3. Here 5 is greater than 3 so we swap 5 and 3
2 1 4 3 5 7 //After Second Pass

compare 2 with 1. Here 2 is  greater than 1 so we swap 2 and 1
1 2 4 3 5 7

compare 2 with 4. Here 2 is not greater than 4 so we do not swap
1 2 4 3 5 7

compare 4 with 3. Here 4 is greater than 3 so we swap 4 and 3
1 2 3 4 5 7

Reference: https://www.youtube.com/watch?v=Jdtq5uKz-w4

***/



function BubbleSort(arr, n) {
    for(i = 0; i < n-1; i++) {
        for(j = i+1; j < n; j++) {
            if(arr[i] > arr[j]) {
                var temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        }
    }
    return arr;
}

var arr = [2, 7, 4, 1, 3, 5, 8];

alert(BubbleSort(arr, arr.length))