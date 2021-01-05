const bodyPaser = require('body-parser')
const ToDo = require('../models/todoModel')

module.exports = function(app)  {
    app.use(bodyPaser.json())
    app.use(bodyPaser.urlencoded({extended: true}))

    app.get('/api/todos/:uname', (req, res) => {
        ToDo.find({username: req.params.uname}, (err, todos) => {
            if(err) throw err;
            res.send(todos)
        })
    })
}