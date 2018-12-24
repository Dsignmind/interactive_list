var listItems = ["Default entry..."];

function newItem(content) {
    var node = document.createElement('li');
    node.setAttribute('class', 'list-group-item');
    var nodeText = document.createTextNode(content);
    node.appendChild(nodeText);
    document.getElementById("pageList").appendChild(node);
}

function populateList() {
    listItems.forEach(listItem => {
        newItem(listItem);
    });
}
function closeAlert() {
    var x = document.getElementById('alert-div');
    x.style.display = "none";
}
function addItem() {
    let itemText = document.getElementById('inputText').value
    var x = document.getElementById('alert-div');
    if (itemText === "") {
        console.log('I am getting called');
        x.style.display = "block";
    } else {
        x.style.display = "none";
        newItem(itemText);
        listItems.push(itemText);
        document.getElementById('inputText').value = "";
    }
    
}