function parseCount(value) {
    if (typeof value === 'string') {
        const parsed = Number(value);
        if (!isNaN(parsed)) return parsed;
        
        const cleanValue = value.replace(',', '.').trim();
        const parsedClean = Number(cleanValue);
        if (!isNaN(parsedClean)) return parsedClean;
    }
    
    throw new Error("Невалидное значение");
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

    get perimeter() {
        return this.a + this.b + this.c;
    }

    get area() {
        const p = this.perimeter / 2;
        const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return parseFloat(area.toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        const errorObj = {
            get perimeter() {
                return "Ошибка! Треугольник не существует";
            },
            get area() {
                return "Ошибка! Треугольник не существует";
            }
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
