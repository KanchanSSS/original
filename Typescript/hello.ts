function greet(name: string): string {
  return `Hello, ${name}!`;
}

const message: string = greet("World");
const tp : [t1 : number, t2:number] = [44,55]
console.log(message);

interface Reactangle {
  height:number;
  width:number;
}

const reactangle:Reactangle = {
  height:1,
  width:1
}

type CarYear = number;
type CarType = string;
type Car = {
  carType:CarType,
  carYear:CarYear
}

const car : Car = {
  carType:'TOYO',
  carYear:2019
}

function printStatusCode(code: string | number) {
  console.log(`My status code is ${code}.`)
}
printStatusCode(404);
printStatusCode('404');

// function printStatusCode(code: string | number) {
//   console.log(`My status code is ${code.toUpperCase()}.`) // error: Property 'toUpperCase' does not exist on type 'string | number'. Property 'toUpperCase' does not exist on type 'number'
// }
let x: unknown = 4;
console.log((x as string).length); // prints undefined since numbers don't have a length

//console.log((4 as string).length); // Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. 
// //If this was intentional, convert the expression to 'unknown' first.

//Force casting
//let x1 = 'hello';
//console.log(((x1 as unknown) as number).length); // x is not actually a number so this will return undefined

interface Shape {
  getArea: () => number
}

class Reactangle1 implements Shape{
  constructor(protected readonly height:number, protected readonly width:number){}

  public getArea():number{
    return this.height*this.width;
  }
}

const reactangle1 = new Reactangle1(10,20);
console.log(reactangle1.getArea());

//Partial changes all the properties in an object to be optional.
interface Point {
  x: number;
  y: number;
}
            
let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
pointPart.x = 10;

console.log(pointPart);

//Required changes all the properties in an object to be required.
interface Car1 {
  make: string;
  model: string;
  mileage?: number;
}
            
let myCar: Required<Car1> = {
  make: 'Ford',
  model: 'Focus',
  mileage: 12000 // `Required` forces mileage to be defined
};

console.log(myCar);

//Index signatures can be used for objects without a defined list of properties.
const nameAgeMap: { [index: string]: number } = {};

nameAgeMap.Jack = 25; // no error

//nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.

console.log(nameAgeMap);

//Record is a shortcut to defining an object type with a specific key type and value type
const nameAgeMap1: Record<string, number> = {
  'Alice': 21,
  'Bob': 25
};

//alternatively
const nameAgeMap2: { [key: string]: number } = {
  'Alice': 21,
  'Bob': 25
};

console.log(nameAgeMap1);

//Omit removes keys from an object type.
interface Person {
  name: string;
  age: number;
  location?: string;
}

const bob: Omit<Person, 'age' | 'location'> = {
  name: 'Bob'
  // `Omit` has removed age and location from the type and they can't be defined here
};

//Pick removes all but the specified keys from an object type.
interface Person1 {
  name: string;
  age: number;
  location?: string;
}

const bob1: Pick<Person1, 'name'> = {
  name: 'Bob'
  // `Pick` has only kept name, so age and location were removed from the type and they can't be defined here
};

//Exclude removes types from a union.
type Primitive = string | number | boolean;

const value: Exclude<Primitive, string> = true;
// a string cannot be used here since Exclude removed it from the type.

console.log(typeof value); //output : boolean

//ReturnType extracts the return type of a function type.

type PointGenerator = () => { x: number; y: number; };

const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};

//Parameters extracts the parameter types of a function type as an array.
type PointPrinter = (p: { x: number; y: number; }) => void;

const point1: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
}; //{x:10, y:20}

//Readonly is used to create a new type 
// where all properties are readonly, meaning they cannot be modified once assigned a value.
interface Person2 {
  name: string;
  age: number;
}
const person2: Readonly<Person> = {
  name: "Dylan",
  age: 35,
};
//person2.name = 'Israel'; // prog.ts(11,8): error TS2540: Cannot assign to 'name' because it is a read-only property.

//keyof is a keyword in TypeScript which is used to extract the key type from an object type.

//The tsconfig.json file is the heart of every TypeScript project.

//It tells the TypeScript compiler how to process your code, which files to include, and which features to enable or disable.