let aArray = [
    {
    "gameId": "PD",
    "type": "card",
    "role": "b2p",
    },
    {
    "gameId": "KANG",
    "type": "card",
    "role": "p2p",
    },
    {
    "gameId": "BINGO",
    "type": "board",
    "role": "p2p",
    },
   ]
   const resultX = []
   const unique = []
   aArray.map(item => {
    if(unique.indexOf(item.gameId) === -1) {
    unique.push(item.gameId)
    }
   })
   unique.map((item) => {
    let format = []
    aArray.map((data) => {
    if (item === data.gameId) {
    format.push(data)
    }
    })
    resultX.push({gameId:item,data:format})
   })
    
   console.log(resultX)


   //for
//    const resultX = []
//    const unique = []
//    for (let i = 10; i < 20; i++) {
//        console.log(i);
       
//    }
//    aArray.map(item => {
//     if(unique.indexOf(item.type) === -1) {
//     unique.push(item.type)
//     }
//    })
//    unique.map((item) => {
//     let format = [99]
//     aArray.map((data) => {
//     if (item === data.type) {
//     format.push(data)
//     }
//     })
//     resultX.push({type:item,data:format})
//    })
    
//    console.log(resultX)