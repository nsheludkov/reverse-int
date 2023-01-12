module.exports = function reverse (n) {
    nstr = Math.abs(n).toString();
    let newnstr ="";
    digitCount = nstr.length-1;
    for (var i=digitCount ; i >= 0 ; i--) {
        newnstr = newnstr + nstr[i];
    }
    return Number(newnstr);
}
