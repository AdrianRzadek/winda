var iloscOsobNaPietrach = [];
const winda_max = 20; //maksymalna liczba osób w windzie
var losPietro = Math.floor(Math.random() * 50) + 0;
min = Math.ceil(0); //min osoba
min2 = Math.ceil(2);
max1 = Math.floor(3);
max2 = Math.floor(10); //max osoaba
let counter = 0;
var winda_osoby = [0]; //windźiarzszżs
var time = [0]; //tablica bliźniacza do winda_osoby
var time_max = 0;
var time_avg = 0;
var osoby_na_pietrze = [];

const outerDiv = document.getElementById("inf");
const building = document.createElement("div");
building.setAttribute("class", "building");
const elevator_container = document.createElement("div");
elevator_container.setAttribute("class", "elevator-container");

const elevator = document.createElement("div");
elevator.setAttribute("class", "elevator");

const elevator_door = document.createElement("div");
elevator_door.setAttribute("class", "elevator-door");

elevator.appendChild(elevator_door);

elevator_container.appendChild(elevator);

const floors = document.createElement("div");
floors.setAttribute("class", "floors");
for (let i = 0; i < losPietro; i++) {
  
  const floor = document.createElement("div");
  floor.setAttribute("class", "floor");
  floor.setAttribute("data-floor", `${i}`);
  const num = document.createElement("p");
  const text = document.createTextNode('Piętro' + i );
  num.appendChild(text);
  const floor_window = document.createElement("div");
  floor_window.setAttribute("class", "floor-window");

  floor.appendChild(num);

  floor.appendChild(floor_window);

  floors.appendChild(floor);
}
building.appendChild(elevator_container);

building.appendChild(floors);

outerDiv.appendChild(building);

//document.getElementById("info"+3).innerHTML = "piętro:"+ i + "ilosc osob na pietrze"+ iloscOsobNaPietrach.indexOf(i)  ;

