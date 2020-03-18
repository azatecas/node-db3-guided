const express = require('express');

const db = require('../data/db-config.js');

const router = express.Router();

router.get('/', (req, res) => {
    /* 
        select p.*, u.username as author
        from posts as p
        join users as u on p.user_id = u.id;
    */
  db('posts as p')
  .join("users as u", "p.user_id", "u.id")
  .select("p.*", "u.username as author")
  .then(users => {
    res.json(users);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to get users' });
  });
});

// router.get('/:id', (req, res) => {
//   const { id } = req.params;

//   db('users').where({ id })
//   .then(users => {
//     const user = users[0];

//     if (user) {
//       res.json(user);
//     } else {
//       res.status(404).json({ message: 'Could not find user with given id.' })
//     }
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to get user' });
//   });
// });


module.exports = router;