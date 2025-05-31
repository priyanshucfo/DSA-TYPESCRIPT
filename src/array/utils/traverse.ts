function arrayTraverse<T>(array: T[], direction: 1 | -1) {
  //Forward => direction is 1 then 0...len inc++
  //Backward => direction is -1 then -len...0 inc++
  const start = direction === 1 ? 0 : -array.length + 1;
  const end = direction === 1 ? array.length - 1 : 0;

  for (let i = start; i <= end; i++) {
    console.log(array[Math.abs(i)]);
  }

}

export default { arrayTraverse };
