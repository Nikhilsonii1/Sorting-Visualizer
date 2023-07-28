async function mergesort() {
  await mergepartition(0, arr_sizeval - 1);
  enable_button();  
  async function merge(left, mid, right) {
    var i = left;
    var j = mid + 1;
    var k = left;
    var temp = [];
    //   bars[mid].style.backgroundColor = "red";
    //   await waitforme(delay);
    await waitforme(delay);
    while (i <= mid && j <= right) {
      if (array[i] <= array[j]) {
        bars[i].style.backgroundColor = "red";
        temp[k++] = array[i++];

        await waitforme(delay);
      } else {
        bars[j].style.backgroundColor = "red";
        temp[k++] = array[j++];

        await waitforme(delay);
      }
    }

    while (i <= mid) {
      bars[i].style.backgroundColor = "red";
      temp[k++] = array[i++];

      await waitforme(delay);
    }
    while (j <= right) {
      bars[j].style.backgroundColor = "red";
      temp[k++] = array[j++];

      await waitforme(delay);
    }

    for (i = left; i <= right; i++) {
      array[i] = temp[i];
      console.log(i);
      bars[i].style.height = array[i] + "px";
      bars[i].style.backgroundColor = "green";
      await waitforme(delay);
    }
  }

  async function mergepartition(left, right) {
    if (left < right) {
      var mid = Math.floor((left + right) / 2);
      bars[mid].style.backgroundColor = "cyan";
      await waitforme(delay);
      await mergepartition(left, mid);
      await mergepartition(mid + 1, right);
      await merge(left, mid, right); //merge the two partitions together.
    }
  }
  
}
