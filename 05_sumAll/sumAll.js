const sumAll = function(num1, num2) {

    if ((num1 < 0) | (num2 < 0)) {return 'ERROR'}
    if ((typeof(num1) !== 'number') | (typeof(num2) !== 'number')) {return 'ERROR'}
    let var1 = 0;
    let var2 = 0;

    if (num1 > num2) {
        var1 = num2;
        var2 = num1;
    } else {
        var1 = num1;
        var2 = num2;
    }

    let sum = 0;

    for (let i = var1; i <= var2; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
