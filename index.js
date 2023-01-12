//First part

const restaurant = "Нескучный сад";
let cafe = "Travellers";
var barbershop = "Brat";

//Second part

const vehicle = {
    brandName: "Toyota",
    model: "Camry 55",
}

vehicle.model = "Camry 50";

delete vehicle.model;

console.log(vehicle);

//Third part

let salaries = {
    'Tokhtar': 611000,
    'Askar': 590000,
    'Ramina': 780000,
    'Zhasulan': 670000,
}

let sum = 0;

Object.keys(salaries).forEach((value, index) => sum += salaries[value]);

console.log(sum);
