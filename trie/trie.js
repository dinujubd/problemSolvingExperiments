
const Trie = () => {
    const root = {};

    const insert = (word) => {
        let current = root;

        for (var i = 0; i < word.length; i++) {

            current = current[word[i]] = current[word[i]] || {}
        }

        current.isWord = true;
    };

    const search = (word) => {
        const n = getNode(word);
        return !!n && !!n.isWord;
    };

    const startsWith = (prefix) => {
        const n = getNode(prefix);
        return !!n;
    };

    const getNode = (word) => {
        let current = root;
        for (var i = 0; i < word.length; i++) {
            if (!current) return null;
            current = current[word[i]];
        }
        return current;
    }

    return { insert, search, startsWith };

};


module.exports = Trie;