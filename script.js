//Exercises Level 2
/*
1) Create an Animal class. The class will have name, age, color, legs properties and create different methods
2) Create a Dog and Cat child class from the Animal Class.
*/

// Solution 1
class Animal {
  constructor(name, age, color, legs) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.legs = legs;
  }

  getAnimalDetails() {
    const animalDetails = `${this.name} is ${this.age} has ${this.color} color and ${this.legs}`;
    return animalDetails;
  }
}

// Solution 2

class Cat extends Animal {
  constructor(name, age, color, legs) {
    super(name, age, color, legs);
  }
}

let cat = new Cat("dunny", 5, "white", 4);
console.log(cat.getAnimalDetails());
console.log(cat);

//Exercises Level 2
/*
1) Override the method you create in Animal class
*/

// Solution 1
class Dog extends Animal {
  constructor(name, age, color, legs, sound) {
    super(name, age, color, legs);
    this.sound = sound;
  }
  getAnimalDetails() {
    const animalDetails = `${this.name} is ${this.age} has ${this.color} color and ${this.legs} and barks ${this.sound}`;
    return animalDetails;
  }
}

let dog = new Dog("gt", 5, "black", 4, "woof");
console.log(dog.getAnimalDetails());
console.log(dog);

// Exercise Level 3
/*
1) Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

2) Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
*/

console.log("");
console.log("");
console.log("");
console.log("Exercise 3===================");
// Solution 1
class Statistics {
  constructor(ages) {
    this.ages = ages;
  }

  count() {
    return this.ages.length;
  }

  sum() {
    return this.ages.reduce((initial, acc) => initial + acc);
  }

  min() {
    return Math.min(...this.ages);
  }
  max() {
    return Math.max(...this.ages);
  }

  range() {
    return this.max() - this.min();
  }

  mean() {
    let mean = Math.floor(this.ages.length / 2);
    return mean;
  }
  median() {
    let mode = this.ages[Math.floor(this.ages.length / 2)];
    return mode;
  }

  mode() {
    return this.ages.reduce(
      (ini, acc, i, arr) =>
        arr.filter((num) => num === ini).length >=
        arr.filter((num) => num === acc).length
          ? ini
          : acc,
      0
    );
  }

  // To calculate the Variance, take each difference, square it, and then average the result:
  variance() {
    // var mean = this.ages.mean(array);
    // return arr.mean(
    //   array.map(function (num) {
    //     return Math.pow(num - mean, 2);
    //   })
    //);
  }
}

const statistics = new Statistics([
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
]);

console.log(statistics.count());
console.log(statistics.sum());
console.log(statistics.min());
console.log(statistics.max());
console.log(statistics.range());
console.log(statistics.mean());
console.log(statistics.median());
console.log(statistics.mode());

// Solution 2
class PersonAccount {
  constructor(firstName, lastName, income, expenses) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.income = income;
    this.expenses = expenses;
  }

  totalIncome() {
    return this.income.reduce((ini, amount) => ini + amount);
  }
  totalExpenses() {
    return this.expenses.reduce((ini, amount) => ini + amount);
  }

  accountInfo() {
    return `${this.firstName} ${
      this.lastName
    } have a total income of ${this.totalIncome()} dollars and spends ${Math.abs(
      this.totalExpenses()
    )} dollars`;
  }

  accountBalance() {
    return `${this.totalIncome() + this.totalExpenses()}`;
  }
}

const user = new PersonAccount(
  "helen",
  "Fisher",
  [234, 444, 666, 55623, 55],
  [-23, -543]
);

console.log(user.totalIncome());
console.log(user.totalExpenses());
console.log(user.accountInfo());
console.log(user.accountBalance());
