//min petro
var min_pietro = 0;
//max pietro
var max_pietro = 10;
//nr pietra na którym jest winda
var winda_pietro =  Math.floor(Math.random() * 10) + 0;
//nr pietra na którym jest osoba
var wezwanie =  Math.floor(Math.random() * 10) + 0 ;
//żądane pietro
var zadanie = 0;
//liczba osob pod winda na danym pietrze
var osoby = Math.floor(Math.random() * 30) + 0;


console.log("liczba os" + osoby);


document.querySelector(".lift").classList.toggle("slide-bottom"+winda_pietro);

document.querySelector(".personF").classList.toggle("slide-bottom"+wezwanie);

//var pp = document.getElementById(pietrop);

//document.documentElement.innerHTML ="Winda została wezwana na pietro: " +wezwanie ;
console.log("wezwanie na pietro" + wezwanie);


function wezwij(){
   if(wezwanie>winda_pietro){
        
document.querySelector(".lift").classList.toggle("slide-top"+wezwanie);

}
else if (wezwanie < winda_pietro){
    
    document.querySelector(".lift").classList.toggle("slide-bottom"+wezwanie);
    
}else if (wezwanie == winda_pietro){
    console.log("Winda gotowa do startu.");
}

}

// /
var form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

    

   if(document.getElementById("num0").checked){
        var zadanie = document.getElementById("num0");
        console.log(zadanie.value);
        var z = zadanie.value;
        info(z);
        

        ruchZadane(z);
    }else if(document.getElementById("num1").checked){
        var zadanie = document.getElementById("num1");
        console.log(zadanie.value);
        var z = zadanie.value;
        info(z);
       
        ruchZadane(z);
    }else if(document.getElementById("num2").checked){
        var zadanie = document.getElementById("num2");
        console.log(zadanie.value);
        var z = zadanie.value;
        info(z);
        ruchZadane(z);
    }else if(document.getElementById("num3").checked){
        var zadanie = document.getElementById("num3");
        console.log(zadanie.value);
        var z = zadanie.value;
        info(z);
        ruchZadane(z);
    }else if(document.getElementById("num4").checked){
        var zadanie = document.getElementById("num4");
        var z = zadanie.value;
        info(z);
        ruchZadane(z);
    }else if(document.getElementById("num5").checked){
        var zadanie = document.getElementById("num5");
        var z = zadanie.value;
        info(z);
        ruchZadane(z);
    }else if(document.getElementById("num6").checked){
        var zadanie = document.getElementById("num6");
        var z = zadanie.value;
        info(z);
        ruchZadane(z);
    }else if(document.getElementById("num7").checked){
        var zadanie = document.getElementById("num7");
        var z = zadanie.value;
        info(z);
        ruchZadane(z);
    }else if(document.getElementById("num8").checked){
        var zadanie = document.getElementById("num8");
        var z = zadanie.value;
        info(z);
        ruchZadane(z);
    }else if(document.getElementById("num9").checked){
        var zadanie = document.getElementById("num9");
        var z = zadanie.value;
        info(z);
        ruchZadane(z);
    }else if(document.getElementById("num10").checked){
        var zadanie = document.getElementById("num10");
        var z = zadanie.value;
        info(z);
        
        ruchZadane(z);
    }

 
});

function info(zadanie){
if (winda_pietro != wezwanie) {
  console.log("jestes na pietrze : " + wezwanie + " ,winda jest na pietrze : " + winda_pietro  + " chcesz jechac na pietro : " + zadanie);
} else console.log("to samo pietro " + winda_pietro);

}




function ruchZadane(z){

    
    if(z>winda_pietro){
   document.querySelector(".lift").classList.toggle("slide-top"+z);
    }
    else if (z < winda_pietro) {
        document.querySelector(".lift").classList.toggle("slide-bottom"+z);
    }
};