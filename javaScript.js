{
  const tasks = [];

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });
    render();
  };

  const cleanInput = (newTaskContent) => {
    const button = document.querySelector(".js-button");
    button.addEventListener("click" , () => {
newTaskContent.innerText='giii';
});
  };

  const toggleTaskDone = (ItemIndex) => {
    tasks[ItemIndex].done = !tasks[ItemIndex].done;
    render();
  };

  const removeTask = (ItemIndex) => {
    tasks.splice(ItemIndex, 1);
    render();
  };

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
                <li ${
                  task.done
                    ? 'class="divisionTasks__task--done"'
                    : 'class="divisionTasks__task"'
                }>
                
                <button class="checkButton js-done"> Zrobione ✔️</button>
                <button class="button js-remove">Usuń zadanie 🗑️</button>
                    ${task.content}
                   
            </li>
                      `;
    }
    document.querySelector(".js-tasks").innerHTML = htmlString;
    const removeButtons = document.querySelectorAll(".js-remove");
    removeButtons.forEach((removeButton, Index) => {
      removeButton.addEventListener("click", () => {
        removeTask(Index);
      });
      const toggleDone = document.querySelectorAll(".js-done");
      toggleDone.forEach((toggleDoneButton, Index) => {
        toggleDoneButton.addEventListener("click", () => {
          toggleTaskDone(Index);
        });
      });
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newTaskContent = document.querySelector(".js-newTask").value.trim();
    if (newTaskContent === "") {
      return;
    }

    addNewTask(newTaskContent);
  };

  const init = () => {
    render();
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("click", onFormSubmit, cleanInput);
  };
  init();
 
}
