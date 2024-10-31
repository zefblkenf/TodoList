//selectors
const todoBtn =document.querySelector('.todo-button');
const todoInput= document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

//event listeners

todoBtn.addEventListener('click',addTask);
document.querySelectorAll("ul li").forEach(li=>{
    addEventListener('click',console.log("bhrtg"));
})

//function
function addTask(e)
{
    e.preventDefault();
    console.log(todoInput.value);
    

    //creat li
const todoli = document.createElement("li");
todoli.classList.add("todo");// an error that i did is that i didn't put the point before the class name which showed an empty small white box w

//creat div
const tododiv =document.createElement("div");
tododiv.classList.add("todo-item");
tododiv.innerText=todoInput.value;



//creat complete button


const completeBtn = document.createElement("button");
completeBtn.classList.add("complete-btn");
completeBtn.innerHTML='<i class="fa fa-check" aria-hidden="true"></i>';


//create trush button
const trushBtn = document.createElement("button");
trushBtn.classList.add("trush-btn");
trushBtn.innerHTML='<i class="fa fa-trash" aria-hidden="true"></i>';


//isrt div + b1 + b2 ->li
todoli.appendChild(tododiv);
todoli.appendChild(completeBtn);
todoli.appendChild(trushBtn);

//insert li -> ul
todoList.appendChild(todoli);

trushBtn.addEventListener('click',(event) =>{
    event.stopPropagation();
    const parent =event.target.closest('li');
    todoList.removeChild(parent);
})

completeBtn.addEventListener('click',(event)=>{
  
    event.stopPropagation();
    const parent =event.target.closest('li');
    parent.querySelector('div').style.backgroundColor = "green";
    parent.querySelector('div').innerHTML= parent.querySelector('div').innerHTML + " (done)";
})



//erase input
todoInput.value= "";
    
}





