const { template } = require('@babel/core')

function concatArray(array1, array2) {
  //code here
  if (array1 == null && array2 == null) {
    return undefined
  }
  else if (array1 == [] && array2 == []){
    return []
  }
  array1 = array1 ?? []
  array2 = array2 ?? []
  array = array1.concat(array2)
  return array
}
module.exports = concatArray
