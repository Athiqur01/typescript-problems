"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function formatString(input, toUpper) {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    else {
        return input.toUpperCase();
    }
}
console.log(formatString("Hello"));
console.log(formatString("Mello", false));
console.log(formatString("Gelo", true));
function filterByRating(items) {
    const rating4OrMore = items.filter(item => item.rating >= 4);
    return rating4OrMore;
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 }
];
console.log(filterByRating(books));
function concatenateArrays(...arrays) {
    const result = [];
    for (const array of arrays) {
        result.push(...array);
    }
    return result;
}
console.log(concatenateArrays([1, 2, 5], ["4", 5, 6]));
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        console.log(`Make: ${this.make}, Year: ${this.year}`);
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        console.log(`Model: ${this.model}`);
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo(); // Output: "Make: Toyota, Year: 2020"
myCar.getModel();
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * 2;
    }
}
console.log(processValue('hello vai'));
console.log(processValue(25));
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    let maxExpensiveProduct = products[0];
    for (let i = 1; i < products.length; i++) {
        if (products[i].price > maxExpensiveProduct.price) {
            maxExpensiveProduct = products[i];
        }
    }
    return maxExpensiveProduct;
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
console.log(getMostExpensiveProduct(products));
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    return Day.Saturday === day || Day.Sunday === day ? "Weekend" : "Weekday";
}
console.log(getDayType(Day.Monday));
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (n < 0) {
                    reject(new Error("Number must not be negative"));
                }
                else {
                    resolve(n * n);
                }
            }, 1000);
        });
    });
}
squareAsync(4)
    .then(console.log);
squareAsync(-3)
    .catch(console.error);
