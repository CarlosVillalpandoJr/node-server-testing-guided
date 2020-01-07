const db = require('../data/dbConfig.js');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

// this should resolve to the new hobbit
async function insert(hobbit) {
  return db('hobbits').insert(hobbit)
    .then(ids => {
      return db('hobbits').where({ id: ids[0] }).first()
    })
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('hobbits');
}

function findById(id) {
  return null;
}
