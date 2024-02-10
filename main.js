function addTask() {
    let taskInput = document.querySelector('.newTask');
   let taskList = document.querySelector('.taskList');

    if (taskInput.value.trim() !== '') {
        let li = document.createElement('li');
        li.innerHTML = '<input type="checkbox" onclick="toggleTaskStatus(this)"> ' + taskInput.value;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function toggleTaskStatus(checkbox) {
    if (checkbox.checked) {
        checkbox.parentElement.classList.add('checked');
    } else {
        checkbox.parentElement.classList.remove('checked');
    }
}
