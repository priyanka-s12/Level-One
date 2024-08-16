const tasks = [
  { id: 1, title: 'Task 1', status: 'todo' },
  { id: 2, title: 'Task 2', status: 'inProgress' },
  { id: 3, title: 'Task 3', status: 'completed' },
  { id: 4, title: 'Task 4', status: 'todo' },
];

const taskSelect = document.querySelector('#taskSelect');
const taskListContainer = document.querySelector('#taskList');

function renderTasks(selectedTask) {
  const filteredTasks =
    selectedTask !== 'all'
      ? tasks.filter((task) => task.status === selectedTask)
      : tasks;

  const taskListHTML = filteredTasks.map(
    (task) =>
      `
    <li>
    <strong>ID: </strong>${task.id}<br>
    <strong>Title: </strong>${task.title}<br>
    <strong>Status: </strong>${task.status}<br>
    <hr>
    </li>
    `
  );
  taskListContainer.innerHTML = taskListHTML.join('');
}

taskSelect.addEventListener('change', function () {
  renderTasks(taskSelect.value);
});

renderTasks(taskSelect.value);
