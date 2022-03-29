// get elements from DOM
let btnDOM = document.querySelector("#liveToastBtn");
let listDOM = document.querySelector("#list");
let taskDOM = document.querySelector("#task");
let liDOM = document.getElementsByTagName("li")

// check if there is a 'list' item on localStorage otherwise set it
if (localStorage.getItem("list") === null) {
    localStorage.setItem("list", JSON.stringify([]));
}

// get 'list' item from the localStorage
let localList = JSON.parse(localStorage.getItem("list"));

// set 'list' on page with close button
localList.forEach(element => {
    listDOM.innerHTML += `<li>${element}<span class="close">\u00D7</span></li>`;
});

// a function to add a new value to the 'list'
function newElement() {
    // if there is a value on 'input' add it to the list
    if (taskDOM.value.trim()) { // remove whitespaces if exist
        // add value to list array
        localList.push(taskDOM.value);

        // set updated 'list' on localStorage
        localStorage.setItem("list", JSON.stringify(localList));

        // show new added item on page
        listDOM.innerHTML += `<li>${taskDOM.value}<span class="close">\u00D7</span></li>`;

        //show success toast
        $(".success").toast("show");
    } else {
        // show error toast
        $(".error").toast("show");
    }

    // reset input value
    taskDOM.value = '';

}

// add click event to listDOM
listDOM.addEventListener('click', clickEvent);

function clickEvent(e) {
    // remove a task if clicked on close button
    if (e.target.className == 'close') {
        e.target.parentElement.remove();

        let removeList = ((e.target.parentElement.textContent).slice(0, -1));
        
        for (let i = 0; i < localList.length; i++) {
            if (localList[i] == removeList) {
                localList.splice(i, 1);
            }
        }
        localStorage.setItem('list', JSON.stringify(localList));
        // show remove toast
        $(".remove").toast("show");
    }else { 
        // otherwise check or uncheck element
        e.target.classList.toggle('checked');
        // show complete toast
        $(".complete").toast("show");
    }
}