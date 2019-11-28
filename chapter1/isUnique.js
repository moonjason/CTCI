// Question One
// Implement an algorithm to determine if a string has all unique characters. What if you
// cannot use additional data structures?

const uniqueCheck = (str) => {
    const letters = {};
    splitStr = str.split('');
    for (let i = 0; i < splitStr.length; i++) {
        if (!letters[splitStr[i]]) {
            letters[splitStr[i]] = 1 
        } else {
            return false;
        }
    }
    return true;
}

// console.log(uniqueCheck('123a'))


// not using additional data structures

const uniqueCheck2 = (str) => {
    splitStr = str.split('');
    for (let i = 0; i < splitStr.length; i++) {
        for (let j = i + 1; j < splitStr.length; j++) {
            if (splitStr[j] === splitStr[i]) {
                return false;
            }
        }
    }
    return true;
}

console.log(uniqueCheck2('123aa'))