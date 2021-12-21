const criaTarefaButton = document.getElementById('criar-tarefa');
const containerTasks = document.getElementById('lista-tarefas');
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
  containerTasks.appendChild(lista);
  inputText.value = '';
}

function eraseAll() {
  containerTasks.innerHTML = '';
}
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

// daqui pra baixo é bônus seu seboso
const removeSelButton = document.getElementById('remover-selecionado');
const moveUpButton = document.getElementById('mover-cima');
const moveDownButton = document.getElementById('mover-baixo');

document.addEventListener('click', (event) => {
  if (event.target.id === 'salvar-tarefas') {
    localStorage.setItem('key', containerTasks.innerHTML);
  }
});
window.onload = () => {
  if (localStorage.getItem('key') !== null) {
    containerTasks.innerHTML += localStorage.getItem('key');
  }
};

function moveUp() {
  const selected = document.querySelector('.selected');
  if (selected !== null && selected !== containerTasks.firstElementChild) {
    containerTasks.insertBefore(selected, selected.previousSibling);
  }
}

function moveDown() {
  const selected = document.querySelector('.selected');
  if (selected !== null && selected !== containerTasks.lastElementChild) {
    containerTasks.insertBefore(selected.nextElementSibling, selected);
  }
}

function removeSelected() {
  const selecionados = document.querySelectorAll('.item-list');
  for (let index = 0; index < selecionados.length; index += 1) {
    if (selecionados[index].classList.contains('selected')) {
      selecionados[index].remove();
    }
  }
}
removeSelButton.addEventListener('click', removeSelected);
moveDownButton.addEventListener('click', moveDown);
criaTarefaButton.addEventListener('click', criaTarefa);
moveUpButton.addEventListener('click', moveUp);
buttonApaga.addEventListener('click', eraseAll);
containerTasks.addEventListener('dblclick', doneMarker);
