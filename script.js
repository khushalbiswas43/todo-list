// DOM Elements
const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const clearBtn = document.getElementById('clearBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const taskCount = document.getElementById('taskCount');
const completedCount = document.getElementById('completedCount');

// State
let todos = [];
let currentFilter = 'all';
let editingId = null;

// Load todos from localStorage
function loadTodos() {
    const saved = localStorage.getItem('todos');
    if (saved) {
        todos = JSON.parse(saved);
        render();
    }
}

// Save todos to localStorage
function saveTodos() {
    localStorage.setItem('todos', JSON.stringify(todos));
}

// Add new todo
function addTodo() {
    const text = taskInput.value.trim();
    if (text === '') {
        taskInput.classList.add('shake');
        setTimeout(() => {
            taskInput.classList.remove('shake');
        }, 300);
        return;
    }

    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false,
        createdAt: new Date().toISOString()
    };

    todos.unshift(newTodo);
    taskInput.value = '';
    taskInput.focus();
    saveTodos();
    render();
}

// Toggle todo completion
function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        render();
    }
}

// Delete todo
function deleteTodo(id) {
    const todoElement = document.querySelector(`[data-id="${id}"]`);
    if (todoElement) {
        todoElement.classList.add('deleting');
        setTimeout(() => {
            todos = todos.filter(t => t.id !== id);
            editingId = null;
            saveTodos();
            render();
        }, 300);
    } else {
        todos = todos.filter(t => t.id !== id);
        editingId = null;
        saveTodos();
        render();
    }
}

// Edit todo
function editTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        const newText = prompt('Edit task:', todo.text);
        if (newText && newText.trim() !== '') {
            todo.text = newText.trim();
            saveTodos();
            render();
        }
    }
}

// Clear completed todos
function clearCompleted() {
    todos = todos.filter(t => !t.completed);
    saveTodos();
    render();
}

// Filter todos
function filterTodos() {
    switch (currentFilter) {
        case 'active':
            return todos.filter(t => !t.completed);
        case 'completed':
            return todos.filter(t => t.completed);
        default:
            return todos;
    }
}

// Update stats
function updateStats() {
    const total = todos.length;
    const completed = todos.filter(t => t.completed).length;
    taskCount.textContent = total;
    completedCount.textContent = completed;
}

// Render todos
function render() {
    const filtered = filterTodos();
    updateStats();

    if (filtered.length === 0) {
        todoList.innerHTML = '<div class="empty-state"><p>📭 No tasks to show</p></div>';
        return;
    }

    todoList.innerHTML = filtered.map(todo => `
        <li class="todo-item ${todo.completed ? 'completed' : ''}" data-id="${todo.id}">
            <input 
                type="checkbox" 
                class="checkbox"
                ${todo.completed ? 'checked' : ''}
                onchange="toggleTodo(${todo.id})"
            >
            <span class="todo-text">${escapeHtml(todo.text)}</span>
            <div class="todo-actions">
                <button class="btn-edit" onclick="editTodo(${todo.id})" title="Edit">✏️</button>
                <button class="btn-delete" onclick="deleteTodo(${todo.id})" title="Delete">🗑️</button>
            </div>
        </li>
    `).join('');
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Event Listeners
addBtn.addEventListener('click', addTodo);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
});

clearBtn.addEventListener('click', clearCompleted);

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        render();
    });
});

// Initialize
loadTodos();
