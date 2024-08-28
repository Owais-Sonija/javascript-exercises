const removeFromArray = function(arr, ...args) {

//     const filterArray = args;
//     const originalArray = arr;
//     //Filtering through matching with argument array
//     const eleToBeRemovedArray = originalArray.filter(el => filterArray.map(x=> x).includes(el));
// // Final array will give the values the second array does not includes
//     const finalArray = originalArray.filter((element)=> !eleToBeRemovedArray.includes(element))
//     return finalArray;
//     // return args;

    return filteredArray = arr.filter(ele => !args.includes(ele))
};

// Do not edit below this line
module.exports = removeFromArray;
