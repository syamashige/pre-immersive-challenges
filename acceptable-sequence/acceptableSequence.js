module.exports = function acceptableSequence(str) {
  // write your code here

  // console.log(str[i]);
//Meets the criteria, but in the wrong way:
//   var lastThing = str.length-1;
//   console.log("here",str[lastThing]);
// for (var i = 0; i< str.length; i++) {
//   if (str.charAt(0,lastThing) ==="+") {
//     return true;
//   }
//   else {
//     return false;
//   }
// }

    // if(str === ) {
      
    // }
    // else {

    // }

    // console.log(str.match(/[a-z]/i));
    // console.log(str[i]);
  for (var i = 0; i< str.length; i++) {
    if (str[i].match(/[a-z]/i)) {
      // console.log("Letter")
        if (str[i-1] === "+" && str[i+1] === "+") {
           
        }
        else {
           return false;
        }
    };
    // else {
    //   // console.log("No.")
    // }
  }
return true;
}






