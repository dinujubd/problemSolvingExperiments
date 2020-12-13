const Trie = require("./trie")


describe("Trie", () => {
    it("should insert properly", () => {
        const trie = Trie();
        trie.insert("world")
        const isStarted = trie.startsWith("wor");
        const isNotStartedWith = trie.startsWith("abc");
        const hasWholeWord = trie.search("world");
        const hasNoCompleteWord = trie.search("wor");
        const hasNoCompeteWord2 = trie.search("abc");

        expect(isStarted).toBeTruthy();
        expect(isNotStartedWith).toBeFalsy();
        expect(hasWholeWord).toBeTruthy();
        expect(hasNoCompleteWord).toBeFalsy();
        expect(hasNoCompeteWord2).toBeFalsy();
    })
})