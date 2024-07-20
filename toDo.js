const inputEl = document.querySelector("#task");
const plusEl = document.querySelector(".plus");
const resultEl = document.querySelector(".result");
const counterEl = document.querySelector(".counter");

const clearEl = document.querySelector(".btn");
const toDos = [];

plusEl.addEventListener("click", () => {
  if (inputEl.value !== "") {
    toDos.push(inputEl.value);
    counterEl.textContent = toDos.length;
  }
  addTask();
});
function addTask() {
  if (inputEl.value !== "") {
    const newDiv = document.createElement("div");

    newDiv.classList.add(
      "task",
      "mt-3",
      "d-flex",
      "align-items-center",
      "justify-content-between",
      "bg-secondary-subtle",
      "position-relative"
    );
    newDiv.innerHTML = `
            
          
            <strong class=" ps-2" >${inputEl.value} </strong>
            <div class="d-flex align-items-center justify-content-between gap-1">
            <i class=" edit fa-solid fa-pen-to-square"  
      
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"></i>
            <i class="del fa-solid fa-trash"></i>
            </div>
          
        `;
    resultEl.appendChild(newDiv);

    const delEl = newDiv.querySelector(".del");
    delEl.addEventListener("click", () => {
      newDiv.remove();
      toDos.pop();
      counterEl.textContent = toDos.length;
    });
    const modalEdit = document.querySelector("#modal-edit");
    const saveChange = document.querySelector(".save");

    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("edit")) {
        var current = e.target;
        modalEdit.value =
          current.parentElement.parentElement.children[0].textContent;

        saveChange.onclick = () => {
          current.parentElement.parentElement.children[0].textContent =
            modalEdit.value;
        };
      }
    });
  }
  inputEl.value = "";
}

clearEl.addEventListener("click", () => {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    task.remove();
    toDos.splice(0, toDos.length);
    counterEl.textContent = 0;
  });
});
