function deleteInvalids(arrayParam) {
    if (!Array.isArray(arrayParam)) {
        return "Array Thik Nai";
    }

    return arrayParam.filter(item => typeof item === 'number' && !isNaN(item));
}

// Test cases
console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }])); // Output: [ 1, 18, -19 ]
console.log(deleteInvalids(["1" , {num:2} , NaN])); // Output: []
console.log(deleteInvalids([1 , 2 , -3])); // Output: [ 1, 2, -3 ]
console.log(deleteInvalids({num: [ 1 , 2 , 3 ]})); // Output: "Invalid Array"
