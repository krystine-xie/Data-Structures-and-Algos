function divideAndConquer(array, val) {
    let min = 0; 
    let max = array.length - 1; 
    while (min < max) {
        let middle = Math.floor((min + max)/2);
        let currentElement = array[middle]; 
        if (val < currentElement) {
            max = middle - 1; 
        } else if (val > currentElement) {
            min = middle + 1; 
        } else {
            return middle; 
        }
    }

    return -1; 
}