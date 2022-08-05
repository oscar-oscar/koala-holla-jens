const express = require('express');
const koalaRouter = express.Router();

// DB CONNECTION
const currentInventory = [
    {
        id: 1,
        name: 'Scotty',
        gender: 'M',
        age: 4,
        ready: 'Yes',
        notes: 'Born in Guatemala'
    },
    {
        id: 2,
        name: 'Jean',
        gender: 'F',
        age: 5,
        ready: 'Yes',
        notes: 'Allergic to lots of lava'
    },
    {
        id: 3,
        name: 'Ororo',
        gender: 'F',
        age: 7,
        ready: 'No',
        notes: 'Loves listening to Paula (Abdul)'
    },
    {
        id: 4,
        name: 'Logan',
        gender: 'M',
        age: 15,
        ready: 'No',
        notes: 'Loves the sauna'
    },
    {
        id: 5,
        name: 'Charlie',
        gender: 'M',
        age: 9,
        ready: 'Yes',
        notes: 'Favorite band is Nirvana'
    },
    {
        id: 6,
        name: 'Betsy',
        gender: 'F',
        age: 4,
        ready: 'Yes',
        notes: 'Has a pet iguana'
    }  
];

// GET
koalaRouter.get('/', (req, res) =>{
    res.send(currentInventory);
});

// POST
koalaRouter.post('/', (req, res) => {
    const koala = req.body;
    currentInventory.push(koala);
    res.sendStatus(201);
  });

// PUT


// DELETE

module.exports = koalaRouter;