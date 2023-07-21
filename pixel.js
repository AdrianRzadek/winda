function removeItemAll(arr, value) {
  var i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

var losPietro = Math.floor(Math.random() * 10) + 0;
//var losPietro=5;
minOsoba = Math.ceil(0);
maxOsoba = Math.floor(10);
maxPietro = Math.floor(losPietro);
var mainArray = [];
function createNestedArray() {
    var numArrays = Math.floor(Math.random() * 10) + 0; // liczba generowanych osob
  
    for (var i = 0; i < numArrays; i++) {
      var subArray = [];
 //pietro na jakim są
  
      for (var j = 0; j < losPietro; j++) {
        
       var lospietroTab = (Math.floor(Math.random()*losPietro)-1); // pietro na jakie chca jechac
       if(lospietroTab>-1){
        subArray.push(lospietroTab);
       }else{
        subArray.push(null);
       }
      }
  
      mainArray.push(subArray); // Insert the sub-array into the main array
    }
    console.log(numArrays)
    return mainArray;
  }
  
  createNestedArray();

  console.table(mainArray)
;  



function findElements(array, index) {
  var elements = [];

  for (var i = 0; i < array.length; i++) {
    if (index < array[i].length) {
      elements.push(array[i][index]);
    }
  }

  removeItemAll(elements,null)

  console.log('elementy ' + elements)
  return elements;
  console.log(elements.length);
}

// Example usage


var result = findElements(mainArray, 1);
console.log(result);
console.log(result.length); // Output: [2, 5, 8]




/*
// Index of the array you want to count elements from
const targetIndex = 1;

// Check if the targetIndex is within the bounds of the array
if (targetIndex >= 0 && targetIndex < mainArray.length) {
  const targetArray = mainArray[targetIndex];
  const elementCount = targetArray.length;
  console.log(`The array at index ${targetIndex} contains ${elementCount} elements.`);
} else {
  console.log(`Invalid target index: ${targetIndex}`);
}
*/
