// cyan is current, red is processing, green is processed, black not sorted

async function bubblesort() {
  console.log("in");
  for (var i = 0; i < arr_sizeval - 1; i++) {
    for (var j = 0; j < arr_sizeval - i - 1; j++) {
      bars[j].style.backgroundColor = "cyan";
      await waitforme(delay);
      if (array[j] > array[j + 1]) {
        bars[j + 1].style.backgroundColor = "red";
        await waitforme(delay);
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;

        bars[j].style.height = array[j] + "px"; //changing height
        bars[j + 1].style.height = array[j + 1] + "px"; //changing height

        bars[j].style.backgroundColor = "red";
        bars[j + 1].style.backgroundColor = "red";
      }
      bars[j].style.backgroundColor = "black";
    }
    bars[j].style.backgroundColor = "green";
  }
  bars[0].style.backgroundColor = "green";
  for (var i = 0; i < arr_sizeval - 1; i++) {
    console.log(array[i]);
  }
  enable_button();
}
