
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix == null) {
        return [];
    }
    return matrix.reduce((acc, cur, i) => {
        cur.sort((a, b) => !(i & 1) ? a - b : b - a).map(e => acc.push(e));
        return acc;
    }, [])
}
