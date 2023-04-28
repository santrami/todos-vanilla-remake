import "./style.css";

type Todoitem = {
  tarea: string;
  hecha: boolean;
};

const todoList: Array<Todoitem> = [];

const render = () => {
  // generate DOM structure for visualization of the model
  const orderedList = document.querySelector<HTMLOListElement>("#todo-list")!;
  orderedList.textContent = null; // vaciar DOM element

  for (const todoItem of todoList) {
    const item = document.createElement("li");
    item.textContent = todoItem.tarea;
    orderedList?.appendChild(item);
  }
};

let form = document.querySelector<HTMLFormElement>("form");

form?.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const input = document.querySelector<HTMLInputElement>("#texto")!;
  todoList.push({
    tarea: input.value,
    hecha: false,
  });
  input.value = "";
  render();
});
