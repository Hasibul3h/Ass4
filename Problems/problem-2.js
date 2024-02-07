function checkName(name) {
    if (!isNaN(name) || typeof name !== 'string') {
        return "invalid";
    }

    const nameSmallCase = name.toLowerCase();
    const goodNameLetter = 'ayieouw';
    const nameLastLetter = nameSmallCase.slice(-1);
    
    if (goodNameLetter.includes(nameLastLetter)) {
        return "Good Name";
    } else {
        return "Bad Name";
    }
}

// Test cases
console.log(checkName("Salman"));     // Output: Bad Name
console.log(checkName("RAFEE"));      // Output: Good Name
console.log(checkName("Jhankar"));    // Output: Bad Name
console.log(checkName("199"));        // Output: invalid
console.log(checkName(["Rashed"]));   // Output: invalid
