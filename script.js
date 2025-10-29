// Espera o DOM (estrutura HTML) ser completamente carregado
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Seleção de Elementos do DOM (Modal) ---
    const openModalBtn = document.getElementById('open-modal-btn');
    const modalOverlay = document.getElementById('modal-overlay');
    const closeModalBtn = document.getElementById('close-modal-btn');
    
    // Formulário e seus campos
    const addTaskForm = document.getElementById('add-task-form');
    const taskCategory = document.getElementById('task-category');
    const taskTitle = document.getElementById('task-title');
    const taskDescription = document.getElementById('task-description');
    const taskStatus = document.getElementById('task-status');

    // Colunas de Tarefas
    const taskColumns = {
        faculdade: document.getElementById('col-faculdade'),
        ieee: document.getElementById('col-ieee'),
        ic: document.getElementById('col-ic'),
        pessoal: document.getElementById('col-pessoal')
    };

    
    // --- 2. Funções de Manipulação do Modal ---

    function openModal() {
        modalOverlay.classList.add('active');
    }

    function closeModal() {
        modalOverlay.classList.remove('active');
    }

    function resetForm() {
        addTaskForm.reset();
    }


    // --- 3. Função Principal: Criar e Adicionar Tarefa ---

    function handleAddTask(event) {
        event.preventDefault(); 

        const category = taskCategory.value;
        const title = taskTitle.value;
        const description = taskDescription.value;
        const status = taskStatus.value;
        
        const statusText = taskStatus.options[taskStatus.selectedIndex].text;

        if (!category || !title) {
            alert('Por favor, preencha o Título e a Categoria.');
            return;
        }

        const taskCard = document.createElement('div');
        taskCard.classList.add('task-card');

        const statusClass = `status-${status}`; 

        taskCard.innerHTML = `
            <h4>${title}</h4>
            <p>${description}</p>
            <div class="status ${statusClass}">${statusText}</div>
        `;

        const correctColumn = taskColumns[category];
        if (correctColumn) {
            correctColumn.appendChild(taskCard);
        } else {
            console.error(`Erro: Coluna "${category}" não encontrada.`);
        }

        closeModal();
        resetForm();
    }


    // --- 4. Event Listeners (Modal) ---

    openModalBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);

    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

    addTaskForm.addEventListener('submit', handleAddTask);


    // ========================================================
    // --- 5. NOVO: Lógica do Modo Escuro/Claro (Theme Switcher) ---
    // ========================================================

    const themeToggle = document.getElementById('theme-toggle');

    /**
     * Aplica o tema salvo no localStorage ou o padrão do sistema
     */
    function loadTheme() {
        // 1. Verifica se há um tema salvo no localStorage
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme) {
            // Se houver, aplica o tema salvo
            document.body.setAttribute('data-theme', savedTheme);
            // Marca o checkbox se o tema salvo for escuro
            themeToggle.checked = (savedTheme === 'dark');
        } else {
            // Se não houver tema salvo, pode-se deixar o 'light' (do HTML)
            // ou (mais avançado) verificar a preferência do sistema operacional
            // Por simplicidade didática, manteremos o 'light'
            document.body.setAttribute('data-theme', 'light');
            themeToggle.checked = false;
        }
    }

    /**
     * Alterna o tema e salva a preferência no localStorage
     */
    function toggleTheme() {
        let newTheme;
        
        if (themeToggle.checked) {
            // Se o toggle está marcado, mude para o tema escuro
            newTheme = 'dark';
        } else {
            // Se não, mude para o tema claro
            newTheme = 'light';
        }
        
        // 1. Aplica o novo tema ao body
        document.body.setAttribute('data-theme', newTheme);
        
        // 2. Salva a preferência no localStorage
        localStorage.setItem('theme', newTheme);
    }

    // --- Event Listeners (Tema) ---
    
    // 1. Adiciona o listener para o clique no toggle
    themeToggle.addEventListener('change', toggleTheme);
    
    // 2. Carrega o tema salvo assim que a página é carregada
    loadTheme();

});