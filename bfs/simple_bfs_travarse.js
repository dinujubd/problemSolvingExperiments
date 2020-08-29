const tq = [];

const bfsSimple = () => {
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
        const current = tq.shift();

        console.log(current.name);

        current.friends.forEach(friend => {
            if (!friend.visited) {
                friend.visited = true;
                tq.push(friend);
            }
        });

    }


}

module.exports = bfsSimple;