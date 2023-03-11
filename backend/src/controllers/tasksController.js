const tasksModel = require('../models/tasksModel')

const getAll = async (request,response)=>{

    const tasks = await tasksModel.getAll();

    return response.status(200).json(tasks);
}

const createTask = async (request,response)=>{
    const createTask = await tasksModel.createTask(request.body);

    return response.status(201).json(createTask);
}

const deleteTask = async (request, response)=>{
    const { id } = request.params;

    const deletedTask = await tasksModel.deleteTask(id);

    return response.status(204).json();
}

const updateTask = async (request, response)=>{
    const { id } = request.params;
    
    const updatedTask = await tasksModel.updateTask(id,request.body);

    return response.status(204).json();
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask,
};