for (var j = Math.floor(Math.random() * (max1 - min2) + min2); j > 0; j--) {
  //winda_osoby = [Math.floor(Math.random() * (max2 - min) + min)];
  var winda_pietro = Math.floor(Math.random() * 50) + 0;

  var kierunek_windy = 0;
  var ostatnie_pietro = 0;

  var pietra = []; //tabela osob na pieterach
  console.table(pietra);

  //usuwanie osob z tabeli poza windą
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

  function removeItemWinda() {
    var i = 0;
    while (i < winda_osoby.length) {
      if (winda_osoby[i] === winda_pietro) {
        winda_osoby.splice(i, 1);
        time.splice(i, 1);
      } else {
        ++i;
      }
    }
    
  }

  //dodaje os do windy
  function addToWinda() {
    osoby_na_pietrze = [];
    var tab_pomocnicza =[];

    for (var j = 0; j < pietra.length; j++) {
      if (winda_pietro < pietra[j].length) {
        osoby_na_pietrze.push(pietra[j][winda_pietro]); // wpisywanie osób z tabeli 'pietra' do 'osoby_na_pietrze'
      }
    }
    removeItemAll(osoby_na_pietrze, null); // usuwanie nulla

    if (
      osoby_na_pietrze.length < winda_max &&
      osoby_na_pietrze.length < winda_max - winda_osoby.length // sprawdzanie czy jest miejsce w windzie
    ) {
      winda_osoby = winda_osoby.concat(osoby_na_pietrze); // dodanie osób do windy

      console.log("winda osoby" +winda_osoby);
      var l, n = osoby_na_pietrze.length;
      for (l = 0; l < n; l++) {
        tab_pomocnicza[l] = 0;
    }
      time = time.concat(tab_pomocnicza);
      console.log('time ' + time)
      winda_osoby = winda_osoby.flat(); // takie na wszelki wypadek, lepiej nie ruszać
    }
    console.log("osoby wychodza z windy");
    console.log(removeItemWinda()); // osoby wychodzą z windy
    document.getElementById("info2").innerHTML =
      "Osoby w windzie chcą jechać na piętra: " + winda_osoby;
  }

  //wyswietlanie ludzi na pietrach
  function displayPeopleOnFloors(array, index) {
    var elements = [];
    for (var i = 0; i < array.length; i++) {
      if (index < array[i].length) {
        elements.push(array[i][index]);
      }
    }
    removeItemAll(elements, null);
    console.log("elementy " + elements);

    return elements;
  }

  console.table("osoby przed");
  console.table(pietra);

  //animation
  window.onload = () => {
    let elevator = document.querySelector(".elevator");
    let elevatorDoor = elevator.querySelector(".elevator-door");
    let floors = document.querySelectorAll(".building .floor");
    let buttons = document.querySelectorAll(".handle button");
    var destinyFloors = [];
    var currentFloor = Math.floor(Math.random() * 50) + 0;
    var leavingFloor = false;
    var elevatorStatus = "idle";
    var elevatorWaitingTime = 50;
    var elevatorWaitTime = 50;
    var previousTime = new Date().getTime();
    var deltaTime = 0;

    elevator.style.offsetTop = floors[0].offsetTop + "px";
    // ruch, otwieranie, czekanie, zamykanie

    buttons.forEach((button) => {
      button.addEventListener("click", function () {
        if (pietra.length > 0 || winda_osoby.length > 0) {
          if (winda_osoby.length > 0) {
            //generowanie ludzi na piętrach

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
                  var lospietroTab = Math.floor(Math.random() * losPietro) - 1; // pietro na jakie chca jechac
                  if (lospietroTab > -1) {
                    subArray.push(lospietroTab);
                  } else {
                    subArray.push(null);
                  }
                }

                mainArray.push(subArray); // Insert the sub-array into the main array
              }
              console.log(numArrays);
              return mainArray;
            }

            createNestedArray();
            console.log("min array");
            console.table(mainArray);

            pietra = mainArray;

            //jazda windy do góry
            if (
              ((kierunek_windy == 0) && (winda_osoby.reduce((a, b) => Math.max(a, b), -Infinity) > ostatnie_pietro))
            ) {
              let n = 0;
              let min_liczba = losPietro;
              while (n <= winda_osoby.length) {
                if ((winda_osoby[n] > ostatnie_pietro) && (winda_osoby[n] <= min_liczba)) {
                  min_liczba = winda_osoby[n];
                  winda_pietro = winda_osoby[n];
                }
                n++;
              }
              console.log("Winda jedzie do góry");
            } else {
              kierunek_windy = 1;
            }
            //jazda windy w dół
            if (
              ((kierunek_windy == 1) && (winda_osoby.reduce((a, b) => Math.min(a, b), +Infinity) < ostatnie_pietro))
            ) {
              let n = Math.max(winda_osoby.length);
              let max_liczba = 0;
              while (n >= 0) {
                if ((winda_osoby[n] < ostatnie_pietro) && (winda_osoby[n] >= max_liczba)) {
                  max_liczba = winda_osoby[n];
                  winda_pietro = winda_osoby[n];
                }
                n--;
              }
              console.log("Winda jedzie w dół");
            } else {
              kierunek_windy = 0;
            }

            console.log("pietro" + " " + winda_pietro);
            ostatnie_pietro = winda_pietro;

            addToWinda();

            console.log("Wsiadanie: " + winda_osoby);
            console.log(
              "Wysiadanie: " + removeItemAll(winda_osoby, winda_pietro)
            );
            console.log(pietra);
            iloscOsobNaPietrach = [];
            for (let i = 0; i < losPietro; i++) {
              iloscOsobNaPietrach.push(displayPeopleOnFloors(pietra, i).length);
              console.table(iloscOsobNaPietrach + "ilosc osob na pietrach");
            }
          }
          //jeśli winda jestpusta
          else if (winda_osoby.length == 0) {
            console.log(pietra);
            console.log("winda jest pusta");
            //sprawdzanie czy ludzie są na piętrach
            {
              for (let i = 0; i < losPietro; i++) {
                if (displayPeopleOnFloors(pietra, i).length != 0) {
                  winda_pietro = i;
                  console.log("Jedzie na piętro: ", winda_pietro);
                  addToWinda();
                  i = losPietro;
                }
              }
            }
          }
          console.log("time map" + time.map(v=> v+1));
         time = time.map(v=> v+1);
          if (Math.max.apply(Math, time)>time_max){
          time_max = Math.max.apply(Math, time);
          }
          console.log('max czas ' + time_max)
        
          console.log('czas'+time);

          function calculateAverage(array) {
              var total = 0;
              var count = 0;
          
              array.forEach(function(item, index) {
                  total += item;
                  count++;
              });
          
              return total / count;
          }
          
          console.log("avg time" + calculateAverage(time));
        
          document.getElementById("info5").innerHTML =
          "Max czas przejazdu w danym cyklu: " + time_max;
          document.getElementById("info4").innerHTML =
          "Średni czas przejazdu w danym cyklu: " + calculateAverage(time);
      


        }

        document.getElementById("info2").innerHTML =
          "Osoby w windzie chcą jechać na piętra: " + winda_osoby;

        for (let i = 0; i < losPietro; i++) {
          // let floorindex = "info"+i;
          const newDiv = document.createElement("div");
          newDiv.textContent =
            "Piętro: " +
            i +
            ". " +
            "Ilosc osob: " +
            iloscOsobNaPietrach.at(i) +
            ".";
          document.body.appendChild(newDiv);
          //document.getElementById("info"+3).innerHTML = "piętro:"+ i + "ilosc osob na pietrze"+ iloscOsobNaPietrach.indexOf(i)  ;
        }
        const BR = document.createElement("br");
        document.body.appendChild(BR);
     

        let setFloor = winda_pietro;
        let selectedFloor = Array.prototype.slice
          .apply(document.querySelectorAll(".building .floor"))
          .filter((f) => f.getAttribute("data-floor") == setFloor)[0];

        if (
          destinyFloors.find(
            (df) =>
              df.getAttribute("data-floor") ==
              selectedFloor.getAttribute("data-floor")
          ) == null
        ) {
          if (
            selectedFloor.getAttribute("data-floor") !=
            currentFloor.getAttribute("data-floor")
          ) {
            destinyFloors.push(selectedFloor);
          }
        }
        leavingFloor = true;
        if (elevatorStatus == "idle") {
          elevatorStatus = "closing";
        }
      });
    });

    function updateElevator() {
      deltaTime = new Date().getTime() - previousTime;
      previousTime = new Date().getTime();

      requestAnimationFrame(updateElevator);
      // console.log(elevator.offsetTop)
      var elevatorWithinFloor = false;
      for (let i = 0; i < floors.length; i++) {
        if (
          elevator.offsetTop > floors[i].offsetTop &&
          elevator.offsetTop < floors[i].offsetTop + 10
        ) {
          // console.log("elevator within floor "+i);
          elevatorWithinFloor = true;
          currentFloor = floors[i];

          if (!leavingFloor) {
            if (
              destinyFloors.some(
                (df) =>
                  df.getAttribute("data-floor") ==
                  currentFloor.getAttribute("data-floor")
              )
            ) {
              // console.log("Reached floor")
              destinyFloors = destinyFloors.filter(
                (df) =>
                  df.getAttribute("data-floor") !=
                  currentFloor.getAttribute("data-floor")
              );
              elevatorStatus = "opening";
            }
          } else {
            // console.log("Leaving floor")
          }
        }
      }

      if (!elevatorWithinFloor) {
        // console.log("Elevator out of any floor")
        if (leavingFloor) {
          leavingFloor = false;
        }
      }

      if (elevatorStatus != "moving") {
       
        if (elevatorStatus == "opening") {
          if (elevatorDoor.offsetWidth > 1) {
            elevatorDoor.style.width = elevatorDoor.offsetWidth - 1 + "px";
          } else {
            if (destinyFloors.length == 0) {
              elevatorStatus = "idle";
            } else {
              elevatorStatus = "waiting";
              elevatorWaitingTime = elevatorWaitTime;
            
            }
          }
        }
        if (elevatorStatus == "waiting") {
          if (elevatorWaitingTime > 0) {
            elevatorWaitingTime -= deltaTime;
          } else {
            elevatorStatus = "closing";
          }
        }
        if (elevatorStatus == "closing") {
          if (elevatorDoor.offsetWidth < 34) {
            elevatorDoor.style.width = elevatorDoor.offsetWidth + 1 + "px";
          } else {
            elevatorStatus = "moving";
          }
        }
      }

      if (destinyFloors[0] != null && elevatorStatus == "moving") {
        if (destinyFloors[0].offsetTop > elevator.offsetTop - 7) {
          elevator.style.top = elevator.offsetTop - 7 + 2 + "px";
        } else {
          elevator.style.top = elevator.offsetTop - 7 - 2 + "px";
        }
      }

      updateButtons();
    }
    updateElevator();

    function updateButtons() {
      buttons.forEach((button) => {
        if (
          destinyFloors.find(
            (df) => df.getAttribute("data-floor") == winda_pietro
          )
        ) {
          button.classList.add("active");
        } else {
          button.classList.remove("active");
        }
      });
    }
  };
  console.log(pietra);
}
