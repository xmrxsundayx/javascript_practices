console.log("page loaded...");

var requestSpan = document.querySelector("#requests");
var  connectionSpan = document.querySelector("#connections");
var username =document.querySelector("#username");


function accept(id) {
    var element = document.querySelector(id);
    element.remove();
    requestSpan.innerText--;
    connectionSpan.innerText++;
}
function ignore(id) {
    var element = document.querySelector(id);
    requestSpan--;
    element.remove();
}

function edit () {
    username.innerText = "Doe Jane";
}