// Question #5 
// There are three types of edits that can be performed on strings: insert a character,
// remove a character, or replace a character. Given two strings, write a function to check if they are
// one edit (or zero edits) away.
// EXAMPLE
// pale, ple -> true
// pales. pale -> true
// pale. bale -> true
// pale. bake -> false

const oneAway = (str1, str2) => {
    const obj = {};
    str1.split('').forEach(l => {
        if (obj[`${l}`]){
            obj[`${l}`]++
        } else {
            obj[`${l}`] = 1; 
        }
    })
    str2.split('').forEach(l => {
        if (obj[`${l}`]){
            obj[`${l}`]--
            if(obj[`${l}`] === 0) {
                delete obj[`${l}`]
            }
        }
    })
    console.log(obj)
    console.log(obj.keys)
    return (obj.length <= 1 ? true : false ) 
}

console.log(oneAway('pale', 'bale'));