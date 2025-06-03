export function updateArrayValue<T>(array: T[], idx: number, value: T) {
  if (array.length <= idx) {
    return -1;
  }
  array[idx] = value;
  return idx;
}

export default { updateArrayValue };
