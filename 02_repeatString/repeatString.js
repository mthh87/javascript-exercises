const repeatString = function(str, cnt) {
    
    if (cnt < 0) return 'ERROR';
    let tmpStr = '';
    for (let i = 1; i <= cnt; i++) {
        tmpStr += str;
    }
    return tmpStr;
};

// Do not edit below this line
module.exports = repeatString;
