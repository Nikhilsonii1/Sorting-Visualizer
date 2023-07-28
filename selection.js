async function selectionSort() {
  var minIndex;
  for (var i = 0; i < arr_sizeval - 1; i++) {
    minIndex = i;

    bars[i].style.backgroundColor = "red";
    await waitforme(delay);
    for (var j = i + 1; j < arr_sizeval; j++) {
      bars[j].style.backgroundColor = "cyan";
      await waitforme(delay);
      if (array[j] < array[minIndex]) {
        if (minIndex != i) {
          bars[minIndex].style.backgroundColor = "black";
        }
        minIndex = j;
        bars[minIndex].style.backgroundColor = "red";
      } else {
        bars[j].style.backgroundColor = "black";
      }
    }
    await waitforme(delay);
    if (minIndex != i) {
      var temp = array[minIndex];
      array[minIndex] = array[i];
      array[i] = temp;

      bars[i].style.height = array[i] + "px"; //changing height
      bars[minIndex].style.height = array[minIndex] + "px"; //changing height

      bars[i].style.backgroundColor = "red";
      bars[minIndex].style.backgroundColor = "red";
      await waitforme(delay);
      bars[minIndex].style.backgroundColor = "black";
    }
    bars[i].style.backgroundColor = "green";
  }
  bars[i].style.backgroundColor = "green";

  enable_button();
}
