// Deep freeze
Object.deepFreeze = function(obj) {
    for (var key in obj) {
        if (typeof obj[key] === "object") {
            Object.deepFreeze(obj[key]);
        }
    }
    return Object.freeze(obj);
};
