// Recursive replication
var replicate = function(times, num) {
    if (times === 1) {
        return num;
    } else if (times < 1 || typeof num !== "number" || typeof times !== "number") {
        return [];
    }
    return [num].concat(replicate(times - 1, num));
};
