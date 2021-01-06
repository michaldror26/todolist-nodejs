const bodyPaser = require('body-parser')
const e = require('express')
const Todos = require('../models/todoModel')
const ToDos = require('../models/todoModel')

module.exports = function(app)  {
    app.use(bodyPaser.json())
    app.use(bodyPaser.urlencoded({extended: true}))

    app.get('/api/todos/:uname', (req, res) => {
        ToDos.find({username: req.params.uname}, (err, todos) => {
            if(err) throw err;
            res.send(todos)
        })
    })

    app.get('/api/todos/:id', (req, res) => {
        ToDos.findById({id: req.params.id}, (err, todos) => {
            if(err) throw err
            res.send(todos)
        })
    })

    app.post('/api/todo', (req, res) => {
        if (req.body.id) {
            ToDos.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                hasAttachment: req.body.hasAttachment,
                isDone: req.body.isDone
            }, (err) => {
                if (err) throw err
                res.send('Success')
            })
        }
        else {
            const newtodo = ToDos({
                username: req.body.username,
                todo: req.body.todo,
                hasAttachment: req.body.hasAttachment,
                isDone: req.body.isDone
            })
            newtodo.save((err) => {
                if (err) throw err
                res.send('Success')
            })
        }
    })

    app.delete('/api/todo/:id', (req, res) => {
        Todos.findByIdAndRemove(req.params.id , (err) => {
            if (err) throw err
            res.send('Success')
        })
    })
}