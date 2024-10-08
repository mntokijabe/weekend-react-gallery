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

router.post('/', (req, res) => {
  console.log(req.body)
  const queryText = `
    INSERT INTO "gallery"
    ("url","title", "description")
    VALUES 
    ($1, $2, $3);`
  const queryValues = [
    req.body.itemUrl,
    req.body.itemTitle,
    req.body.itemDescription]

  pool.query(queryText, queryValues)
  .then((dbRes) => {
    res.sendStatus(200)
  })
  .catch((dbErr) => {
    console.log('error inserting new pic into database',dbErr);
    res.sendStatus(500)
  })
})

router.delete ('/:id', (req, res) => {
  const queryText = `
    DELETE FROM "gallery"
    WHERE "id" = $1;`
  const queryValue = [req.params.id];
  pool.query(queryText, queryValue)
  .then((dbRes) => {
    res.sendStatus(201)
  })
  .catch((dbErr) => {
    console.log('database error when deleting item',dbErr)
    res.sendStatus(500);
  })
})
module.exports = router;
