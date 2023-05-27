const { groupSeparated } = require('../controlComponents')
class MethodControler {
    listGroups(req, res) {
        return res.status(200).send([ groupSeparated ])
    }
}

module.exports = new MethodControler()