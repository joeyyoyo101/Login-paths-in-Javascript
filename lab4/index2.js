let aArray = [
    {
        "gameId": "PD",
        "type": "card",
        "role": "b2p",
    },
    {
        "gameId": "KANG",
        "type": "cradit",
        "role": "p2p",
    },
    {
        "gameId": "BINGO",
        "type": "board",
        "role": "p2p",
    },
    {
        "gameId": "BINGO",
        "type": "board1",
        "role": "p2p",
    }
]
const resultX = []
const unique = []
    aArray.forEach(item => {
        // if (unique.indexOf(item.type) === -1) {
            unique.push(item.type)
            console.log(unique);

        // }
    })
// unique.forEach((item) => {
//     let format = []
//     aArray.forEach((data) => {
//         if (item === data.type) {
//             format.push(data)
//         }
//     })
//     resultX.push({type:item,data:format})
// })
// let typeofindexs = aArray.map((index) => {
//     return 'unique';
// });
// console.log(resultX);
// function countSheep(limit){
//     for (var i = 1; i < limit; i+=1){
//         console.log(i+"sheep")
//     }
// }
// countSheep(aArray);
// unique.forEach((item) =>{
//     let format = []
//     aArray.forEach((date) => {
//         if (item === data.type) {
//             format.push(data)
//         }
//     })
//     resultX.push({type:item,data:format})
// })