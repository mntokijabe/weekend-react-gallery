const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  const change = req.body.change;
  const itemIdToChange = req.params.id;

  let sqlText;
  if(change === 1){
    sqlText = `UPDATE "gallery"
                SET "likes" = "likes" + 1
                WHERE "id" = $1;`
  }
  else {
    sqlText = `UPDATE "gallery"
    SET "likes" = "likes" - 1
    WHERE "id" = $1;`
  }
  sqlValue = [itemIdToChange];
  pool.query(sqlText, sqlValue)
  .then((dbResult) =>{
    res.sendStatus(200)
  })
  .catch((dbError)=>{
    console.log('error updating database likes',dbError);
    res.sendStatus(500)
  })
});

// GET /gallery
router.get('/', (req, res) => {
  const queryText = `SELECT * from "gallery"
                    ORDER BY "likes" DESC, "id";`
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
