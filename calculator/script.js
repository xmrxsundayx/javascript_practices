var displayDiv = document.querySelector("#display");
var operation = null
var firstVal = null
var secVal=null
var finishCal = false;

function press(input) {
    if ((displayDiv.innerText == "0" && input != ".") || finishCal){
    displayDiv.innerText = input;
    finishCal=false
    }
    else 
    displayDiv.innerText += input;

    var num = display.innerText;
    var convert = parseInt(num);

}

function clr() {
    // if (displayDiv.innerText != "0")
    displayDiv.innerText = "0";
}

function setOP (op){
    if(operation == null){
        firstVal = display.innerText;
        operation = op;
        clr();
    }
    else{
        calculate();
        operation=op
        firstVal = display.innerText;
    }

}

function calculate(){
    if ( firstVal == null) return;
    switch (operation){
        case "/":
            displayDiv.innerText=parseInt (firstVal) / parseInt (displayDiv.innerText)
            break;
        case "*":
            displayDiv.innerText=parseInt (firstVal) * parseInt (displayDiv.innerText)
            break;
        case "-":
            displayDiv.innerText=parseInt (firstVal) - parseInt (displayDiv.innerText)
            break;
        case "+":
            displayDiv.innerText=parseInt (firstVal) + parseInt (displayDiv.innerText)
            break;
        default: return
    }
        finishCal= true;
        firstVal = null;
        operation=null;

}