const express = require('express')
const { Sequelize, DataTypes } = require('sequelize');
const Task = require('./models/task')

const cors = require('cors');
const app = express()

app.use(cors());

const sequelize = new Sequelize({ dialect: 'sqlite', storage: './task-list.db' });
const tasks = Task(sequelize, DataTypes)

app.set('view engine', 'ejs')

//app.use(express.json())

app.get('/tarefasdehoje', async (req, res) => {
   const resultados = await tasks.findAll()

    res.json({ resultados: resultados})
})

  //Create task
//app.post('/tarefasdehoje', (req, res) => {
 //const body = req.body
  
// res.json(body)
// })

app.listen(3000, () => {
    console.log('Iniciando o ExpressJS na porta 3000')
  })


  
  // Show task
  //app.get('/tarefasdehoje/:id', (req, res) => {
  //  const taskId = req.params.id
  
 //   res.send({ action: 'Showing task', taskId: taskId })
 // })
  
  // Update task
  //app.put('/tarefasdehoje/:id', (req, res) => {
    //const taskId = req.params.id
  
    //res.send({ action: 'Updating task', taskId: taskId })
  //})
  
  // Delete task
 /// app.delete('/tarefasdehoje/:id', (req, res) => {
   // const taskId = req.params.id
  
   // res.send({ action: 'Deleting task', taskId: taskId })
 // })