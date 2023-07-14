var losPietro = Math.floor(Math.random() * 10) + 0;
  
  ///new

  var mainArray = [];
  function createNestedArray() {
      var numArrays = Math.floor(Math.random() * 10) + 1; // liczba generowanych osob
    
      for (var i = 0; i < numArrays; i++) {
        var subArray = [];
        var numElements = Math.floor(Math.random() * losPietro) + 0; //pietro na jakim są
    
        for (var j = 0; j < numElements; j++) {
          subArray.push(Math.floor(Math.random()*losPietro)); // pietro na jakie chca jechac
        }
    
        mainArray.push(subArray); // Insert the sub-array into the main array
      }
    
      return mainArray;
    }
    var nestedArray = createNestedArray();

  function getValuesFromArray(nestedArray, index) {

    if (index >= 0 && index < nestedArray.length) {
      return nestedArray[index];
    } else {
      return null;
    }

  }
  

  console.table(nestedArray);
  
  var specificIndex = 2; // Index of the specific array to retrieve

  var specificArray = getValuesFromArray(nestedArray, specificIndex);
  
  console.table("Specific Array:", specificArray);