function dowbleElem(){
  const numbers = [1, 2, 3, 6, 9]

  const result = numbers.map(function(val){return val*2;});
  console.log(result);
}

function notAnArrey(arr){
  if(!Array.isArray(arr)){
    return 'error';
  }
}

function nonNumericElementsInArray(arr) {
  function isntNumber(value){
    return typeof value === 'string';
  }
  if(arr.every(isntNumber)){
    return 'error';
  }

  // arr.forEach((item) => {
  //   if(typeof item === 'number'){
  //     return 'error';
  //   }
  // });

  // if(arr.filter(item => typeof item === 'number')){
  //   return 'error';
  // }
  // if(typeof (arr) !== 'number'){
  //   return 'error';
  // } 
}

function moreThanNumericElem(arr){
  if(arr.filter(item => typeof item !== 'number' && typeof item !== 'string')){
    return 'error';
  }
}

