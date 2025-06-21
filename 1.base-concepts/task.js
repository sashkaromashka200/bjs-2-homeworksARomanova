"use strict";

function solveEquation(a, b, c) {
    let arr = [];
    
    const discriminant = b ** 2 - 4 * a * c;
    
    if (discriminant < 0) {
        return arr;
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        arr.push(root);
    } else {
        const sqrtD = Math.sqrt(discriminant);
        const root1 = (-b + sqrtD) / (2 * a);
        const root2 = (-b - sqrtD) / (2 * a);
        arr.push(root1, root2);
    }
    
    return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    if (typeof percent !== 'number' || typeof contribution !== 'number' 
        || typeof amount !== 'number' || typeof countMonths !== 'number') {
        throw new Error('Все параметры должны быть числами');
    }
    
    if (amount <= contribution) {
        return 0;
    }
    
    const creditAmount = amount - contribution;
    const monthPercent = (percent / 12) / 100;
    const payment = creditAmount * (monthPercent + monthPercent / 
        (Math.pow(1 + monthPercent, countMonths) - 1));
    
    return parseFloat((payment * countMonths).toFixed(2));
}