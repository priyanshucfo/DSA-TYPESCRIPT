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

function insertionSort<T>(array: T[]) {}

export default { bubbleSort, selectionSort, insertionSort };
