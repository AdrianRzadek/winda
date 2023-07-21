const _ = require("underscore");
const alphabet = "abcdefghijk";
const winda_max = 5;
let counter = 0;
var winda_osoby = [0, 7, 5];
var winda_pietro = 5;
var kierunek_windy = 0;
var ostatnie_pietro = 0;
var osoby = [
  [1, "k"],
  [3, "h"],
];
//console.table(osoby)
min = Math.ceil(0);
max1 = Math.floor(2);
max2 = Math.floor(10);
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
function addToWinda() {
  switch (winda_pietro) {
    case 0:
      counter = 0;      
      for (item of osoby.flat()) {
        if (item == "k") {
          counter++;
        }
      }
      if (
        (winda_osoby.length < winda_max) &&
        (counter <= (winda_max - winda_osoby.length))
      ) {
        /*console.log("pa tutaj");
        console.log(counter)
        console.log(winda_max);
        console.log(winda_osoby.length);
        console.log(winda_max - winda_osoby.length);
        console.log('osoby po: '+osoby)*/
        var n0 = osoby.filter(function (item) {
          return item[1] == "k";
        });
        osoby = osoby.filter(function (item) {
          return item[1] != "k";
        });
        
        winda_osoby = winda_osoby.concat(n0);
        winda_osoby = _.flatten(winda_osoby);
      }
      console.log(removeItemAll(winda_osoby, "k"));
 
      console.table(winda_osoby);
 
      break;
    case 1:
      counter = 0;
      for (item of osoby) {
        if (item == "a") {
          counter++;
        }
      }
      if (
        (winda_osoby.length < winda_max) &&
        (counter <= (winda_max - winda_osoby.length))
      ) {
        var n1 = osoby.filter(function (item) {
          return item[1] == "a";
        });
        osoby = osoby.filter(function (item) {
          return item[1] != "a";
        });
        winda_osoby = winda_osoby.concat(n1);
        winda_osoby = _.flatten(winda_osoby);
      }
      console.log(removeItemAll(winda_osoby, "a"));
 
      console.table(winda_osoby);
 
      break;
    case 2:
      counter = 0;
      for (item of osoby.flat()) {
        if (item == "b") {
          counter++;
        }
      }
      if (
        (winda_osoby.length < winda_max)&&
        (counter <= (winda_max - winda_osoby.length))
       ) {
        var n2 = osoby.filter(function (item) {
          return item[1] == "b";
        });
        osoby = osoby.filter(function (item) {
          return item[1] != "b";
        });
 
        winda_osoby = winda_osoby.concat(n2);
        winda_osoby = _.flatten(winda_osoby);
      }
      console.log(removeItemAll(winda_osoby, "b"));
 
      console.table(winda_osoby);
 
      break;
    case 3:
      counter = 0;
      for (item of osoby.flat()) {
        if (item == "c") {
          counter++;
        }
      }
      if (
        (winda_osoby.length < winda_max) &&
        (counter <= (winda_max - winda_osoby.length))
      ) {
        var n3 = osoby.filter(function (item) {
          return item[1] == "c";
        });
        osoby = osoby.filter(function (item) {
          return item[1] != "c";
        });
 
        winda_osoby = winda_osoby.concat(n3);
        winda_osoby = _.flatten(winda_osoby);
      }
      console.log(removeItemAll(winda_osoby, "c"));
 
      console.table(winda_osoby);
 
      break;
    case 4:
      counter = 0;
      for (item of osoby.flat()) {
        if (item == "d") {
          counter++;
        }
      }
      if (
        (winda_osoby.length < winda_max)&&
        (counter <= (winda_max - winda_osoby.length))
      ) {
        var n4 = osoby.filter(function (item) {
          return item[1] == "d";
        });
        osoby = osoby.filter(function (item) {
          return item[1] != "d";
        });
 
        winda_osoby = winda_osoby.concat(n4);
        winda_osoby = _.flatten(winda_osoby);
      }
      console.log(removeItemAll(winda_osoby, "d"));
 
      console.table(winda_osoby);
 
      break;
    case 5:
      counter = 0;
      for (item of osoby.flat()) {
        if (item == "e") {
          counter++;
        }
      }
      if (
        (winda_osoby.length < winda_max)&&
        (counter <= (winda_max - winda_osoby.length))
      ) {
        var n5 = osoby.filter(function (item) {
          return item[1] == "e";
        });
        osoby = osoby.filter(function (item) {
          return item[1] != "e";
        });
 
        winda_osoby = winda_osoby.concat(n5);
        winda_osoby = _.flatten(winda_osoby);
      }
      console.log(removeItemAll(winda_osoby, "e"));
 
      console.table(winda_osoby);
 
      break;
    case 6:
      counter = 0;
      for (item of osoby.flat()) {
        if (item == "f") {
          counter++;
        }
      }
      if (
        (winda_osoby.length < winda_max)&&
        (counter <= (winda_max - winda_osoby.length))
      ) {
        var n6 = osoby.filter(function (item) {
          return item[1] == "f";
        });
        osoby = osoby.filter(function (item) {
          return item[1] != "f";
        });
 
        winda_osoby = winda_osoby.concat(n6);
        winda_osoby = _.flatten(winda_osoby);
      }
      console.log(removeItemAll(winda_osoby, "f"));
 
      console.table(winda_osoby);
 
      break;
    case 7:
      counter = 0;
      for (item of osoby.flat()) {
        if (item == "g") {
          counter++;
        }
      }
      if (
        (winda_osoby.length < winda_max)&&
        (counter <= (winda_max - winda_osoby.length))
      ) {
        var n7 = osoby.filter(function (item) {
          return item[1] == "g";
        });
        osoby = osoby.filter(function (item) {
          return item[1] != "g";
        });
 
        winda_osoby = winda_osoby.concat(n7);
        winda_osoby = _.flatten(winda_osoby);
      }
      console.log(removeItemAll(winda_osoby, "g"));
 
      console.table(winda_osoby);
 
      break;
    case 8:
      counter = 0;
      for (item of osoby.flat()) {
        if (item == "h") {
          counter++;
        }
      }
      if (
        (winda_osoby.length < winda_max) &&
        (counter <= (winda_max - winda_osoby.length))
      ) {
        var n8 = osoby.filter(function (item) {
          return item[1] == "h";
        });
        osoby = osoby.filter(function (item) {
          return item[1] != "h";
        });
 
        winda_osoby = winda_osoby.concat(n8);
        winda_osoby = _.flatten(winda_osoby);
      }
      console.log(removeItemAll(winda_osoby, "h"));
 
      console.table(winda_osoby);
 
      break;
    case 9:
      counter = 0;
      for (item of osoby.flat()) {
        if (item == "i") {
          counter++;
        }
      }
      if (
        (winda_osoby.length < winda_max)&&
        (counter <= (winda_max - winda_osoby.length))
      ) {
        var n9 = osoby.filter(function (item) {
          return item[1] == "i";
        });
        osoby = osoby.filter(function (item) {
          return item[1] != "i";
        });
 
        winda_osoby = winda_osoby.concat(n9);
        winda_osoby = _.flatten(winda_osoby);
      }
      console.log(removeItemAll(winda_osoby, "i"));
 
      console.table(winda_osoby);
 
      break;
    case 10:
      counter = 0;
      for (item of osoby.flat()) {
        if (item == "j") {
          counter++;
        }
      }
      if (
        (winda_osoby.length < winda_max)&&
        (counter <= (winda_max - winda_osoby.length))
      ) {
        var n10 = osoby.filter(function (item) {
          return item[1] == "j";
        });
        osoby = osoby.filter(function (item) {
          return item[1] != "j";
        });
 
        winda_osoby = winda_osoby.concat(n10);
        winda_osoby = _.flatten(winda_osoby);
      }
      console.log(removeItemAll(winda_osoby, "j"));
 
      console.table(winda_osoby);
 
      break;
  }
}
console.table("osoby przed");
console.table(osoby);
while (osoby.length > 0 || winda_osoby.length > 0) {
  while (winda_osoby.length > 0) {
    //generowanie ludzi na piętrach
    for (var j = Math.floor(Math.random() * (max1 - min) + min); j > 0; j--) {
      osoby.push([
        Math.floor(Math.random() * (max2 - min) + min),
        alphabet[Math.floor(Math.random() * alphabet.length)],
      ]);
      console.table("osoby po "+osoby);
      //osoby = osoby.map(Number);
    }
 
    //jazda windy do góry
    if (
      ((kierunek_windy = 0),
      (winda_osoby.reduce((a, b) => Math.max(a, b), -Infinity) > ostatnie_pietro))
    ) {
      let n = 0;
      let min_liczba = 10;
      while (n <= winda_osoby.length) {
        if ((winda_osoby[n] > ostatnie_pietro) && (winda_osoby[n] < min_liczba)) {
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
      ((kierunek_windy = 1),
      (winda_osoby.reduce((a, b) => Math.min(a, b), +Infinity) < ostatnie_pietro))
    ) {
      let n = winda_osoby.length;
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
    console.log("Wysiadanie: " + removeItemAll(winda_osoby, winda_pietro));
    console.log(osoby);
  }
  //jeśli winda jestpusta
  if (winda_osoby.length == 0) {
    console.log(osoby);
    console.log("winda jest pusta");
    console.log(osoby);
    //szukanie ludzi na piętrach
    let a = osoby.some(function (item) {
      return item[1] === "a";
    });
    let b = osoby.some(function (item) {
      return item[1] === "b";
    });
    let c = osoby.some(function (item) {
      return item[1] === "c";
    });
    let d = osoby.some(function (item) {
      return item[1] === "d";
    });
    let e = osoby.some(function (item) {
      return item[1] === "e";
    });
    let f = osoby.some(function (item) {
      return item[1] === "f";
    });
    let g = osoby.some(function (item) {
      return item[1] === "g";
    });
    let h = osoby.some(function (item) {
      return item[1] === "h";
    });
    let i = osoby.some(function (item) {
      return item[1] === "i";
    });
    let j = osoby.some(function (item) {
      return item[1] === "j";
    });
    let k = osoby.some(function (item) {
      return item[1] === "k";
    });
 
    //sprawdzanie czy ludzie są na piętrach
    {
      if (a == true) {
        winda_pietro = 1;
        console.log("Jedzie na piętro: ", winda_pietro);
        addToWinda();
        return winda();
      } else if (b == true) {
        winda_pietro = 2;
        console.log("Jedzie na piętro: ", winda_pietro);
        addToWinda();
        return winda();
      } else if (c == true) {
        winda_pietro = 3;
        console.log("Jedzie na piętro: ", winda_pietro);
        addToWinda();
      } else if (d == true) {
        winda_pietro = 4;
        console.log("Jedzie na piętro: ", winda_pietro);
        addToWinda();
      } else if (e == true) {
        winda_pietro = 5;
        console.log("Jedzie na piętro: ", winda_pietro);
        addToWinda();
      } else if (f == true) {
        winda_pietro = 6;
        console.log("Jedzie na piętro: ", winda_pietro);
        addToWinda();
      } else if (g == true) {
        winda_pietro = 7;
        console.log("Jedzie na piętro: ", winda_pietro);
        addToWinda();
      } else if (h == true) {
        winda_pietro = 8;
        console.log("Jedzie na piętro: ", winda_pietro);
        addToWinda();
      } else if (i == true) {
        winda_pietro = 9;
        console.log("Jedzie na piętro: ", winda_pietro);
        addToWinda();
      } else if (j == true) {
        winda_pietro = 10;
        console.log("Jedzie na piętro: ", winda_pietro);
        addToWinda();
      } else if (k == true) {
        winda_pietro = 0;
        console.log("Jedzie na piętro: ", winda_pietro);
        addToWinda();
      }
    }
  }
}