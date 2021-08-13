let arr= ["one", "two", "three", "one", "one" , "four", "five", "four", "five", "five"]
let arrFilter = arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
});
console.log(arrFilter)