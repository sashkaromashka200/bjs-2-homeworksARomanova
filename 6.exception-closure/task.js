function parseCount(value) {
    const parsedValue = Number.parseFloat(value);
    
    if (isNaN(parsedValue)) {
        throw new Error("Невалидное значение");
    }
    
    return parsedValue;
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
    this.a = a;
    this.b = b;
    this.c = c;
    
    if (!this.isValidTriangle()) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  isValidTriangle() {
    return this.a + this.b > this.c && 
           this.a + this.c > this.b && 
           this.b + this.c > this.a &&
           this.a > 0 && this.b > 0 && this.c > 0;
  }
  
  // Геттер для периметра
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

    return {
      get area() {
        return "Ошибка! Треугольник не существует";
      },
      get perimeter() {
        return "Ошибка! Треугольник не существует";
      }
    };
  }
}