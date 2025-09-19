function parseCount(value) {
    const result = Number.parseInt(value);
    if (isNaN(result)) throw new Error("Невалидное значение");
    return result;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (error) {
        return error;
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (error) {
        return {
            get perimeter() { 
                return "Ошибка! Треугольник не существует"; 
            },
            get area() { 
                return "Ошибка! Треугольник не существует"; 
            }
        };
    }
}