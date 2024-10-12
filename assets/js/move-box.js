document.addEventListener("DOMContentLoaded", () => {
    calcContentItem();
});

function allowDrop(e) {
    e.preventDefault();
}
  
function drag(e) {
    e.dataTransfer.setData("MyTodo", e.target.id);
    resetStyle(e, "drag");
    document.getElementById(e.target.id).style.cursor = "-webkit-grabbing";
    calcContentItem();
}
  
function drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("MyTodo");
    
    if(e.target.className == "content"){
        e.target.appendChild(document.getElementById(data));
    }
    resetStyle(data, "drop");
    calcContentItem();
}

function calcContentItem() {
    document.getElementById("counter_todo").innerHTML = document.querySelectorAll("#mainBox_todo .todoBox").length;
    document.getElementById("progress_todo").innerHTML = document.querySelectorAll("#mainBox_progress .todoBox").length;
    document.getElementById("completed_todo").innerHTML = document.querySelectorAll("#mainBox_completed .todoBox").length;
}

function resetStyle(target, status) {
    if(status == "drag") {
        target.target.style.boxShadow = "0rem 0rem 0.5rem 0.5rem grey";
    } else if(status == "drop") {
        document.getElementById(target).style.boxShadow = "0rem 0rem 0.5rem 0.2rem lightgrey";
    }
    document.querySelectorAll(".todoBox").forEach(element => {
        element.style.cursor = "-webkit-grab";
    });
}