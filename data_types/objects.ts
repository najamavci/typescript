const car: { type: string, model: string, year: number } = {
  type: "Toyota",
  model: "Corolla",
  year: 2009
};

car.type = "Ford"; // no error
//car.type = 2; // Error: Type 'number' is not assignable to type 'string'.
car.model="245";
car.year=2025;
console.log(car)


///////
const cars: { type: string, mileage?: number } = { // no error
  type: "Toyota"
};
cars.mileage = 2000;