arr = [1,2,3,4,3,4,3,5,5,6,4,1,1,]
let newArr = arr.filter((item, index) => {
    return arr.indexOf(item) === index
})
console.log(newArr)
