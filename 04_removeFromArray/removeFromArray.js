const removeFromArray = function(orgArray,...args) {
    for (let i = 0; i < args.length; i++) {
        let newArray = orgArray.filter((aryElem) => (aryElem !== args[i]));
        orgArray = [...newArray];
    }
    return orgArray;
};

// Do not edit below this line
module.exports = removeFromArray;
