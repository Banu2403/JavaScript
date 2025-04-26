let userName: string | number | boolean = "Elvin";
userName = 5;
userName = false;

const numberArray: (boolean | number)[] = [false, true, false];

numberArray.push(7);

interface StudentGrades {
  math: number;
  chemistry: number;
  physics: number;
}

interface Friend {
  name: string;
}

interface Student extends StudentGrades {
  name: string;
  age: number;
  isAvailable: boolean;
  hobbies: string[];
  friends: Friend[];
}

const student: Student = {
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

const number: undefined | number = undefined;

const sum = (a: number, b: number, c?: number) => {
  return a + b + (c ?? 0) + number!;
};
console.log(sum(1, 2), sum(3, 4, 5));
