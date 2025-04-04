const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
};

// Initialize Variables
const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

let count = 3;
itemCountSpan.innerText = count;

// Initial unchecked count
let uncheckedCount = 3;
uncheckedCountSpan.innerText = uncheckedCount;

// Function to recalculate unchecked items
function countUnchecked() {
  let newUncheckedCount = 0;
  const allCheckboxes = list.querySelectorAll('input[type="checkbox"]');
  allCheckboxes.forEach(checkbox => {
    if (!checkbox.checked) {
      newUncheckedCount++;
    }
  });
  uncheckedCount = newUncheckedCount;
  uncheckedCountSpan.innerText = uncheckedCount;
}

// Clear all items
function clearList() {
  while (list.firstChild) {
    list.firstChild.remove();
  }
  count = 0;
  uncheckedCount = 0;
  itemCountSpan.innerText = count;
  uncheckedCountSpan.innerText = uncheckedCount;
}

// Add new todo item
function newTodo() {
  const taskText = prompt("Task: ");
  if (!taskText) return; // avoid adding empty tasks

  // Create <li>
  const listItem = document.createElement('li');

  // Create checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'point-hover';
  checkbox.addEventListener('click', countUnchecked); // Add event listener

  // Append elements
  listItem.appendChild(checkbox);
  listItem.appendChild(document.createTextNode(taskText));
  list.appendChild(listItem);

  // Update counters
  count++;
  uncheckedCount++;
  itemCountSpan.innerText = count;
  uncheckedCountSpan.innerText = uncheckedCount;

  // Create the box around each task
  const wrapperDiv = document.createElement('div'); // Create the div
  wrapperDiv.className = 'taskBox';
  
  listItem.parentNode.insertBefore(wrapperDiv, listItem); // insert the wrapperDiv BEFORE the listItem
  wrapperDiv.appendChild(listItem);
}

// Attach event listeners to existing checkboxes (if any)
const initialCheckboxes = list.querySelectorAll('input[type="checkbox"]');
initialCheckboxes.forEach(checkbox => {
  checkbox.addEventListener('click', countUnchecked);
});
