const fruiteBasket = function (fruites) {
    let maximumFruite = Number.NEGATIVE_INFINITY;
    let maxNumberOfFruiteType = 2;
    let setOfFruite = new Set();
    let minWindow = 0;

    for (let maxWindow = 0; maxWindow < fruites.length; maxWindow++) {
        setOfFruite.add(fruites[maxWindow]);

        while (setOfFruite.size > maxNumberOfFruiteType) {
            setOfFruite.delete(fruites[minWindow]);
            minWindow++;
        }

        maximumFruite = Math.max(maximumFruite, maxWindow - minWindow + 1);
    }

    return maximumFruite;

}

module.exports = fruiteBasket