function greet(name) {
    return "Hello, ".concat(name, "!");
}
var message = greet("World");
var tp = [44, 55];
console.log(message);
var reactangle = {
    height: 1,
    width: 1
};
var car = {
    carType: 'TOYO',
    carYear: 2019
};
function printStatusCode(code) {
    console.log("My status code is ".concat(code, "."));
}
printStatusCode(404);
printStatusCode('404');
// function printStatusCode(code: string | number) {
//   console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'
// }
var x = 4;
console.log(x.length); // prints undefined since numbers don't have a length
var Reactangle1 = /** @class */ (function () {
    function Reactangle1(height, width) {
        this.height = height;
        this.width = width;
    }
    Reactangle1.prototype.getArea = function () {
        return this.height * this.width;
    };
    return Reactangle1;
}());
var reactangle1 = new Reactangle1(10, 20);
console.log(reactangle1.getArea());
var pointPart = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;
console.log(pointPart);
