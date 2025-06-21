"use strict";

function solveEquation(a, b, c) {
    if (a === 0) {
        throw new Error("Коэффициент a не может быть равен нулю");
    }
    
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
    // Эта функция осталась без изменений, так как она не относится к заданию
}