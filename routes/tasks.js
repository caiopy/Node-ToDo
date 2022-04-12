const express = require('express')
const router = express.Router()

const {getAllTasks,createTask,getTask,updateTask,deleteTask} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

module.exports = router




//api.get('/api/v1/tasks') -> get all tasks
//api.post('/api/v1/tasks') -> create new task
//api.get('/api/v1/tasks/:id') -> get single task
//api.patch('/api/v1/tasks'/:id) -> update task
//api.delete('/api/v1/tasks/id') -> delete task