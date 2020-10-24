var toDo = document.getElementById('input');
var addBtn = document.getElementById('addBtn');

var container;


if (localStorage.getItem("container") == null) {
    container = [];
} else {
    container = JSON.parse(localStorage.getItem("container"));
    display();
}

/*insert*/
addBtn.addEventListener("click", function() {

    if (toDo.value == "") {
        alert("Create new task first....");
    } else {
        var task = {
            toDo: toDo.value,
            time: new Date(),
        }

        container.push(task);
        localStorage.setItem("container", JSON.stringify(container));

        display();
        toDo.value = " ";
    }

})


function display() {
    var ss = " ";

    for (var i = 0; i < container.length; i++) {
        ss += '<li class="checked list-group-item list-group-item-warning"><b>' + container[i].toDo + '</b><p>' +
            container[i].time + '</p> <button class="btn btn-warning " onClick="deleteTask(' + i + ')">X  </button></li>';
    }
    document.getElementById('ulElem').innerHTML = ss;
}


function deleteTask(id) {
    container.splice(id, 1);
    localStorage.setItem("container", JSON.stringify(container));
    display();
}