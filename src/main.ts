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
    checkbox.type="checkbox";
    checkbox.checked = todoItem.hecha;
    item.appendChild(checkbox)
    const tareaElem = document.createElement("span");
    tareaElem.textContent = todoItem.tarea;
    item.appendChild(tareaElem)
    orderedList?.appendChild(item);
  }
};


const nuevoItem = () => {
  const input = document.querySelector<HTMLInputElement>("#texto")!;//admiración es para indicar que el input existe, ya que podría ser null y typescript me da error. Es decir, si quito la admiración, los input referenciados más abajo saltan con error
  todoList.push({
    tarea: input.value,
    hecha: false,
  });
  console.log(todoList);
  input.value = "";
  render();
}

let form = document.querySelector<HTMLFormElement>("form");
form?.addEventListener("submit", (e:Event)=>{
  e.preventDefault();
  nuevoItem();
});