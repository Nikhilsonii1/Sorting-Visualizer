
var delay = 100;
a_speed.addEventListener("input", setSpeed);

function setSpeed() {
  var new_speed = a_speed.value;
  
  switch (parseInt(new_speed)) {
    case 1:
      delay = 1000;
      break;
    case 2:
      delay = 500;
      break;
    case 3:
      delay = 200;
      break;
    case 4:
      delay = 100;
      break;
    case 5:
      delay = 30;
      break;
  }
}

function waitforme(milisec) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, milisec);
  });
}

const cont = document.querySelectorAll(".range-slider");

for (let i = 0; i < cont.length; i++){
  const slider = cont[i].querySelector(".slider");
  const thumb = cont[i].querySelector(".slider-thumb");
  const progress = cont[i].querySelector(".progress");
  function customslider() {
    const maxval = slider.getAttribute("max");
    const val = (slider.value / maxval) *100 + "%";
    progress.style.width = val;
    thumb.style.left = val;
  }
  customslider();

  slider.addEventListener("input", () => {
    customslider();
  });
}


function disable_button() {
  for (let i = 0; i < btn_algo.length; i++){
    
    btn_algo[i].disabled = true;
    inp_arrsize.disabled = true;
    document.querySelector("#slider1-container").classList.add("range-slider-disabled");

    // rangeSliderInputSize.disabled = true;
    document.querySelector(".Generate button").disabled = true;
  }
}

function enable_button() {
  for (let i = 0; i < btn_algo.length; i++) {
    btn_algo[i].disabled = false;
    inp_arrsize.disabled = false;
    document.querySelector("#slider1-container").classList.remove("range-slider-disabled");
    // rangeSliderInputSize.disabled = true;
    document.querySelector(".Generate button").disabled = false;
  }
}