function bubbleSort<T>(array: T[]) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

//Soltion 1.0
function selectionSort<T>(array: T[]) {
  for (let i = 0; i < array.length; i++) {
    let smIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[smIdx] > array[j]) {
        smIdx = j;
      }
    }

    if (array[i] > array[smIdx]) {
      let temp = array[i];
      array[i] = array[smIdx];
      array[smIdx] = temp;
    }
  }
  return array;
}

function insertionSort<T>(array: T[]) {
  for (let i = 1; i < array.length; i++) {
    let key = i;
    let keyValue = array[i];
    let j = 0;
    for (j = key - 1; j >= 0; j--) {
      // console.log("Key is", keyValue, "Elements before key", array[j]);
      if (array[j] > keyValue) {
        // console.log("before", array);
        array[j + 1] = array[j];
        // console.log("after", array);
      } else {
        break;
      }
    }
    array[j + 1] = keyValue;
    // console.log("Array after iteration", array);
  }
  return array;
}

function shellSort(array: number[]) {
  let interval = array.length;
  do {
    interval = Math.round(interval / 2);
    let inc = 0;
    for (let i = 0; i < array.length; i += interval) {
      if (i + interval > array.length - 1) {
        i = ++inc;
        if (i >= interval) {
          break;
        }
      }
      let keyIdx = i + interval;
      let keyValue = array[keyIdx];
      let j = i;
      for (j; j >= inc; j -= interval) {
        if (array[j] > keyValue) {
          array[j + interval] = array[j];
        } else {
          break;
        }
      }
      array[j + interval] = keyValue;
    }
    // console.log("\n");
  } while (interval !== 1);

  return array;
}

function countingSort(array: number[]) {
  let maxElement = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }

  const countArray: number[] = new Array(maxElement + 1).fill(0);
  const sortedArray: number[] = new Array(array.length).fill(0);

  for (let i = 0; i < array.length; i++) {
    countArray[array[i]]++;
  }

  for (let i = 0; i < countArray.length - 1; i++) {
    countArray[i + 1] += countArray[i];
  }

  for (let i = array.length - 1; i >= 0; i--) {
    let reindex = countArray[array[i]] -= 1;
    sortedArray[reindex] = array[i];
    // console.log("index", reindex, "value", array[i], "index", i);
  }

  return sortedArray;
}

export default {
  bubbleSort,
  selectionSort,
  insertionSort,
  shellSort,
  countingSort,
};
