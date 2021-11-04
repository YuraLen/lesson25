const dowbleElem = (arr) => {
  let arrNew = [];
  if (Array.isArray(arr) === false) {
    return 'error';
  }
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      arrNew.push(arr[i] * 2);
    }
  }
  arrNew = arrNew.filter(Number);
  if (arrNew.length === 0) {
    return 'error';
  };
  return arrNew
};
