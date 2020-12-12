module.exports = (A) => A.reduce((prev, cur, i) => prev ^ cur ^ (i + 1), 0) ^ (A.length + 1);
