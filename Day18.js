//! Day 18: Algorithms
//! Tasks/Activities:
//todo Activity 1: Sorting Algorithms
//* Task 1: Implement the bubble sort algorithm to sort an array of numbers in asciing order. Log the sorted array. 
let arr = [5, 4, 3, 1, 2];
function bubbleSort(arr) {
    let n = arr.length;
    let swapped = false;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swapped = true;
            }

        }
        if (!swapped) {
            break;
        }
    }
    return arr;
}
console.log(bubbleSort(arr)); // Output: [1, 2, 3,4, 5]
//* Task 2: Implement the selection sort algorithm to sort an array of numbers in asciing order. Log the sorted array.
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (min != i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    return arr;
}
arr = [5, 4, 3, 1, 2];
console.log(selectionSort(arr)); // Output: [1, 2, 3,4, 5]

//* Task 3: Implement the quicksort algorithm to sort an array of numbers in asciing order. Log the sorted array.
function partition(arr, l, r) {
    let pivot = arr[r];
    let i = l - 1;
    for (let j = l; j < r; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }
    [arr[i + 1], arr[r]] = [arr[r], arr[i + 1]]
    return i + 1;
}
function quickSort(arr, l, r) {
    if (l < r) {
        let pivot = partition(arr, l, r);
        quickSort(arr, l, pivot - 1);
        quickSort(arr, pivot + 1, r);
    }
    return arr;
}
arr = [5, 4, 3, 1, 2];
console.log(quickSort(arr, 0, arr.length - 1)); // Output: [1, 2, 3,4, 5]

//todo Activity 2: Searching Algorithms
//* Task 4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.
function linearSearch(arr, t) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === t) {
            return i;
        }
    }
    return -1;
}
arr = [5, 4, 3, 1, 2];
console.log(`The index of 3 in ${arr} is ${linearSearch(arr, 3)}`);
//* Task 5: Implement the binary search algorithm to find a target value in a sorted array, Log the index of the target value.
function binarySearch(arr, t) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] === t) {
            return mid;
        }
        else if (arr[mid] < t) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
let sorrtedArray = [2, 4, 6, 8, 12];
console.log(`The index of 8 in ${sorrtedArray} is ${binarySearch(sorrtedArray, 8)}`);
//todo Activity 3: String Algorithms
//* Task 6: Write a function to count the occurrences of each character in a string. Log the character counts.
function count(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            count++;
        }
    }
    return count;
}
console.log(`Occurrence of o in Hello World is ${count("Hello, World!", "o")}`); // Output: 2
//* Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
function findTheLongestSubStr(s) {
    const lastIndex = new Array(256).fill(-1);
    let start = 0;
    let maxLength = 0;
    for (let i = 0; i < s.length; i++) {
        let charCode = s.charCodeAt(i);
        if (lastIndex[charCode] >= start) {
            start = lastIndex[charCode] + 1;
        }
        lastIndex[charCode] = i;
        maxLength = Math.max(maxLength, i - start + 1);

    }
    return maxLength;
}
console.log(`The longest Substring in abccd is of length ${findTheLongestSubStr("abccd")}`); // Output: 3


//todo Activity 4: Array Algorithms
//* Task 8: Write a function to rotate an array by k positions. Log the rotated array.
function rotateArray(arr, k){
    n= arr.length;
    k = k % n;
    reverseArray(arr, 0, n-1);
    reverseArray(arr, 0, k-1);
    reverseArray(arr, k, n-1);
    return arr;
}
function reverseArray(arr, s, e){
    while(s<e){
        [arr[s], arr[e]] = [arr[e], arr[s]];
        s++;
        e--;
    }
}
console.log(rotateArray([1, 2,3, 4, 5],2)); //Output: [ 4, 5, 1, 2, 3 ]
//* Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.
function mergeSortedArrays(arr1, arr2) {
    let i = 0;
    let j = 0;
    let arr = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            arr.push(arr1[i]);
            i++;
        }
        else {
            arr.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        arr.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        arr.push(arr2[j]);
        j++;
        }
        return arr;
}
console.log(mergeSortedArrays([1, 3, 5], [2, 4]));//Output: [ 1, 2, 3, 4, 5 ]



