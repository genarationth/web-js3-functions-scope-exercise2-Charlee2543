// ### Exercise 2.1 create a expression function for checking if a number is even</br>

const Ex2_number = function (checkNumber){
    if (checkNumber%2 === 0 ) { console.log("number is even"); }
    else{console.log("no number is even");}
    return checkNumber;
};
Ex2_number(4);


// ### Exercise 2.2 converts the function from Exercise 2.1 into an arrow function</br>

const Ex2_2_number = check2Number => check2Number&2===0 ?"number is even":"no number is even";
const Answer = Ex2_2_number(7);
console.log(Answer)