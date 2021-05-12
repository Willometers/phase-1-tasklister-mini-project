document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const text = document.getElementById("new-task-description");
  const list = document.getElementById("list");
  const tasks = document.getElementById("tasks");
  const li = document.createElement('li')
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    tasks.appendChild(li);
    li.innerText = text.value
  })
});
