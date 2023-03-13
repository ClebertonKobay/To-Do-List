const tBody = document.querySelector('tbody');
const addForm = document.querySelector('.add-form');
const inputTask = document.querySelector('.input-task');

const fetchTasks = async ()=>{
    const response = await fetch('http://localhost:3333/tasks');
    const tasks = await response.json();
    return tasks;
}

const createElement = (tag, innerText = '',innerHTML = '')=>{
    const element = document.createElement(tag);

    if(innerText){
        element.innerText = innerText;
    }else if(innerHTML ){  
        element.innerHTML = innerHTML;
    }

    return element;
}

const addTask = async(event)=>{
    event.preventDefault();

    const task = {title:inputTask.value}

    await fetch('http://localhost:3333/tasks',{
        method:'post',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(task),
    });
    
    inputTask.value = '';

    loadTasks();
}

const createSelect = (value)=>{
    const options = `
    <option value="pendente">pendente</option>
    <option value="em andamento">em andamento</option>
    <option value="concluída">concluída</option>
    `;
    
    const select = createElement('select','',options);

    select.value = value;

    return select;
}


const createRow = (task)=>{

    const {id, title, created_at, status} = task;
    
    
    const tr = createElement('tr');
    const tdTitle = createElement('td',title);
    const tdCreatedAt = createElement('td',created_at);
    const tdStatus = createElement('td');
    const tdActions = createElement('td');
    
    const select = createSelect(status);
    tdStatus.appendChild(select);

    const btnEdit = createElement('button','','<span class="material-symbols-outlined">edit</span>');
    const btnDelete = createElement('button','','<span class="material-symbols-outlined">delete</span>')

    btnEdit.classList.add('btn-action')
    btnDelete.classList.add('btn-action')

    tdActions.appendChild(btnEdit)
    tdActions.appendChild(btnDelete)

    tr.appendChild(tdTitle);
    tr.appendChild(tdCreatedAt);
    tr.appendChild(tdStatus);
    tr.appendChild(tdActions);


    return tr;

}

const loadTasks = async ()=>{
    const tasks = await fetchTasks();
    tasks.forEach((task) => {
        const tr = createRow(task);
        tBody.appendChild(tr);
    });
}

addForm.addEventListener('submit',addTask);

loadTasks();
