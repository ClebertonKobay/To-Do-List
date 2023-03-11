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
    const deletedTask = await tasksModel.deleteTask(request.body);

    return response.status(202).json({mesasge: 'task deleted'});
}

module.exports = {
    getAll,
    createTask,
};