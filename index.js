const input = document.querySelector('.input-1');
const input2 = document.getElementById('input2');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const form = document.getElementById('form');
const empty = document.querySelector('.empty');
const collection = [];

function Awesome(book, author) {
  this.book = book;
  this.author = author;
}

function addDeleteBtn() {
  const deleteBtn = document.createElement('button');

  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'btn-delete';

  deleteBtn.addEventListener('click', (e) => {
    const item = e.target.parentElement;
    ul.removeChild(item);

    const items = document.querySelectorAll('li');

    if (items.length === 0) {
      empty.style.display = 'block';
    }
  });

  return deleteBtn;
}

addBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const inputs = new Awesome(input.value, input2.value);
  collection.push(inputs);

  const text = input.value;
  const text2 = input2.value;

  if (text !== '') {
    const li = document.createElement('li');
    li.className = 'books-li';
    const p = document.createElement('p');
    const secondParagraph = document.createElement('p');
    p.textContent = text;
    secondParagraph.textContent = text2;

    li.appendChild(p);
    li.appendChild(secondParagraph);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = '';
    empty.style.display = 'none';
  }
});

// Storage..............................

const storedInfo = form.querySelectorAll('#input1, #input2');

function setInputs() {
  localStorage.setItem('book', storedInfo[0].value);
  localStorage.setItem('author', storedInfo[1].value);
}

for (let i = 0; i < storedInfo.length; i += 1) {
  storedInfo[i].addEventListener('focusout', setInputs);
}

if (localStorage.getItem('book')) {
  storedInfo[0].setAttribute('value', localStorage.getItem('book'));
}

if (localStorage.getItem('author')) {
  storedInfo[1].setAttribute('value', localStorage.getItem('author'));
}
