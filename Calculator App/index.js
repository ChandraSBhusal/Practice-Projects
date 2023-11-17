

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

let num1=40;
let num2=20;
let result;

let val1_EL=document.getElementById('val1').textContent=num1;
let val2_EL=document.getElementById('val2').textContent=num2;

let result_EL=document.getElementById("result");

function add(){

 result=num1+num2;

result_EL.textContent = "Result: " + result;
 

}

function subtract(){
 
 result=num1-num2;

result_EL.textContent = "Result: " + result;

}

function multiply(){


result_EL.textContent = "Result: " + num1 * num2;

}


function divide() {
	result_EL.textContent ="Result: " + num1 / num2;

}



