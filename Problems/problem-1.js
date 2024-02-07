function calculateMoney(soldTicketAmount) {
    const oneTicketPrice = 120;
    const totalTicketSell = soldTicketAmount * oneTicketPrice;
    const totalExpense = 500 + (8 * 50);
    const netIncome = totalTicketSell - totalExpense;

    if (soldTicketAmount < 0) {
        return "Invalid Number"
    }
    else {
        return netIncome;
    }
}
console.log(calculateMoney(10));
console.log(calculateMoney(1055));
console.log(calculateMoney(93));
console.log(calculateMoney(-130));