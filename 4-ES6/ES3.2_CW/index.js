//rest params - it collects rest of the values
//rest parameter syntax allows a function to accept an indefinite number of arguments as an array
const restExample = (a, b, ...rest) =>
  // console.log(a, rest)
  {
    console.log(a);
    console.log(b);
    console.log(rest);
  };

restExample(1, 2, 3, 4, 5, 6);

const concatenateStrings = (...strings) => console.log(strings.join(' '));
//... will convert strings into array
concatenateStrings('Hello', 'World');
concatenateStrings('Javascript', 'is', 'fun');

const countArguments = (...args) => console.log(args.length);

countArguments(1, 2, 'Hello', 'Joy');
countArguments('Good', 'Job');
