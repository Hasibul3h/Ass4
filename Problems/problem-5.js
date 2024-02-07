function monthlySavings(allPayments, livingCost) {

    if (!Array.isArray(allPayments) || typeof livingCost !== 'number') {
        return "invalid input";
    }

    const totalIncome = allPayments.reduce((total, payment) => {
        return total + payment;
    }, 0);

    const totalTax = allPayments.reduce((total, payment) => {
        if (payment >= 3000) {
            return total + (payment * 0.2);
        } else {
            return total;
        }
    }, 0);

    const savings = totalIncome - livingCost - totalTax;

    if (savings >= 0) {
        return savings;
    } else {
        return "Earn More Shahed";
    }
}

// Test Cases
console.log(monthlySavings([1000, 2000, 3000], 5400)); // Output: 0
console.log(monthlySavings([1000, 2000, 2500], 5000)); // Output: 500
console.log(monthlySavings([900, 2700, 3400], 10000)); // Output: "earn more"
console.log(monthlySavings(100, [900, 2700, 3400])); // Output: "invalid input"
