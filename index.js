var userName = "Elvin";
userName = 5;
userName = false;
var numberArray = [false, true, false];
numberArray.push(7);
var student = {
    name: "Elvin",
    age: 24,
    isAvailable: false,
    hobbies: ["collection codes"],
    friends: [
        {
            name: "Ruslan",
        },
    ],
    chemistry: 5,
    math: 3,
    physics: 4,
};
var number = undefined;
var sum = function (a, b, c) {
    return a + b + (c !== null && c !== void 0 ? c : 0) + number;
};
console.log(sum(1, 2), sum(3, 4, 5));
