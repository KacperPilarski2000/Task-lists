{
  const tasks = [
    {
      content: "Wstać",
      done: true,
    },
    {
      content: "Umyć zęby",
      done: false,
    },
  ];

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });
    render();
  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };
const bindEvents = () => {removeButtons = document.querySelectorAll(".js-remove");

removeButtons.forEach((removeButton, index) => {
  removeButton.addEventListener("click", () => {
    removeTask(index);
  });
});
const toggleDone = document.querySelectorAll(".js-done");

toggleDone.forEach((toggleDoneButton, index) => {
  toggleDoneButton.addEventListener("click", () => {
    toggleTaskDone(index);
  });
});
};
  


  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `<li class="listItem"><button class="listItem__checkButton js-done">${
        task.done ? "✔" : ""
      }</button><span class="listItem__paragraph ${
        task.done ? "listItem__task--done" : ""
      }">${
        task.content
      }</span> <button class="listItem__button js-remove">🗑️</button></li>
            `;
    }
    document.querySelector(".js-tasks").innerHTML = htmlString;
bindEvents();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newTask");
    const newTaskElement = newTaskContent.value.trim();

    if (newTaskElement !== "") {
      addNewTask(newTaskElement);
      newTaskContent.value = "";
    }
    newTaskContent.focus();
  };

  const init = () => {
    render();
    const buttonElement = document.querySelector(".js-button");
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", onFormSubmit);
    buttonElement.addEventListener("click", onFormSubmit);
  };

  init();
}
