let songDecoder = function(str) {
    const regex = /(?:WUB)+/gi;
    return str.replace(regex, " ").trim();
};
