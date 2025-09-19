function parseCount(value) {
    const parsed = Number.parseFloat(value);
    if (isNaN(parsed)) {
        throw new Error("Невалидное значение");
    }
    return parsed;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        if (a + b <= c || a + c <= b || b + c <= a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        
        this.a = a;
        this.b = b;
        this.c = c;
        
        this.perimeter = a + b + c;
        const p = this.perimeter / 2;
        this.area = parseFloat(Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3));
        
        // Делаем свойства неизменяемыми
        Object.defineProperty(this, 'perimeter', {
            writable: false,
            configurable: false
        });
        Object.defineProperty(this, 'area', {
            writable: false,
            configurable: false
        });
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        const errorObj = {
            perimeter: 'Ошибка! Треугольник не существует',
            area: 'Ошибка! Треугольник не существует'
        };
        
        Object.defineProperty(errorObj, 'perimeter', {
            writable: false,
            configurable: false
        });
        Object.defineProperty(errorObj, 'area', {
            writable: false,
            configurable: false
        });
        
        return errorObj;
    }
}