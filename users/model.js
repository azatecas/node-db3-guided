const db = require('../data/db-config.js');

module.exports = {
    all,
    findById,
    update
}

function all() {

    return db('users')
}

function findById(id){
    return db('users')
        .where({ id })
        .first();
}

function update(id, change){
    return db('users')
        .where({ id })
        .update(change)
        .then(() => {
            return findById(id);
        })
}