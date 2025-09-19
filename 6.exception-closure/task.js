function parseCount(value) {
    const parsed = Number.parseInt(value, 10);
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
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = this.getPerimeter() / 2;
        const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Number(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        const errorObj = {
            getPerimeter: function() {
                return "Ошибка! Треугольник не существует";
            },
            getArea: function() {
                return "Ошибка! Треугольник не существует";
            }
        };
        
        Object.defineProperty(errorObj, 'getPerimeter', {
            writable: false,
            configurable: false
        });
        Object.defineProperty(errorObj, 'getArea', {
            writable: false,
            configurable: false
        });
        
        return errorObj;
    }
}