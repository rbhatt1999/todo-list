import "./style.css";
import dots from "./icons/dots.png"
let todoList = [
  {
    index: 0,
    description: 'Awesome Books with ES6',
    completed: false,
  },
  {
    index: 1,
    description: 'ToDo List: add_list item',
    completed: false,
  },
  {
    index: 2,
    description: 'ToDo List: add_Remove',
    completed: false,
  },
  {
    index: 3,
    description: 'ToDo List: interactive-list',
    completed: false,
  },
];

const outputList = document.querySelector('.output-list');

todoList.forEach((item)=>{
  const div = document.createElement('div');
  div.className = 'list-items';
  div.innerHTML= `<label for="checkbox"><input class="checkbox-input" type="checkbox" name="checkbox" id="${item.index}"> ${item.description}</label>
  <img src="${dots}">`
  outputList.appendChild(div);
})

