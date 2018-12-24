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

// var btn = document.getElementById('addItemButton');
// btn.onclick = function() {
//     let itemText = document.getElementById('inputText').value
//     if (itemText === "") {
//         <div class="alert alert-danger" role="alert">
//             You didn't enter anything!
//         </div>
//     } else {
//         newItem(itemText);
//         listItems.push(itemText);
//         document.getElementById('inputText').value = "";
//     }
// }
function addItem() {
    let itemText = document.getElementById('inputText').value
    if (itemText === "") {
        // alert('No Input');
        // console.log('I am getting called');
        // var x = document.getElementById('alert-div');
        // if (x.style.display === "none") {
        //     x.style.display = "block";
        // } else {
        //     x.style.display = "none";
        // }
        // <div id="alert-div" class="alert alert-danger" role="alert" style="display: none">
        //     You didn't enter anything!
        //     <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        //         <span aria-hidden="true">&times;</span>
        //     </button>
        // </div>
        // document.getElementById('alert-div').show()
    } else {
        newItem(itemText);
        listItems.push(itemText);
        document.getElementById('inputText').value = "";
    }
    
}