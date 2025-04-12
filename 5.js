const users = [
  { id: 1, username: 'johnDoe', email: 'john@example.com' },
  { id: 2, username: 'janeDoe', email: 'jane@example.com' },
];

function findByName(userArray, name) {
  return userArray.find(user => user.username === name);
}

const netice = findByName(users, "johnDoe");
console.log(netice);

