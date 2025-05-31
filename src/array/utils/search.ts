function linearSearch<T>(array: T[], searchValue: T) {
  for (let i = 0; i < array.length; i++) {
    if (searchValue === array[i]) {
      return true;
    }
  }
  return false;
}

function binarySearch<T>(array: T[], searchValue: T) {
  let lowIdx = 0;
  let highIdx = array.length - 1;
  let midIdx = Math.round((lowIdx + highIdx) / 2);

  console.log(lowIdx, midIdx, highIdx);

  if (searchValue < array[lowIdx] || searchValue > array[highIdx]) {
    return false;
  }

  while (lowIdx <= highIdx) {
    if (searchValue === array[midIdx]) {
      return true;
    }

    if (searchValue < array[midIdx]) {
			highIdx = midIdx - 1;
			midIdx = Math.round((lowIdx + highIdx) / 2);
			// console.log("mid1", "low", lowIdx, array[lowIdx], "mid", midIdx, array[midIdx], "high", highIdx, array[highIdx]);
    } else if (searchValue > array[midIdx]) {
			lowIdx = midIdx + 1;
			midIdx = Math.round((lowIdx + highIdx) / 2);
			// console.log("mid2", "low", lowIdx, array[lowIdx], "mid", midIdx, array[midIdx], "high", highIdx, array[highIdx]);
		} else {
			return false;
		}
	}
	return false;
}

export default { linearSearch, binarySearch };
