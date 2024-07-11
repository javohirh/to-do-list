const inputEl = document.querySelector("#task");
const plusEl = document.querySelector(".plus");
const resultEl = document.querySelector(".result");
const counterEl = document.querySelector(".counter");

const clearEl = document.querySelector(".btn");
const toDos = [];
console.log(plusEl);
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
            <i class="del fa-solid fa-trash"></i>
          
        `;
    resultEl.appendChild(newDiv);

    const delEl = newDiv.querySelector(".del");
    delEl.addEventListener("click", () => {
      newDiv.remove();
      toDos.pop();
      counterEl.textContent = toDos.length;
    });
  }
}

clearEl.addEventListener("click", () => {
  const tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    task.remove();
    toDos.splice(0, toDos.length);
    counterEl.textContent = 0;
  });
});
