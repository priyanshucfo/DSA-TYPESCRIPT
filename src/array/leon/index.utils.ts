import traverse from "./utils/traverse.ts";
import update from "./utils/update.ts";
import search from "./utils/search.ts";
import sort from "./utils/sort.ts";

const arr = [99, 98, 97, 96, 89, 1, 10, 90, 8, 67, 23, 54];
const array100 = Array.from({ length: 100 }, () => Math.floor(Math.random() * 100) + 1);
const arrsh = [9, 8, 3, 7, 5, 6, 4, 1];
const arrcnt = [0, 1, 3, 1, 1];

//  traverse.arrayTraverse(arr, 1);

//  const updatedIdx = update.updateArrayValue(arr, 3, 88);
//  console.log("Index updated:", updatedIdx);

//  const foundValues = search.linearSearch(arr, 89);
//  console.log("Value found?", foundValues);

//  const foundValuess = search.binarySearch([2, 4, 6, 8, 10, 12, 14, 16, 18], 12);
//  console.log(foundValuess);

const sortedArray = sort.countingSort(arrcnt);
console.log(sortedArray);

// console.log("Array", arr);