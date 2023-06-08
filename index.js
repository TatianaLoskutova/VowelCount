function getCount(str) {
    let count = 0

    for (let i = 0; i < str.length ; i++) {
        if ('aeiou'.includes(str[i])) {
            count += 1
        }
    }
    return count
}