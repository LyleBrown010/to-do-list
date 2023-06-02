// add function 
let toDoList = []; 

function add() {
    let addedItem = {
        id: "",
        name: document.getElementById("inputItem").value,
        createdDate: "", 
        completed: ""

    }
    toDoList.push(addedItem)



    
    // addedItem = document.getElementById("display").innerHTML = toDoList;

    let list = document.querySelector(".display");
    list.innerHTML = " ";
    toDoList.forEach((data) => {
    list.innerHTML += 
    `
    
    <li class="list">${data.name}</li>`;
    });




};

function sort(){
    toDoList.sort(); 
    document.querySelector(".display").innerHTML = toDoList;
}
// sort();


