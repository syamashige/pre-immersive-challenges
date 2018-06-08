module.exports = function acceptableSequence(str) {
  // write your code here

for (var i = 0; i< str.length; i++) {

  // console.log(str[i]);
//Meets the criteria, but in the wrong way:
//   var lastThing = str.length-1;
//   console.log("here",str[lastThing]);

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

    if (str[i].match(/[a-z]/i)) {
      // console.log("Letter")
        if (str[i-1] === "+" && str[i+1] === "+") {
          true;
        }
        else {
           false;
        }
    }
    else {
      // console.log("No.")
    }

  // if (str[i].match(/[a-z]/i) && str[i-1] && str[i+1] === "+"){
  //   console.log(true);
  // }
  // else {
  //   console.log(false);
  // }
  
}
}






