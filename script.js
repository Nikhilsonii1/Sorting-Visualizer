var inp_arrsize = document.getElementById("Size");
var arr_sizeval = inp_arrsize.value;
var gen = document.querySelector(".Generate button");
var a_speed = document.getElementById("speed");
var bars = [];
var array = [];
var array_id = document.getElementById("arr-container");

var btn_algo = document.querySelectorAll(".algos button");

gen.addEventListener("click", createContainers);
inp_arrsize.addEventListener("input", updateSize);

//creating containers
function createContainers() {
  console.log("clicked");

  array_id.innerHTML = ""; // deleting child of id container
  for (var i = 0; i < arr_sizeval; i++) {
    var ans = Math.floor(Math.random() * (inp_arrsize.max - inp_arrsize.min)); //generating random values from min to max
    ans = ans + parseInt(inp_arrsize.min); //adding min to values from min to max
    array[i] = ans * 3;

    bars[i] = document.createElement("div");
    bars[i].style.height = array[i] + "px";
    bars[i].classList.add("flex-item");
    margin_size = 0.1;
    bars[i].style.width = 10 + "px";
    bars[i].style.backgroundColor = "black";
    bars[i].id = "arr-container";
    bars[i].style.margin = "1px";
    array_id.appendChild(bars[i]);
  }
}

function updateSize() {
  arr_sizeval = inp_arrsize.value;
  createContainers();
}

updateSize(); // creating array when site loads

for (var i = 0; i < btn_algo.length; i++) {
  btn_algo[i].addEventListener("click", algorithm);
}

function algorithm() {
  disable_button();
  var current_algo = this.textContent;
  
  switch (current_algo) {
    case "Bubble Sort":
      bubblesort();
      break;
    case "Insertion Sort":
      insertionsort();
      break;
    case "Selection Sort":
      selectionSort();
      break;
    case "Merge Sort":
      mergesort();
      break;
    case "Quick Sort":
      quicksort();
      break;
    default:
      break;
  }
}

// setTimeout(bubblesort, 3000);
