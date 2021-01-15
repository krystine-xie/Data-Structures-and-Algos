function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// getDigit(7323, 2) 
// 7323 / 1000 
// 73 % 10
// 3

function digitCount(num) {
    if (num === 0) return 1;
    return num.toString().length;
}

// digitCount(23456);
// console.log(digitCount(3456));

function mostDigits(numArr) {
    let maxDigits = 0;
    for (let i=0; i<numArr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount[numArr[i]]);
    }

    return maxDigits;

}

function radixSort(listOfNum) {
    let maxDigitCount = mostDigits(listOfNum);
    console.log(maxDigitCount); 
    for (let i=0; i < maxDigitCount; i++) {
        let digitBuckets = Array.from({length: 10}, () => [])
        for (let j=0; j<listOfNum.length; j++) {
            let digit = getDigit(listOfNum[j], i);
            digitBuckets[digit].push(listOfNum[i]);
        }
        listOfNum = [].concat(...digitBuckets);
    }

    return listOfNum;
}

radixSort([23, 345, 5467, 12, 2345, 9852])