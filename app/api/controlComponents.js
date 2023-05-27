const central = require('../central_modules')

const groups = ['compare', 'add', 'interval']

const groupSeparated = groups.map(elem => {
    return {
        group: elem,
        methods: Object.keys(central).filter(item => item.includes(elem))
    }
})

module.exports = {central, groupSeparated}