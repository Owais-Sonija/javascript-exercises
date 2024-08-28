const fibonacci = function(idx) {
let index = parseInt(idx);
if (index <0) {
    return "OOPS"
}
    const series = [0,1 ];
for (let i = 0; i < 100; i++) {
    let lastNum = series[series.length -1];
    let secondLastNum = series[series.length -2];
    let sum = lastNum + secondLastNum;
    series.push(sum)    
}

return series[index];
};

// Do not edit below this line
module.exports = fibonacci;
