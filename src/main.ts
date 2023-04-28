import "./style.css";

type Todoitem = {
  tarea: string;
  hecha: boolean;
};

const todoList: Array<Todoitem> = [];

// generate DOM structure for visualization of the model
const render = () => {
  const orderedList = document.querySelector<HTMLOListElement>("#todo-list")!;
  orderedList.textContent = null; // vaciar DOM element

  for (const todoItem of todoList) {
    const item = document.createElement("li");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    item.addEventListener('click', ()=>{
      checkbox.checked = !checkbox.checked;
      todoItem.hecha = checkbox.checked;
      console.log(todoList);

    });
    item.appendChild(checkbox);
    const tareaElem = document.createElement("span");
    tareaElem.textContent = todoItem.tarea;
    item.appendChild(tareaElem);
    orderedList?.appendChild(item);
  }
};

const nuevoItem = () => {
  const input = document.querySelector<HTMLInputElement>("#texto")!; //admiración es para indicar que el input existe, ya que podría ser null y typescript me da error. Es decir, si quito la admiración, los input referenciados más abajo saltan con error
  todoList.push({
    tarea: input.value,
    hecha: false,
  });
  input.value = "";
  render();
};

const programarEventos = () => {
  let form = document.querySelector<HTMLFormElement>("form");
  form?.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    nuevoItem();
  });
};
document.addEventListener("DOMContentLoaded", programarEventos);