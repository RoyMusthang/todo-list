const criaTarefaButton = document.getElementById('criar-tarefa');
const oderList = document.getElementById('lista-tarefas');
const buttonApaga = document.getElementById('apaga-tudo');
const finishied = document.getElementById('remover-finalizados');

document.addEventListener('click', (event) => {
  const alvo = event.target;
  if (alvo.className === 'item-list') {
    const selected = document.querySelector('.selected');
    if (selected !== null) {
      selected.classList.remove('selected');
      selected.style.backgroundColor = 'white';
    }
    alvo.classList.add('selected');
    alvo.style.backgroundColor = 'gray';
  }
});

function criaTarefa() {
  const inputText = document.getElementById('texto-tarefa');
  const lista = document.createElement('li');
  lista.className = 'item-list';
  lista.innerText = inputText.value;
  oderList.appendChild(lista);
  inputText.value = '';
}
criaTarefaButton.addEventListener('click', criaTarefa);

function eraseAll() {
  oderList.innerHTML = '';
}
buttonApaga.addEventListener('click', eraseAll);
// aih nobru apelãoooooooo
function removeDone() {
  const selecionados = document.querySelectorAll('.completed');
  for (let index = 0; index < selecionados.length; index += 1) {
    selecionados[index].remove();
  }
}
finishied.addEventListener('click', removeDone);

function doneMarker(evento) {
  const alvo = evento.target;
  if (alvo.classList.contains('completed')) {
    alvo.classList.remove('completed');
  } else {
    alvo.classList.add('completed');
  }
}
oderList.addEventListener('dblclick', doneMarker);

// daqui pra baixo é bônus seu seboso
const removeSelButton = document.getElementById('remover-selecionado');
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');

document.addEventListener('click', (event) => {
  if (event.target.id === 'salvar-tarefas') {
    localStorage.setItem('key', oderList.innerHTML);
  }
});
window.onload = function initialD() {
  if (localStorage.getItem('key') !== null) {
    oderList.innerHTML += localStorage.getItem('key');
  }
};

function moveUp() {
  const selected = document.querySelector('.selected');
  if (selected !== null && selected !== oderList.firstElementChild) {
    oderList.insertBefore(selected, selected.previousSibling);
  }
}
moveUpButton.addEventListener('click', moveUp);

function moveDown() {
  const selected = document.querySelector('.selected');
  if (selected !== null && selected !== oderList.lastElementChild) {
    oderList.insertBefore(selected.nextElementSibling, selected);
  }
}
moveDownButton.addEventListener('click', moveDown);

function removeSelected() {
  const selecionados = document.querySelectorAll('.item-list');
  for (let index = 0; index < selecionados.length; index += 1) {
    if (selecionados[index].classList.contains('selected')) {
      selecionados[index].remove();
    }
  }
}
removeSelButton.addEventListener('click', removeSelected);
