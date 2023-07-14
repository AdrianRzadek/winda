var losPietro = Math.floor(Math.random() * 10) + 0;
minOsoba = Math.ceil(0);
maxOsoba = Math.floor(10);
maxPietro = Math.floor(losPietro);

var tablicaPieter = new Array();

for (let i = 0; i < losPietro; i++) {
 //tablicaPieter[i] = new Array(2);
  for (var j = Math.floor((Math.random() * 10) + 0); j > 0; j--) {
    var randomN= Math.floor(Math.random()*10)+0;
    var randomY= Math.floor(Math.random()*10)+0;
    //tablicaPieter.push(randomN);
 /*tablicaPieter.slice(0, (Math.floor(Math.random() * (maxPietro) + minOsoba)),
      Math.floor(Math.random() * (maxPietro) + minOsoba),
      tablicaPieter.slice(Math.floor(Math.random() * (maxPietro) + minOsoba)),

)*/
//tablicaPieter[i] = losPietro;


  tablicaPieter[i] = [randomN , randomY]
}
}


//console.table(tablicaPieter);




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
  
  createNestedArray();
  createNestedArray();
  console.tabl
  
  