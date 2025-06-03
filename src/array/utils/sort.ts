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

export default { bubbleSort, selectionSort, insertionSort };
