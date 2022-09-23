function pushButton(){
    var textArea = Number(document.getElementById("textArea").value)
    document.getElementById("textDiv").innerHTML = textArea
}

function sumNumbers(inputNumber){
    var inputNumber = Number(document.getElementById("textArea").value)
    if (Number.isInteger(inputNumber) == true) { 
        var summary = 0;
        var num = inputNumber + 1
        for (var i = 1; i < num; i++){
            summary += i
        }
    document.getElementById("textDiv").innerHTML = summary}

    else {
    document.getElementById("textDiv").innerHTML = "Please write number"
    }

}

function addMachine(addNumber){
    var inputNumber = Number(document.getElementById("textArea").value)
    var addNumber = Number(document.getElementById("addArea").value)
    if (Number.isInteger(inputNumber) == true & Number.isInteger(addNumber) == true ) {
        var result = inputNumber + addNumber
        document.getElementById("addDiv").innerHTML = result
    }
    else {
        document.getElementById("addDiv").innerHTML = "Please write number"
        }
}
