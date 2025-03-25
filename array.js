//array
function sortNumbers(arr) {
    let a = arr.length; 

    for (let b = 0; b < a - 1; b++) { 
        for (let c = 0; c < a - 1 - b; c++) { 
            if (arr[c] > arr[c + 1]) { 
                let d = arr[c]; 
                arr[c] = arr[c + 1];
                arr[c + 1] = d;    }
            }}
            

    return arr;
}