const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

let editElement;
let editFlag = false;
let editID = "";


form.addEventListener('submit',addItem);
function addItem(e){

    e.preventDefault();
    

    let value = grocery.value;

    const id = new Date().getTime().toString();

    if( value !=="" && editFlag ===false){
        const element = document.createElement('article');

        element.classList.add('grocery-item');

        const attr =document.createAttribute('data-id');
        attr.value = id;

        element.setAttributeNode(attr);

        element.innerHTML = ` <p class="title">${value}</p>
        <div class="btn-container">
            <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <button type="button" class="delete-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>`;

        list.appendChild(element);
        displayAlert("item added","success");
        // container.classList.add('show-container');

        addToLocalStorage(id,value);
        setBackToDefault();

    }
    else if(value !=="" && editFlag ===true){
        console.log("editing")
    }
    else{
       displayAlert("Empty","danger")
    }

   

   
   

}

function displayAlert(text,action){
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);

    setTimeout(function(){
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    },1000)

}

function addToLocalStorage(id,value){
    console.log("added to local storage");
}

function setBackToDefault(){
    grocery.value = "";
    editFlag = false;
    editID = "";
}




// let newElement = document.createElement('h4');
// newElement.className = 'jsClassname';
// newElement.innerHTML = "The is cusotm js header";
// console.log(newElement)