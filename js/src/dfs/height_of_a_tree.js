const treeHeight = (friendGraph) => {
    if (friendGraph === null) return -1;
    if (friendGraph.friends.length === 0) return 0;

    return Math.max(...friendGraph.friends.map(treeHeight)) + 1;
}

const solution = () => treeHeight({
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
                friends: [{
                    name: "E",
                    friends: []
                }]
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
});

module.exports = solution;