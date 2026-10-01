/***
  code for mini calculator
***/

// getting all buttons object (collection obj)
const buttons = document.querySelectorAll("button");
// OR
// const buttons = document.getElementsByTagName("button");

// fetching 1-by-1 button from collection
for (let i = 0; i < buttons.length; i++) {
    // attaching event handler for all buttons
    buttons[i].addEventListener("click", compute);
    // whenever event is triggered then compute() calling
}

// defining function
function compute(evnt) {
    // getting button value
    let bVal = evnt.target.value;
    console.log(bVal);

    // getting textbox object
    const tb = document.querySelector("#tBox");

    // checking button value
    if (bVal === "AC") {
        tb.value = ""; // clear textbox
    }
    else if (bVal === "=") {
        // checking textbox is empty or not
        if (tb.value !== "") {
            tb.value = eval(tb.value); // evaluate expr
        }
    }
    else {
        tb.value += bVal; // appending button value
    }
}