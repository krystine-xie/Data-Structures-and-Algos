// THIS IS ONLY A BASIC HASH FUNCTION
// 1. Only hashes strings 
// 2. Not constant time - linear in key length
// 3. Could be a little more random

function hash(key, lengthOfArray) {
    let total = 0;
    for (let char of key) {
        let value = char.charCodeAt(0) - 96;
        total = ( total + value ) % lengthOfArray
    }

    return total;
}

// console.log(hash("pink", 10)); 
// console.log(hash("grey", 10));

class HashTable {
    constructor(size = 53) {
        this.keyMap = newArray(size);
    }

    _hash(key) {
        let total = 0; 
        let WEIRD_PRIME = 31; 
    
        // only loops through the first 100 characters to make things go faster
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i]; 
            let value = char.charCodeAt(0) - 96;
            // multiply the total by a prime to reduce the no. of collisions
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }

        return total
    }

    set(key, value) {
        let hashedKey = this._hash(key); 
        if (!this.keyMap[hashedKey]) {
            this.keyMap[hashedKey] = []; 
        }

        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key); 
        if (this.keyMap[index]) {
            for (let i=0; i<this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
        }
        return undefined; 
    }

    keys() {
        let output = [];
        for (let i=0; i<this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j=0; j<this.keyMap[i]; j++) {
                    if (!output.includes(this.keyMap[i][j][0])) {
                        output.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return output;
    }

    values() {
        let output = [];
        for (let i=0; i<this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j=0; j<this.keyMap[i]; j++) {
                    if (!output.includes(this.keyMap[i][j][1])) {
                        output.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return output;
    }

}