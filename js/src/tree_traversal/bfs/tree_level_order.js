const tq = [];

const bfsSimple = () => {
    let res = [];
    let friendGraph = {
        name: "ROOT",
        friends: [{
            name: "A",
            friends: [{
                name: "B",
                friends: []
            },
            {
                name: "C",
                friends: [{
                    name: "D",
                    friends: []
                }]
            }
            ]
        }, {
            name: "X",
            friends: [{
                name: "Y",
                friends: []
            },
            {
                name: "Z",
                friends: []
            }
            ]
        }]
    };

    tq.push(friendGraph)
    tq.visited = true;

    while (tq.length > 0) {
        var currentLevel = [];
        var len = tq.length;
        for (let i = 0; i < len; i++) {
            const current = tq.shift();
            currentLevel.push(current.name)
            current.friends.forEach(element => {
                tq.push(element)
            });
        }
        res.push(currentLevel)
    }

    console.log(res)
}


module.exports = bfsSimple;