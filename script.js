document.addEventListener("DOMContentLoaded", function() {
    // Constants declared for input button and task list area
    const taskInput = document.querySelector("#newtask input");
    const taskSection = document.querySelector('.tasks');

    // Listener for the Enter key. Used to add a new task.
    taskInput.addEventListener("keyup", (e) => {
        if (e.key === "Enter") {
            createTask();
        }
    });

    // The onclick event for the 'Add' button
    document.querySelector('#push').onclick = function() {
        createTask();
    };

    // Function that creates a task
    function createTask() {
        if (taskInput.value.length === 0) {
            alert("The task field is blank. Enter a task name and try again");
        } else {
            // This block inserts HTML that creates each task into the task area div element
            taskSection.innerHTML +=
                `<div class="task">
                <label id="taskname">
                <input onclick="updateTask(this)" type="checkbox" id="check-task">
                <p>${document.querySelector('#newtask input').value}</p>
                </label>
                <div class="delete">
                <i class="uil uil-trash"></i></div>`;

            // Adding click event listener to delete tasks
            var current_tasks = document.querySelectorAll(".delete");
            current_tasks.forEach(function(item) {
                item.addEventListener("click", function() {
                    this.parentNode.remove();
                });
            });

            // Check if the task list height exceeds 300px, and add overflow class accordingly
            taskSection.offsetHeight >= 300 ?
                taskSection.classList.add("overflow") :
                taskSection.classList.remove("overflow");
        }
    }

    // Function to update a task
    function updateTask(task) {
        let taskItem = task.parentElement.lastElementChild;
        if (task.checked) {
            taskItem.classList.add("checked");
        } else {
            taskItem.classList.remove("checked");
        }
    }
});
