/* WRITE THE CODE FOR THE FOLLOWING FUNCTIONS */

// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add(a = 0, b = 0) {
  return a + b;
}
console.log(add(3, 10));

// Input: number
// Action: Check if the number given is even or not
// Output: The result (boolean)
function isEven(value = 0) {
  if (value % 2 == 0) return true;
  else return false;
}
console.log(isEven(5));

// Input: name (string)
// Action: Greet the user by name
// Output: The greeting (string)
function greet(name = "Stranger") {
  return "Hello, " + name + "!";
}
console.log(greet("John"));

// Input: age (number)
// Action: Check if the age is 18 or over
// Output: The result (boolean)
function isAnAdult(age = 0) {
  if (age >= 18) return true;
  else return false;
}
console.log(isAnAdult(26));

// Input: age (number)
// Action: Check how many years are left until adulthood (18)
// Output: The result (number)
function yearsToAdulthood(age = 0) {
  return 18 - age;
}
console.log(yearsToAdulthood(15));

// Input: person ({ age: number, name: string })
// Action:
//   - check if a person is an adult
//   - if they are, greet them
//   - if they are not, tell them to come back in X years (when they are)
// Output: The result (string)
function admit(age = 0, name = "") {
    if (isAnAdult(age) == true) {
        return greet(name);
    } else {
        return "Hello, " + name + "! Come back in " + yearsToAdulthood(age) + " year(s).";
    }
}
console.log(admit(19, "Elo"));

