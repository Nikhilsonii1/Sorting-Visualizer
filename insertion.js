async function insertionsort() {
    console.log("insertion");

    var key;
    for (var i = 0; i < arr_sizeval; i++){
      bars[i].style.backgroundColor = "cyan";
      key = array[i];
      var j = i - 1;
      while (j >= 0 && array[j] > key) {
        await waitforme(delay);
        bars[j].style.backgroundColor = "red";
        bars[j + 1].style.backgroundColor = "red";

        await waitforme(delay);
        array[j + 1] = array[j];
        bars[j].style.height = array[j] + "px"; //changing height
        bars[j + 1].style.height = array[j + 1] + "px"; //changing height

        bars[j].style.backgroundColor = "red";
        bars[j + 1].style.backgroundColor = "red";
        await waitforme(delay);
        j--;

        for (let k = i; k >= 0; k--) {
          bars[k].style.background = "green";
        }
      }
      array[j + 1] = key;
      bars[j + 1].style.height = array[j + 1] + "px"; //changing height
      bars[j + 1].style.backgroundColor = "green";
    }
    enable_button();
}