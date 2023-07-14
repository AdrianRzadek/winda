// Funkcja generująca losową liczbę całkowitą z przedziału [min, max]
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
   
  // Tworzenie tablicy z danymi
  var numberOfFloors = 10; // Ilość pięter
  var peopleData = [];
   
  for (var i = 0; i < numberOfFloors; i++) {
    var floor = []; // Losowa cyfra osoby na piętrze
    numberOfPeople = Math.floor((i+1)*2/2);
    for(var j = 0; j < numberOfPeople; j++) {
        var personOnFloor = getRandomNumber(1,10);
        var desiredFloor = getRandomNumber(1,10);

        var personData = {
            person: personOnFloor,
            desiredFloor: desiredFloor
          };
        
        floor.push(personData);
    }
    peopleData.push(floor);
  }
   
  // Wyświetlanie tablicy z danymi
  console.dir(peopleData);