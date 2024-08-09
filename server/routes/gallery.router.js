const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
});

// GET /gallery
router.get('/', (req, res) => {
  const queryText = `SELECT * from "gallery"`
  pool.query(queryText)
    .then((result) => {
    res.send(result.rows);
    })
    .catch((error)=>{
      console.log('error in GET',error);
      res.sendStatus(500);
    })
});

module.exports = router;
