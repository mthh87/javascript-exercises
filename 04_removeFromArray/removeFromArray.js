const removeFromArray = function(orgArray,...args) {
//    console.log(orgArray);
//    console.log(args);
    for (let i = 0; i < args.length; i++) {
        let newArray = orgArray.filter((aryElem) => (aryElem !== args[i]));
//        console.log(newArray);
        orgArray = [...newArray];
    }
//    console.log('all done...returning');
    return orgArray;
};

// Do not edit below this line
module.exports = removeFromArray;
//console.log('be carefull down there');
//console.log(removeFromArray([1,2,3,4],3));
