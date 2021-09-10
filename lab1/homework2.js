const ArrayObject = []
for (let i = 1; i <= 5; i++) {
    let ArrayA = []
    for (let j = 1; j <= 5; j++) {
        ArrayA.push({
            "หัวข้อ":i,
            "บทเรียนที่":j,
        })
    }
    ArrayObject.push(ArrayA)
}
console.log(ArrayObject);
/*
    i : 1
    j : 1
    x : 0
    x : 1
    x : ...
    x : 4
    j : 2
    x : 0
    x : 1
    x : ...
    x : 4
    j : 3
*/
