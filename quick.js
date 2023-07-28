async function quicksort(){


    await quick(0, arr_sizeval-1);
    
    
    enable_button();
    async function quickpartition(start, end) {
        var pivot = array[end];
        var pindex = start;

        bars[end].style.backgroundColor = "yellow";
        await waitforme(delay);
        for (var i = start; i < end; i++){

            bars[i].style.backgroundColor = "cyan";
            bars[pindex].style.backgroundColor = "red";
            await waitforme(delay);

            if (array[i] <= pivot) {
                

                
                bars[i].style.backgroundColor = "red";
                bars[pindex].style.backgroundColor = "red";
                await waitforme(delay);

                var temp = array[pindex];
                array[pindex] = array[i];
                array[i] = temp;

                bars[i].style.height = array[i] + "px";
                bars[pindex].style.height = array[pindex] + "px";
                bars[i].style.backgroundColor = "red";
                bars[pindex].style.backgroundColor = "red";
                await waitforme(delay);

                bars[i].style.backgroundColor = "black";
                if(pindex!=i) bars[pindex].style.backgroundColor = "black";
                
                await waitforme(delay);

                pindex++;
            }
            
            bars[i].style.backgroundColor = "black";
        }
        await waitforme(delay);
        bars[end].style.backgroundColor = "red";
        bars[pindex].style.backgroundColor = "red";
        await waitforme(delay);
        var temp = array[pindex];
        array[pindex] = array[end];
        array[end] = temp;

        bars[end].style.height = array[end] + "px";
        bars[pindex].style.height = array[pindex] + "px";

        bars[end].style.backgroundColor = "red";
        bars[pindex].style.backgroundColor = "red";
        await waitforme(delay);

        bars[end].style.backgroundColor = "black";
        bars[pindex].style.backgroundColor = "green";
        await waitforme(delay);
        for (var k = start; k <= pindex; k++) {
            bars[k].style.backgroundColor = "green"; //Color update
            await waitforme(delay);
        }
        return pindex;
    }


    async function quick(start, end) {
        if (start <= end) {
          var p = await quickpartition(start, end);
          await quick(start, p - 1);
          await quick(p + 1, end);
        } 
        
    }
    
}