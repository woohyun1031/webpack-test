export default function printMe() {
  console.log("I get called from print.js!");
  // not console, err
}

// Uncaught ReferenceError: cosnole is not defined
//     at HTMLButtonElement.printMe (print.js:2 )
