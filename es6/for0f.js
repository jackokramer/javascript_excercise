let incomes = [62000, 67000, 75000]
let total =0

for(const income of incomes){
    console.log(income);
    total +=income;
}

console.log(total);

const fullName = "Jacko Kramer";

for(char of fullName){
    console.log(char);
}

// Challenge - For Of Loop

// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

const students = [
    { name: "John", city: "New York" },
    { name: "Peter", city: "Paris" },
    { name: "Kate", city: "Sydney" }
]

for(const person of students){ // added const
    console.log(person.name + ` lives in ` + person.city)
}
