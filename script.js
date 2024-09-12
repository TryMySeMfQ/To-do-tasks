// Quando o botão "Adicionar" é clicado, faz o que está dentro da função addTask
document.getElementById('addTaskButton').addEventListener('click', addTask);

// Função para adicionar uma nova tarefa à lista
function addTask() {
    // Pega o que foi digitado no campo de entrada
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim(); // Remove espaços extras

    // Se o campo de entrada estiver vazio, mostra uma mensagem de alerta e para a função
    if (taskText === '') {
        alert('Digite uma tarefa!');
        return;
    }

    // Pega a lista onde as tarefas vão aparecer
    const taskList = document.getElementById('taskList');
    // Cria um novo item para a lista
    const li = document.createElement('li');

    // Cria uma caixa de seleção para marcar a tarefa como concluída
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    // Adiciona um evento para marcar a tarefa como concluída
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            li.style.textDecoration = 'line-through'; // Risca o texto da tarefa
        } else {
            li.style.textDecoration = 'none'; // Remove o risco do texto
        }
    });

    // Adiciona a caixa de seleção e o texto da tarefa ao item da lista
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(taskText));

    // Cria um botão para excluir o item da lista
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir'; // Define o texto do botão
    // Quando o botão é clicado, remove o item da lista
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };

    // Adiciona o botão de excluir ao item da lista
    li.appendChild(deleteButton);
    // Adiciona o item com a caixa de seleção e o botão à lista
    taskList.appendChild(li);
    // Limpa o campo de entrada depois de adicionar a tarefa
    taskInput.value = '';
}

// Quando a tecla "Enter" é pressionada enquanto o campo de entrada está focado, adiciona a tarefa
document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});







