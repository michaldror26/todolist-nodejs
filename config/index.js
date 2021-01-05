const configValues = require('./config.json')

module.exports = {
    getDbConnectionString: () => {
        return `mongodb+srv://${configValues.uname}:${configValues.pwd}@cluster0.ibwft.mongodb.net/${configValues.db}?retryWrites=true&w=majority`
    }
}