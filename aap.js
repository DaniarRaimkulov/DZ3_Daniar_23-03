var arr = [null, 123, undefined, null, "qwerty", 34, 65, undefined, null, null, 43, "aerg", "пкцйк"]
var sortedArrays = {}
for (var item of arr) {
    var type = typeof item
    if (!sortedArrays[type]) {
        sortedArrays[type] = []
    }
    sortedArrays[type].push(item)
}
var sortedArraysByCount = Object.values(sortedArrays).sort((a, b) => b.length - a.length)
console.log(sortedArraysByCount)