
const readline = require('readline')

// if you use ES Modules, use this:
// import readline from 'readline'

const inquirer = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

inquirer.question("What is your name ?", name => {
  inquirer.question("How old are you?", age => {
    if(name===''||age===''){
        console.log('Invalid Inputs');
    }
    else{
        console.log(`${name} is ${age} years old`);
    }
      inquirer.close();
  });
});

// inquirer.on("close", function() {
//   console.log("Good bye!");
//   process.exit(0);
// });