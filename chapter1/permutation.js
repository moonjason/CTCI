// given two strings, write a method to decide if one is a permutation of the other 


const permutation = (str1, str2) => {
    const map = new Map ()
    str1.split('').forEach(l => {
        map.has(l) ? map.set(l, map.get(l) + 1) : map.set(l, 1)
    })
    str2.split('').forEach(l => {
        if (map.has(l)) {
            map.set(l, map.get(l) - 1)
            if (map.get(l) < 1) {
                map.delete(l)
            }
        } else {
            map.set(l)
        }
    })
    if (map.size === 0) {
        return true
    } else {
        return false
    }
}

console.log(permutation('ssss', 'assssa')); 
