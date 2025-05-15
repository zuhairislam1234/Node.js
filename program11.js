const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
rl.question('Enter username: ', (username) => {
rl.question('Enter number: ', (number) => {
console.log(`Username is ${username} and number is ${number}`);
rl.close();
});
});
