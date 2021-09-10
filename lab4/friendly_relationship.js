let a = [
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

let x = [
    {
        type:"card",
        data:[
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
        ]
    },
    {
        type:"board",
        data:[
            {
                "gameId": "BINGO",
                "type": "board",
                "role": "p2p",
            },
        ]
    },
]
console.log(a[0].type);
console.log(a[0]);
console.log(a[1]);
console.log(a[2].type);
console.log(a[2]);
//pattern ของ array object