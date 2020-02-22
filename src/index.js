exports.min = function min(array) {
    return !Array.isArray(array) || array.length === 0 ? 0
        : array
            .reduce((min, item) => item < min ? min = item
                : min, min = array[0]);
};

exports.max = function max(array) {
    return !Array.isArray(array) || array.length === 0 ? 0
        : array
            .reduce((max, item) => item > max ? max = item
                : max, max = array[0]);
};

exports.avg = function avg(array) {
    return !Array.isArray(array) || array.length === 0 ? 0
        : array
        .reduce((sum, item) => sum + item, 0) / array.length
        .toFixed(1);
};
