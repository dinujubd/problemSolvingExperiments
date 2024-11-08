
const dfsTravarse = (friendGraph) => {
    friendGraph && friendGraph.friends.forEach(friend => {
        dfsTravarse(friend)
    });
    console.log(friendGraph.name)
}

dfsTravarse({
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
})

module.exports = dfsTravarse;