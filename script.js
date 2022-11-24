var displayDiv = document.querySelector("#display");
displayDiv.innerText = "";
valueOne= "";
total= "";
operator= "";


function clr()
{
    displayDiv.innerText = "";
}

function press(elementName)
{
    displayDiv.innerText = (displayDiv.innerText + elementName);
    valueOne = displayDiv.innerText;
    console.log(valueOne);
    console.log(elementName);
    // return elementName;
}

function setOP(elementName)
{
    displayDiv.innerText = (displayDiv.innerText + elementName);
    console.log(displayDiv.innerText);
    operator = elementName;
    // return displayDiv.innerText;
}

function calculate()
{
    total = (valueOne + operator + valueOne);
    console.log(eval(total));
    displayDiv.innerText = eval(total);
}

