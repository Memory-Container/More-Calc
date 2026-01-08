let inputString = ""
let display = document.querySelector(".display")
let token = [], displayToken = [], current = 0, isError = false
let buttonString = ""
let prevType = ""
const buttonGrid = document.querySelector(".buttonGrid")
let keysArray = [
    "CE","C","⇐","÷",
    "7","8","9","×",
    "4","5","6","—",
    "1","2","3","+",
    "+/-","0","⋅","=",
]
let colorArray = [
    "g","g","g","g",
    "w","w","w","g",
    "w","w","w","g",
    "w","w","w","g",
    "w","w","w","b",
]
function initializeKeys() {
    for (index in keysArray) {
        buttonString += `<button class="inputButton ${colorArray[index]}" onclick="mathOperation('${keysArray[index]}')">${keysArray[index]}</button>`
    }
    buttonGrid.innerHTML += buttonString
}
function mathOperation(op) {
    token[current] = token[current] ?? ""
    displayToken[current] = displayToken[current] ?? ""
    if (isError == true) {
        isError = false
        inputString = ""
        updateInput()
    }
    switch (op) {
        case "C": 
            display.innerHTML = `&nbsp;`
            token = []
            inputString = ""
            outputString = []
            current = []
            prevType = []
            displayToken = []
            current = 0
            isError = "false"
            break;
        case "CE":
            displayToken.splice(displayToken.length - 1, 1)
            token.splice(token.length - 1, 1)
            inputString = displayToken.join("")
            console.log(inputString)
            current--
            updateInput()
            break;
        case "⇐":
            if (inputString == "") {
                token = []
                displayToken = []
                return
            }
            inputString = inputString.slice(0, -1)
            if (token[current] != "") {
                token[current] = token[current].slice(0, -1)
                displayToken[current] = displayToken[current].slice(0, -1)
                if (displayToken[current] == "") {
                    console.log(1)
                    displayToken.splice(displayToken.length - 1, 1)
                    token.splice(token.length - 1, 1)
                    current--
                }
            }
            updateInput()
            break;
        case "1":
            inputString += "1"
            prevType = "number"
            token[current] += "1"
            displayToken[current] += "1"
            updateInput()
            break;
        case "2":
            inputString += "2"
            prevType = "number"
            token[current] += "2"
            displayToken[current] += "2"      
            updateInput()
            break
        case "3":
            inputString += "3"
            prevType = "number"
            token[current] += "3"
            displayToken[current] += "3"           
            updateInput()
            break
        case "4":
            inputString += "4"
            prevType = "number"
            token[current] += "4"
            displayToken[current] += "4"
            updateInput()
            break
        case "5":
            inputString += "5"
            prevType = "number"
            token[current] += "5"
            displayToken[current] += "5"
            updateInput()
            break
        case "6":
            inputString += "6"
            prevType = "number"
            token[current] += "6"
            displayToken[current] += "6"
            updateInput()
            break
        case "7":
            inputString += "7"
            prevType = "number"
            token[current] += "7"
            displayToken[current] += "7"
            updateInput()
            break
        case "8":
            inputString += "8"
            prevType = "number"
            token[current] += "8"
            displayToken[current] += "8"
            updateInput()
            break
        case "9":
            inputString += "9"
            prevType = "number"
            token[current] += "9"
            displayToken[current] += "9"
            updateInput()
            break
        case "0":
            inputString += "0"
            prevType = "number"
            token[current] += "0"
            displayToken[current] += "0"
            updateInput()
            break
        case "⋅":
            if (prevType == "decimal" || prevType == "operation" || prevType == "") {
                return;
            }
            inputString += "."
            prevType = "decimal"
            token[current] += "."
            displayToken[current] += "."
            updateInput()
            break
        case "+":
            if (prevType == "operation" || prevType == "") {
                return;
            }
            inputString += "+"
            prevType = "operation"
            current++
            token[current] = "+"
            displayToken[current] = "+"
            current++
            updateInput()
            break
        case "—":
            if (prevType == "operation" || prevType == "") {
                return;
            }
            inputString += "—"
            prevType = "operation"
            current++
            token[current] = "-"
            displayToken[current] = "—"
            current++
            updateInput()
            break
        case "×":
            if (prevType == "operation" || prevType == "") {
                return;
            }
            inputString += "×"
            prevType = "operation"
            current++
            token[current] = "*"
            displayToken[current] = "×"
            current++
            updateInput()
            break
        case "÷":
            if (prevType == "operation" || prevType == "") {
                return;
            }
            inputString += "÷"
            prevType = "operation"
            current++
            token[current] = "/"
            console.log(displayToken[current])
            displayToken[current] = "÷"
            current++
            updateInput()
            break
        case "=":
            let string = token.join("")
            if (/\/0/.test(string)) {
                console.log(string)
                inputString = "CANNOT DIVIDE BY 0"
                isError = true
            } else {
                inputString = String(eval(string))
                token = []
                displayToken = []
                displayToken.push(String(inputString))
                token.push(String(inputString))
            }
            updateInput()
            break
        case "+/-":
            if (prevType = "Number") {
                displayToken[current] = String(-Number(displayToken[current]))
                token[current] = String(-Number(token[current]))
                inputString = displayToken.join("")
                updateInput()
            }
            break
        
    }
}
function updateInput() {
    display.innerHTML = inputString == "" ? "&nbsp;" : inputString
}
initializeKeys()