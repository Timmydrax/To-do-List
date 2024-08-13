const toDoList = document.getElementById("toDoList");
const newToDoInput = document.getElementById("newToDoInput");
const addToDoButton = document.getElementById("addToDoButton");


addToDoButton.addEventListener("click", ()=>{

    const newToDoText = newToDoInput.value;

    if(newToDoText!==""){
        const newToDoItem = document.createElement("li");
        newToDoItem.innerText = newToDoText;
        
        const deleteToDoBtn = document.createElement("button");
        deleteToDoBtn.innerText = "X";

        deleteToDoBtn.classList.add("delete-ToDo-Btn");
        deleteToDoBtn.addEventListener("click", function(){
            newToDoItem.remove();
        });

        newToDoItem.appendChild(deleteToDoBtn);
        toDoList.appendChild(newToDoItem);
        newToDoInput.value = "";

    }


});

