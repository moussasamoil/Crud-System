var proudctName = document.getElementById('proudctName');
var productPrice = document.getElementById('proudctPrice');
var proudctCategory = document.getElementById('proudctCategory');
var proudctDesc = document.getElementById('proudctDesc');
var inputs = [];
var globalIndex;
if (localStorage.getItem('ourProudect') != null) {
    inputs = JSON.parse(localStorage.getItem('ourProudect'));
    display();
}

function addProduct() {
     if (document.getElementById('AddProudct').innerHTML == 'Add Proudct') {
        var product = {
            name: proudctName.value,
            price: productPrice.value,
            category: proudctCategory.value,
            desc: proudctDesc.value,
        }
        inputs.push(product);
        localStorage.setItem('ourProudect', JSON.stringify(inputs));
        display();
        clr();
    }
     else {
         finalEdit();
     }
}
function display() {
    var trs = ``;
    for (var i = 0; i < inputs.length; i++) {
        trs += `<tr>
        <td>${i + 1}</td>
        <td>${inputs[i].name}</td>
        <td>${inputs[i].price}</td>
        <td>${inputs[i].category}</td>
        <td>${inputs[i].desc}</td>
        <td><button id="deleteProudect" onclick="deleteProudct(${i})" class="btn btn-danger">Delete</button></td>
        <td><button id="updateProudect" onclick="updateProudct(${i})" class="btn btn-warning">Update</button></td>
    </tr>`
    }
    document.getElementById('tableData').innerHTML = trs;
}
function clr() {
    proudctName.value = "";
    productPrice.value = "";
    proudctCategory.value = "";
    proudctDesc.value = "";
}
function deleteProudct(index) {
    inputs.splice(index, 1)
    localStorage.setItem('ourProudect', JSON.stringify(inputs));
    display();
}
function searchProudct(word) {
    var trs = ``;
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].name.toLowerCase().includes(word.toLowerCase())) {
            trs += `<tr>
            <td>${i + 1}</td>
            <td>${inputs[i].name}</td>
            <td>${inputs[i].price}</td>
            <td>${inputs[i].category}</td>
            <td>${inputs[i].desc}</td>
            <td><button id="deleteProudect" onclick="deleteProudct(${i})" class="btn btn-danger">Delete</button></td>
            <td><button id="updateProudect" onclick="updateProudct(${i})" class="btn btn-warning">Update</button></td>
        </tr>`
        }
    }
    document.getElementById('tableData').innerHTML = trs;
}

function updateProudct(index) {
    globalIndex = index;
    proudctName.value = inputs[index].name;
    productPrice.value = inputs[index].price;
    proudctCategory.value = inputs[index].category;
    proudctDesc.value = inputs[index].desc;
    document.getElementById("AddProudct").innerHTML = 'Update';
}
function finalEdit() {
    var product = {
        name: proudctName.value,
        price: productPrice.value,
        category: proudctCategory.value,
        desc: proudctDesc.value,
    }
    inputs.splice(globalIndex, 1, product);
    localStorage.setItem('ourProudect', JSON.stringify(inputs));
    display();
    clr();
    document.getElementById("AddProudct").innerHTML = 'Add Proudct';
}