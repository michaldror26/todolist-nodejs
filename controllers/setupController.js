const Todo = require('../models/todoModel')

module.exports = (app) => {
    app.get('/api/setupTodos', (req, res) => {
        const starterTodos = [
            {
                username: 'miryam',
                todo: 'go to work',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'miryam',
                todo: 'eat beakfast',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'miryam',
                todo: 'learn node',
                isDone: false,
                hasAttachment: false
            }
        ];

        Todo.create(starterTodos, (err, results) => {
            console.log("jhgtfg", err,results);
            res.send(results)
        });
    })
}