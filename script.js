document.addEventListener("DOMContentLoaded", () => {
    const addTask = document.getElementById("addTask");
    const taskinput = document.getElementById("inputTask");
    const taskList = document.getElementById("taskList");

    addTask.addEventListener("click", addBtn);
    taskinput.addEventListener('keypress', (e) => {
        if(e.key === "Enter") addBtn();
    });

    function addBtn() {
        const taskText = taskinput.value.trim();
        if(taskText === "") return;

        const taskItem = document.createElement("li");
        taskItem.classList.add("todo-item");
        
        const taskContent = document.createElement("span");
        taskContent.textContent = taskText; 
        taskContent.addEventListener("click", () => {
            taskItem.textContent = `🎉 Congratulations`;
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.addEventListener("click", () => {
            const confirmDelete = confirm("Confirm to delete?");
            if (confirmDelete) {
                taskList.removeChild(taskItem);
            }
        });

        const refreshBtn = document.getElementById("refresh")
        refreshBtn.addEventListener("click", () => {
            taskList.removeChild(taskItem);
            taskinput.value = "";
        })

        taskItem.appendChild(taskContent);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);

        taskinput.value = "";
    }
});