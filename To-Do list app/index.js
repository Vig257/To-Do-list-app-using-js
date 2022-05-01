const inputBox = document.getElementById('inputBox')
//errror in removing task

//adding eventlistner to the input box 

inputBox.addEventListener('keydown', (event) => {

    if (event.code === 'Enter') {
        console.log(inputBox.value)
        addTask()
    }

})




function addTask() {
    let inputValue = inputBox.value;//takes input value

    let unorderListEL = document.getElementById("List")//takes list full

    const item = document.createElement('li')//makes a li in the unordered list
    item.innerText = inputValue;//insert the vlaue of inputbox to item ie li


    const span = document.createElement('span')//create a span for X mark
    span.innerHTML = '&times;';
    span.onclick = removeTask

    item.append(span)//append the item with span ie<li>value</li><span>X</span>

    unorderListEL.append(item)
    inputValue.innerText = '';//clears the value
}

function removeTask() {
    const unorderListEL = document.getElementById("List")
    console.dir(event.target.parentNode)

    unorderListEL.removeChild(event.target.parentNode)

}
