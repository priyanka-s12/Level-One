//Callback function - passed as args to function & call later on but not immediately
//CB passed as argument to another function, why? this passed function can be called anytime later on the code but not immediately

//traditional way
// function greetUser(username, callback) {
//   let message = "Good Morning, " + username;
//   callback(message);
// }

//greetUser is higher order function who accepts callback function as arguement

//callback is imp in interviews

//while calling greetUser, not calling logMessage() here, i.e. not putting round bracket
// greetUser("Alice", logMessage);

// function logMessage(message) {
//   console.log(message);
// }

//using arrow function ES6 way
const greetUser = (username, callback) => {
  let message = 'Good Morning, ' + username;
  callback(message);
};

const logMessage = (mesage) => {
  console.log(mesage);
};

greetUser('Alice', logMessage);
//if write logMessage below calling greetUser(), error - can't access before initialisation, but in traditional won't get any error

//btn - eventlistener, function is callback function
// btn.addEventListener('click', function(){

// })

// btn.addEventListener('click', printMessage)
//if put round bracket around function will be executed without clicking on btn
// function printMessage(){
//   console.log('....')
// }
